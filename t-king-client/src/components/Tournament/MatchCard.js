import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';


export default class MathCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeItem: '',
        }
        
        this.handleItemClick=this.handleItemClick.bind(this);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

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

        return (
        <main className="match-wrapper">
            <div className="match-player">
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
            </div>
            <div className="match-player">
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

