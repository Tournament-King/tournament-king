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

        const scoreInactive = {
            "background":"#DEDEDE"
        }

        const scoreActive = {
            "background":"#FFFFFF",
            "transition":"all .1s ease-in-out"
        }

        const playerIcon = (s1, s2, m, p) => {
            return (
                <div>
                    <Icon
                        name={
                            m.status === 'complete' ?
                            s1 > s2 ? 'trophy' : 'remove' : 'user'
                        }
                        color={
                            m.status === 'complete' ?
                            s1 > s2 ? 'green' : 'red' :
                            m.status === 'ready' ? 'yellow' :
                            m.status === "active" ? 'green' :
                            m.player1 ? 'blue' : null
                        }
                    />
                    {p ? p.name.split(' ')[0] : 'TBA'}
                </div>
            )
        }

        const winner = (
            <div className="match-win-lose">
                Winner!
            </div>
        )



        let statusProp = this.props.match.status;
        let status = (
            statusProp === 'waiting' ? 'Waiting' :
            statusProp  === 'ready' ? 'Players Ready' :
            statusProp === 'active' ? 'Match Active' : 'Match Complete'
        );
        let match = this.props.match

        return (
        <main className="match-wrapper" onClick={this.toggleModal}>
            <div className="match-player">
                <div className="match-player-info">
                    {playerIcon(match.player1_score, match.player2_score, match, match.player1)}
                </div>
                    <div className="match-player-score"
                    style={match.status === 'active' || match.status === 'complete' ? scoreActive : scoreInactive}
                    >
                        {match.player1_score}
                    </div>
                    {match.status === 'complete' ? match.player1_score > match.player2_score ? winner : null : null}
            </div>
            <span>{"Round " + this.props.round + " - " + status}</span>
            <div className="match-player">
                <div className="match-player-info">
                    {playerIcon(match.player2_score, match.player1_score, match, match.player2)}
                </div>
                <div className="match-player-score"
                style={match.status === 'active' || match.status === 'complete' ? scoreActive : scoreInactive}
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
