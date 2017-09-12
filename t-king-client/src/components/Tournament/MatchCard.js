import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Icon} from 'semantic-ui-react';
import {toggleMatchModal, getMatchById, setActiveMatch} from './../../redux/mainReducer';


class MatchCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeItem: '',
        }

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
                    <Icon name={match.status === 'complete' ? match.player1_score > match.player2_score ? 'trophy' : 'remove' : 'user circle'} />
                    {match.player1 ? match.player1.name : 'TBA'}
                </div>
                    <div className="match-player-score" style={match.player1_score ? formatScore(match.player1_score, match.player2_score) : scoreInactive}>
                        {match.player1_score}
                    </div>
                    {match.status === 'complete' ? match.player1_score > match.player2_score ? winner : null : null}
            </div>
            <div className="match-player" onClick={this.toggleModal}>
                <div className="match-player-info">
                    <Icon name={match.status === 'complete' ? match.player2_score > match.player1_score ? 'trophy' : 'remove' : 'user circle'} />
                    {match.player2 ? match.player2.name : 'TBA'}
                </div>
                <div className="match-player-score" style={this.props.p2score ? formatScore(this.props.p2score, this.props.p1score) : scoreInactive}>
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
