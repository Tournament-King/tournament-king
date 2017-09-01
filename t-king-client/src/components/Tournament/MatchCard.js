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
            active: this.props.active
        }
        if (!this.props.active) {
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

        return (
        <main className="match-wrapper" >
            <div className="match-player" onClick={this.toggleModal}>
                <div className="match-player-info">
                    <Icon name='trophy' />
                    {this.props.p1}
                </div>
                    <div className="match-player-score" style={this.props.p1score ? formatScore(this.props.p1score, this.props.p2score) : scoreInactive}>
                        {this.props.p1score}
                    </div>
                    {/* <div className="match-win-lose">
                        Win!
                    </div> */}
            </div>
            <div className="match-data">
                {this.props.round + 1}
            </div>
            <div className="match-player" onClick={this.toggleModal}>
                <div className="match-player-info">
                    <Icon name='gamepad' />
                    {this.props.p2}
                </div>
                <div className="match-player-score" style={this.props.p2score ? formatScore(this.props.p2score, this.props.p1score) : scoreInactive}>
                    {this.props.p2score}
                </div>
                {/* <div className="match-win-lose">
                    Lose!
                </div>                 */}
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