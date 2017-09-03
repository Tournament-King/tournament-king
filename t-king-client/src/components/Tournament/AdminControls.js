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


        this.incrementPlayerOne = this.incrementPlayerOne.bind(this);
        this.decrementPlayerOne = this.decrementPlayerOne.bind(this);
        this.incrementPlayerTwo = this.incrementPlayerTwo.bind(this);
        this.decrementPlayerTwo = this.decrementPlayerTwo.bind(this);

    }

    startMatch() {
        
    }

    incrementPlayerOne() {
        let {round} = this.props.activeMatch;
        let tournament = this.props.tournamentData.id;
        let {id, player1_score, player2_score} = currentMatch(this.props);
        let update = {
            id: id,
            tournament: tournament,
            round: round,
            player1_score: ++player1_score,
            player2_score: player2_score           
        }
        this.props.updateMatch(update);
        this.emitUpdate(update);
    }

    decrementPlayerOne() {
        let round = this.props.activeMatch.round; 
        let tournament = this.props.tournamentData.id;
        let {id, player1_score, player2_score} = currentMatch(this.props);
        let update = {
            id: id,
            tournament: tournament,
            round: round,
            player1_score: --player1_score,
            player2_score: player2_score           
        }
        this.props.updateMatch(update);
        this.emitUpdate(update);
    }

    incrementPlayerTwo() {
        let round = this.props.activeMatch.round; 
        let tournament = this.props.tournamentData.id;
        let {id, player1_score, player2_score} = currentMatch(this.props);
        let update = {
            id: id,
            tournament: tournament,
            round: round,
            player1_score: player1_score,
            player2_score: ++player2_score           
        }
        this.props.updateMatch(update);
        this.emitUpdate(update);
    }

    decrementPlayerTwo() {
        let round = this.props.activeMatch.round; 
        let tournament = this.props.tournamentData.id;
        let {id, player1_score, player2_score} = currentMatch(this.props);
        let update = {
            id: id,
            tournament: tournament,
            round: round,
            player1_score: player1_score,
            player2_score: --player2_score           
        }
        this.props.updateMatch(update);
        this.emitUpdate(update);
    }


    emitUpdate(data) {
        socket.emit('update score', data)
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

                <div className='admin-controls-start-match'>Start Match</div>
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