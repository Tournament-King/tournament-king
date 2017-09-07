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
        let match = {
            id: this.props.id,
            round: this.props.round,
            status: this.props.status,
            tournament: this.props.tournamentData.id
        }
        if (this.props.status === 'waiting' || this.props.status === 'complete') {
            return;
        } else {
            if (!this.props.modalActive) {
                this.props.toggleMatchModal();
                this.props.setActiveMatch(match);
            }
            if (this.props.activeMatch) {
                if (this.props.activeMatch.id !== this.props.id) {
                    this.props.setActiveMatch(match);
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

        let statusProp = this.props.status;
        let status = statusProp === 'waiting' ? 'Waiting' : statusProp  === 'ready' ? 'Players Ready' : statusProp === 'active' ? 'Match Active' : 'Match Complete';

        return (
        <main className="match-wrapper" >
            <div className="match-player" onClick={this.toggleModal}>
                <div className="match-player-info">
                    <Icon name={this.props.status === 'complete' ? this.props.p1score > this.props.p2score ? 'trophy' : 'remove' : 'user circle'} />
                    {this.props.p1}
                </div>
                    <div className="match-player-score" style={this.props.p1score ? formatScore(this.props.p1score, this.props.p2score) : scoreInactive}>
                        {this.props.p1score}
                    </div>
                    {this.props.status === 'complete' ? this.props.p1score > this.props.p2score ? winner : null : null}
            </div>
            <div className="match-data">
                {'Round: ' + (this.props.round+1) + ' - ' + status }
            </div>
            <div className="match-player" onClick={this.toggleModal}>
                <div className="match-player-info">
                    <Icon name={this.props.status === 'complete' ? this.props.p2score > this.props.p1score ? 'trophy' : 'remove' : 'user circle'} />
                    {this.props.p2}
                </div>
                <div className="match-player-score" style={this.props.p2score ? formatScore(this.props.p2score, this.props.p1score) : scoreInactive}>
                    {this.props.p2score}
                </div>
                {this.props.status === 'complete' ? this.props.p2score > this.props.p1score ? winner : null : null}
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