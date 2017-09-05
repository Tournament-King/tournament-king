import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateMatch} from './../../redux/mainReducer';

const io = require('socket.io-client');
const socket = io();

class AdminControls extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.startMatch = this.startMatch.bind(this);
        this.incrementPlayerOne = this.incrementPlayerOne.bind(this);
        this.decrementPlayerOne = this.decrementPlayerOne.bind(this);
        this.incrementPlayerTwo = this.incrementPlayerTwo.bind(this);
        this.decrementPlayerTwo = this.decrementPlayerTwo.bind(this);
        this.setWinner = this.setWinner.bind(this);

    }

    startMatch() {
        let {round} = this.props.activeMatch;
        let tournament = this.props.tournamentData.id;
        let {id} = currentMatch(this.props);
        let update = {
            id: id,
            tournament: tournament,
            round: round,
            player1_score: 0,
            player2_score: 0           
        }
        this.props.updateMatch(update);
        this.emitUpdate(update);
    }

    incrementPlayerOne() {
        let {round} = this.props.activeMatch;
        let tournament = this.props.tournamentData.id;
        let {id, player1_score, player2_score, status} = currentMatch(this.props);
        let update = {
            id: id,
            status: status,
            tournament: tournament,
            round: round,
            player1_score: ++player1_score,
            player2_score: player2_score           
        }
        if (status === 'ready') {
            alert('Click the "Start Match" button to commence this match!');
            return;
        }
        this.props.updateMatch(update);
        this.emitUpdate(update);
    }

    decrementPlayerOne() {
        let round = this.props.activeMatch.round; 
        let tournament = this.props.tournamentData.id;
        let {id, player1_score, player2_score, status} = currentMatch(this.props);
        let update = {
            id: id,
            tournament: tournament,
            round: round,
            player1_score: --player1_score,
            player2_score: player2_score           
        }
        if (status === 'ready') {
            alert('Click the "Start Match" button to commence this match!');
            return;
        }
        this.props.updateMatch(update);
        this.emitUpdate(update);
    }

    incrementPlayerTwo() {
        let round = this.props.activeMatch.round; 
        let tournament = this.props.tournamentData.id;
        let {id, player1_score, player2_score, status} = currentMatch(this.props);
        let update = {
            id: id,
            tournament: tournament,
            round: round,
            player1_score: player1_score,
            player2_score: ++player2_score           
        }
        if (status === 'ready') {
            alert('Click the "Start Match" button to commence this match!');
            return;
        }
        this.props.updateMatch(update);
        this.emitUpdate(update);
    }

    decrementPlayerTwo() {
        let round = this.props.activeMatch.round; 
        let tournament = this.props.tournamentData.id;
        let {id, player1_score, player2_score, status} = currentMatch(this.props);
        let update = {
            id: id,
            tournament: tournament,
            round: round,
            player1_score: player1_score,
            player2_score: --player2_score           
        }
        if (status === 'ready') {
            alert('Click the "Start Match" button to commence this match!');
            return;
        }
        this.props.updateMatch(update);
        this.emitUpdate(update);
    }

    setWinner() {
        let {id, player1_score, player2_score, player1, player2} = currentMatch(this.props);
        let winner = player1_score > player2_score ? player1.id : player2.id;
        this.emitWinner(id, winner)
    }

    emitWinner(match, winner) {
        let body = {
            match,
            winner,
            tournament: this.props.tournamentData.id,
            round: this.props.activeMatch.round
        }
        socket.emit('set winner', body)
    }

    emitUpdate(data) {
        socket.emit('update match', data)
    }

    render() {

        return (
            <main className='admin-controls-main'>

                <div className='score-buttons' style={{"left": "27.5%"}}>
                    <div className='score-buttons-plus'
                        onClick={this.incrementPlayerOne}
                    >+</div>
                    <div className='score-buttons-minus'
                        onClick={this.decrementPlayerOne}
                    >-</div>
                </div>
                <div className='score-buttons' style={{"right": "27.5%"}}>
                    <div className='score-buttons-plus'
                        onClick={this.incrementPlayerTwo}
                    >+</div>
                    <div className='score-buttons-minus'
                        onClick={this.decrementPlayerTwo}
                    >-</div>
                </div>

                {this.props.activeMatch.status === 'ready' ? 
                <div className='admin-controls-start-match'
                    onClick={this.startMatch}>
                    Start
                </div> :
                <div className='admin-controls-start-match'
                    onClick={this.setWinner}>
                    Set Winner
                </div> }
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps,
    {updateMatch}
)(AdminControls);



//function to find and return the current match object from the tournament object
//in redux
const currentMatch = (props) => {
    let {round, id} = props.activeMatch;
    return props.tournamentData.rounds[round].find(m => {
        return m.id === id;
    })
}

// const nextMatch = (tournament, match) => {
//     let base = tournament.rounds[match.round].length;
//     let currentIndex = tournament.rounds[match.round]
//         .indexOf(tournament.rounds[match.round].find(m => 
//             {return m.id === match.id}));
//     let refArray = tournament.rounds[match.round + 1].map(m => {return []});
//     let tick = 0;
//     let ind = 0;
//     for (let i = 0; i < base; i++) {
//       if (tick > 1) {
//         tick = 0;
//         ind ++;
//       }
//       refArray[ind].push(i)
//       tick ++
//     }
//     let nextIndex = refArray.indexOf(refArray.filter(obj => 
//         {return obj.includes(currentIndex)})[0])
//     let nextMatch = tournament.rounds[match.round+1][nextIndex]
//     console.log(nextMatch);
// }