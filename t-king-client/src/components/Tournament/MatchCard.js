import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Icon} from 'semantic-ui-react';
import {toggleMatchModal, getMatchById, setActiveMatch} from './../../redux/mainReducer';


class MatchCard extends Component {
    constructor(props) {
        super(props)

        this.toggleModal = this.toggleModal.bind(this);
    }


    toggleModal() {
        if (this.props.match.status === 'waiting' || this.props.match.status === 'complete') {
            return;
        } else {
            if (!this.props.modalActive) {
                this.props.toggleMatchModal();
                this.props.setActiveMatch(this.props.match);
            }
            if (this.props.activeMatch) {
                if (this.props.activeMatch.id !== this.props.id) {
                    this.props.setActiveMatch(this.props.match);
                }
            }
        }
    }


    render() {

        let winner = (
            <div className="match-win-lose">
                Winner!
            </div>
        )

        let statusProp = this.props.match.status;
        let status = statusProp === 'waiting' ? 'Waiting' : statusProp  === 'ready' ? 'Players Ready' : statusProp === 'active' ? 'Match Active' : 'Match Complete';
        let match = this.props.match
        return (
        <main className="match-wrapper" >
            <div className="match-player" onClick={this.toggleModal}>
                <div className="match-player-info">
                    <Icon name={match.status === 'complete' ? match.player1_score > match.player2_score ? 'trophy' : 'remove' : 'user'}
                    color={match.status === 'complete' ? match.player1_score > match.player2_score ? 'green' : 'red' : match.status === 'ready' ? 'orange' : match.status === "active" ? match.player1_score > match.player2_score ? 'green' : 'yellow' : match.player1 ? 'blue' : null} />
                    {match.player1 ? match.player1.name : 'TBA'}
                </div>
                    <div className="match-player-score" 
                    >
                        {match.player1_score}
                    </div>
                    {match.status === 'complete' ? match.player1_score > match.player2_score ? winner : null : null}
            </div>
            <span>{"Round" + " " + this.props.round + " - " + status}</span>
            <div className="match-player" onClick={this.toggleModal}>
                <div className="match-player-info">
                    <Icon name={match.status === 'complete' ? match.player2_score > match.player1_score ? 'trophy' : 'remove' : 'user'}
                    color={match.status === 'complete' ? match.player2_score > match.player1_score ? 'green' : 'red' : match.status === 'ready' ? 'orange' : match.status === "active" ? match.player2_score > match.player1_score ? 'green' : 'yellow' : match.player2 ? 'blue' : null} />
                    {match.player2 ? match.player2.name : 'TBA'}
                </div>
                <div className="match-player-score" 
                >
                    {match.player2_score}
                </div>
                {match.status === 'complete' ? match.player2_score > match.player1_score ? winner : null : null}
            </div>
        </main>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps,
    {toggleMatchModal, setActiveMatch, getMatchById}
)(MatchCard);














const scoreAhead = {
    "background":"#95dba5"
}

const scoreInactive = {
    "background":"#DEDEDE"
}

function formatScore(score1, score2) {
    if (score1 > score2) {
        return scoreAhead;
    } else {
        return null;
    }
}
