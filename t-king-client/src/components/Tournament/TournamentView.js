import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTournament, updateMatch} from './../../redux/mainReducer';
import RoundColumn from './RoundColumn';
import LineColumn from './LineColumn';

const io = require('socket.io-client');
const socket = io();

class TournamentView extends Component {
    constructor(props) {
        super(props)
        this.state= {
            currentRoom: 0
        }

        socket.on('match update', (data) => {
            props.updateMatch(data);
            console.log('update listener', data)
        })

    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        let nextID = 't' + nextProps.tournamentData.id;
        if (nextID !== 't' + null && nextID !== this.state.currentRoom) {
            let roomID = 't' + nextProps.tournamentData.id;
            socket.emit('room', {room: roomID})
            this.setState({
                currentRoom: roomID
            })
        }
    }

    componentWillUnmount() {
        socket.emit('leave room', {room: this.state.currentRoom})
    }

    render() {
        fetchData(this.props);
        let width = this.props.tournamentData.rounds.length * 248;
        let setWidth = {
            "width":width
        }
        let tree = makeTree(this.props.tournamentData)
        return (
            <main>
                <div className="tournament-top-section">
                        {this.props.tournamentData.name}
                </div>
                <div className="tournament-divider"></div>
                    <div className="tournament-wrapper">
                    <div className="bracket-container" style={setWidth}>
                        {tree}
                    </div>
                    </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps,
    {getTournament, updateMatch}
)(TournamentView);


//makeTree is a function that takes in tournament data from the API tree structure
//and parses/renders it using dynamic nested components, and passes the components
//the necessary props
const makeTree = function(data) {
    let tree = [];
    let columnHeight = data.rounds[0].length * 124
    let columnCount = data.rounds.length;
    let i1 = columnCount + 1;
    let i2 = data.rounds[0].length / 2
    for(let i = 0; i < columnCount; i++) {
            tree.push(<RoundColumn 
                key={i} 
                matchCount={data.rounds[i].length}
                matches={data.rounds[i]}
                round={i}
                widthDivisor={columnCount}
                height={columnHeight}/>
            )
            if(i !== columnCount - 1) {
                tree.push(<LineColumn
                    key={i1} 
                    cardCount={i2}
                    height={columnHeight}
                    widthDivisor={columnCount-1}/>
                )
            }
            i1++;
            i2 /= 2;
    }
        return tree;
}

//fetchData is a function used to fetch the relevant tournament tree relative to the
//path for rendering, if the desired tournament isn't already present in the redux
//state
const fetchData = function(props) {
    let {id} = props.match.params
    if (!props.tournamentData.id || id * 1 !== props.tournamentData.id) {
        return props.getTournament(id);
    } else {
        return;
    }
}
