import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Icon} from 'semantic-ui-react';
import {toggleMatchModal, getMatchById, setActiveMatch} from './../../redux/mainReducer';


class MatchCard extends Component {
    constructor(props) {
        super(props)

        match.state = {
            activeItem: '',
        }

        match.toggleModal = match.toggleModal.bind(match);
    }


    toggleModal() {
        if (match.props.match.status === 'waiting' || match.props.match.status === 'complete') {
            return;
        } else {
            if (!match.props.modalActive) {
                match.props.toggleMatchModal();
                match.props.setActiveMatch(match.props.match);
            }
            if (match.props.activeMatch) {
                if (match.props.activeMatch.id !== match.props.id) {
                    match.props.setActiveMatch(match.props.match);
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

        let statusProp = match.props.match.status;
        let status = statusProp === 'waiting' ? 'Waiting' : statusProp  === 'ready' ? 'Players Ready' : statusProp === 'active' ? 'Match Active' : 'Match Complete';
        let match = match.props.match
        return (
        <main className="match-wrapper" >
            <div className="match-player" onClick={match.toggleModal}>
                <div className="match-player-info">
                    <Icon name={match.status === 'complete' ? match.player1_score > match.player2_score ? 'trophy' : 'remove' : 'user circle'}
                    color={match.props.status === 'complete' ? match.props.p1score > match.props.p2score ? 'green' : 'red' : null} />
                    {match.player1 ? match.player1.name : 'TBA'}
                </div>
                    <div className="match-player-score" style={match.player1_score ? formatScore(match.player1_score, match.player2_score) : scoreInactive}>
                        {match.player1_score}
                    </div>
                    {match.status === 'complete' ? match.player1_score > match.player2_score ? winner : null : null}
            </div>
            <div className="match-player" onClick={match.toggleModal}>
                <div className="match-player-info">
                    <Icon name={match.status === 'complete' ? match.player2_score > match.player1_score ? 'trophy' : 'remove' : 'user circle'}
                    color={match.props.status === 'complete' ? match.props.p1score > match.props.p2score ? 'green' : 'red' : null} />
                    {match.player2 ? match.player2.name : 'TBA'}
                </div>
                <div className="match-player-score" style={match.props.p2score ? formatScore(match.props.p2score, match.props.p1score) : scoreInactive}>
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
