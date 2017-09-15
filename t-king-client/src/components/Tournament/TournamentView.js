import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTournament, updateMatch, joinRoom, leaveRoom} from './../../redux/mainReducer';
import RoundColumn from './RoundColumn';
import LineColumn from './LineColumn';
import {Progress} from 'semantic-ui-react';
import { getStats, getUser } from '../../services/user';

class TournamentView extends Component {
    constructor(props) {
        super(props)
        this.state = {
          user: {},
          stats: {}
        }
    }

    getWinner() {
        var userID = this.props.tournamentData.creator;
        getUser(userID)
        .then(user => {
            getStats(userID)
            .then(stats => {
                this.setState({user,stats})
                console.log(user, stats);
            })
        })
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.tournamentData.id !== this.props.tournamentData.id) {
        this.props.joinRoom(nextProps.tournamentData.id)
      }
    }

    componentWillUnmount() {
      this.props.leaveRoom(this.props.tournamentData.id)
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
                        <div>
                            <h2>{this.props.tournamentData.name}</h2><br />
                            {this.props.tournamentData.description}<br />
                            {this.props.tournamentData.type ? <img className="tournament-icon" alt="type" src={`/public/img/icons/${this.props.tournamentData.type}.png`}/> : null}
                        </div>
                        {this.props.tournamentData.id ? this.props.tournamentData.rounds[this.props.tournamentData.rounds.length - 1][0].winner ?
                        <div className="tournament-win-banner">
                            <h2>{this.props.tournamentData.id ? this.props.tournamentData.rounds[this.props.tournamentData.rounds.length - 1][0].winner.name : null}</h2>
                            <h3>is the tournament king!</h3>
                        </div> : null : null}

                    </div>
                </div>
                <p className="tournament-progress">Tournament Progress - {!progress ? 0 : progress}%</p>
                <div className="tournament-divider">
                    <Progress percent={progress ? progress : 0} color="green" attached="top"/>
                </div>
                {/* <p className="tournament-progress">{this.props.tournamentData.type}</p> */}
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
    {getTournament, updateMatch, joinRoom, leaveRoom}
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
                round={i+1}
                matches={data.rounds[i]}
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
    if (!props.tournamentData.id || id * 1 !== props.tournamentData.id) {
        return props.getTournament(id);
    } else {
        return;
    }
}
