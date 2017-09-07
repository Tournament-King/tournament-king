import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTournament, updateMatch, advanceWinner} from './../../redux/mainReducer';
import RoundColumn from './RoundColumn';
import LineColumn from './LineColumn';
import {Progress} from 'semantic-ui-react';

const io = require('socket.io-client');
const socket = io();

class TournamentView extends Component {
    constructor(props) {
        super(props)
        this.state= {
            currentRoom: 0
        }

        socket.on('match update', (data) => {
            console.log(data);
            props.updateMatch(data);
        })

        socket.on('new matches', (data) => {
            console.log('new matches listener', data)
            props.advanceWinner(data)
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
        let progress = calcProgress(this.props.tournamentData)
        return (
            <main>
                <div className="tournament-top-section">
                    <div className="tournament-top-content">
                        <h2>{this.props.tournamentData.name}</h2><br />
                        {this.props.tournamentData.description}
                    </div>
                </div>
                <div className="tournament-divider">
                    <Progress percent={progress ? progress : 0} color="green" attached="top"/>
                </div>
                    <div className="bracket-svg">
                        {/* <svg height="172" width="172" transform="scale(4)" className="bracket-path">
                            <path d="m 128.15675,76.842188 c 18.17934,19.200353 -7.95594,45.596422 -7.95594,45.596422 0,0 -8.21673,-0.91715 -7.94711,-10.65876 0,0 -0.71824,-4.74042 6.83107,-5.34817 0,0 -7.48522,-0.75139 -7.48522,-10.15267 0,0 -2.05087,8.67419 -9.70847,8.05982 0,0 6.05978,1.78566 5.00341,6.18353 -0.80665,3.39233 -2.91939,7.65318 -10.879762,7.36147 C 87.992481,84.656696 115.18193,63.434206 115.18193,63.434206 105.29667,61.241901 93.214676,49.354391 86.012334,36.934272 78.812201,49.354391 66.732421,61.241901 56.836106,63.434206 c 0,0 27.202711,21.22249 19.176044,54.449624 -7.969208,0.29392 -10.073114,-3.96914 -10.884178,-7.36147 -1.056373,-4.39787 5.003407,-6.18353 5.003407,-6.18353 -7.67307,0.61437 -9.706256,-8.05982 -9.706256,-8.05982 0,9.40128 -7.491851,10.15267 -7.491851,10.15267 7.55815,0.60775 6.826645,5.34817 6.826645,5.34817 0.298348,9.74161 -7.933848,10.65876 -7.933848,10.65876 0,0 -26.135287,-26.396069 -7.955947,-45.596422 0,0 -19.65561,0.917144 -43.583122,-20.641263 0,0 43.84832,66.836585 44.305787,80.551755 h 82.845723 c 0.4641,-13.71517 44.29695,-80.551755 44.29695,-80.551755 -23.92089,21.558407 -43.57871,20.641263 -43.57871,20.641263 z" />                    
                        </svg> */}
                    </div>
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
    {getTournament, updateMatch, advanceWinner}
)(TournamentView);


const calcProgress = function(data) {
    let total = 0;
    let active = 0;
    let complete = 0;
    data.rounds.forEach(a => {
        a.forEach(s => {
            if (s.status === 'active') {
                active++
            } else if (s.status === 'complete') {
                complete++
            }
            total++
        })
    })
    return Math.floor((active + (complete*2)) / (total*2) * 100)
}

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
    let id = window.location.pathname.split('/')[2]
    console.log(id)
    if (!props.tournamentData.id || id * 1 !== props.tournamentData.id) {
        return props.getTournament(id);
    } else {
        return;
    }
}
