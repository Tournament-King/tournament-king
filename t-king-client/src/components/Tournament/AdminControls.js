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


    incrementPlayerOne() {
        let {id, player1_score, player2_score} = this.props.currentMatch;
        let update = {
            id: id,
            player1_score: ++player1_score,
            player2_score: player2_score
        }
        this.props.updateMatch(update);
        this.emitUpdate(update);
    }

    decrementPlayerOne() {
        let {id, player1_score, player2_score} = this.props.currentMatch;
        let update = {
            id: id,
            player1_score: --player1_score,
            player2_score: player2_score
        }
        this.props.updateMatch(update);
        this.emitUpdate(update);
    }

    incrementPlayerTwo() {
        let {id, player1_score, player2_score} = this.props.currentMatch;
        let update = {
            id: id,
            player1_score: player1_score,
            player2_score: ++player2_score
        }
        this.props.updateMatch(update);
        this.emitUpdate(update);
    }

    decrementPlayerTwo() {
        let {id, player1_score, player2_score} = this.props.currentMatch;
        let update = {
            id: id,
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

export default connect(mapStateToProps, {updateMatch})(AdminControls);