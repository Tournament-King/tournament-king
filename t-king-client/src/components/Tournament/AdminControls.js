import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateMatch, updateMatchEmit, setWinner} from './../../redux/mainReducer';

class AdminControls extends Component {
    constructor(props) {
        super(props)
        this.startMatch = this.startMatch.bind(this);
        this.incrementPlayerOne = this.incrementPlayerOne.bind(this);
        this.decrementPlayerOne = this.decrementPlayerOne.bind(this);
        this.incrementPlayerTwo = this.incrementPlayerTwo.bind(this);
        this.decrementPlayerTwo = this.decrementPlayerTwo.bind(this);
        this.setWinner = this.setWinner.bind(this);
    }

    startMatch() {
        let update = Object.assign({}, this.props.activeMatch, {player1_score:0, player2_score:0, status:"active"} )
        this.props.updateMatch(update);
        this.props.updateMatchEmit(Object.assign(update, { tournament_id:this.props.tournamentData.id }));
    }

    incrementPlayerOne() {
        let player1_score = this.props.activeMatch.player1_score + 1;
        let update = Object.assign({}, this.props.activeMatch, { player1_score } );
        this.props.updateMatch(update);
        this.props.updateMatchEmit(Object.assign(update, { tournament_id:this.props.tournamentData.id }));
    }

    decrementPlayerOne() {
        let player1_score = this.props.activeMatch.player1_score - 1;
        let update = Object.assign({}, this.props.activeMatch, { player1_score } );
        this.props.updateMatch(update);
        this.props.updateMatchEmit(Object.assign(update, { tournament_id:this.props.tournamentData.id }));
    }

    incrementPlayerTwo() {
        let player2_score = this.props.activeMatch.player2_score + 1;
        let update = Object.assign({}, this.props.activeMatch, { player2_score } );
        this.props.updateMatch(update);
        this.props.updateMatchEmit(Object.assign(update, { tournament_id:this.props.tournamentData.id }));
    }

    decrementPlayerTwo() {
        let player2_score = this.props.activeMatch.player2_score - 1;
        let update = Object.assign({}, this.props.activeMatch, { player2_score } );
        this.props.updateMatch(update);
        this.props.updateMatchEmit(Object.assign(update, { tournament_id:this.props.tournamentData.id }));
    }

    setWinner() {
        let { id, player1, player2, player1_score, player2_score } = this.props.activeMatch
        let winner = player1_score > player2_score ? player1.id : player2.id
        console.log(winner);
        this.props.setWinner({ match_id: id, winner: winner, tournament_id: this.props.tournamentData.id })
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
    {updateMatch, updateMatchEmit, setWinner}
)(AdminControls);
