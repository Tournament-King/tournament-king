import React, {Component} from 'react';
import {connect} from 'react-redux';



class CreateTournament extends Component {
    constructor(props) {
        super(props)

        this.state = {
            handleNumberOfPlayersInput: 2,
            matches: []
        }

        this.handleNumberOfPlayers = this.handleNumberOfPlayers.bind(this);
        //bind
    }

    handleNumberOfPlayers(e) {
        this.setState({
            handleNumberOfPlayersInput: e.target.value
        })
    }




    render() {

        return (
            <main className='ct-main'>
                <div className='ct-header'>
                    <h1 className="">Create Your Tournament</h1>
                    <br/>
                    <p>You're two quick and simple steps away from having your tournament</p>
                    <p>live and updating in real time. Let everyone know the name of your tournament</p>
                    <p>and the team/player names competing, then simply click and activate</p>
                    <p>each match for the fans to see.</p>
                </div>
                <div className='ct-tournament-info'>
                    <form id="contact" action="" method="post">
                        <h3>Tournament Info</h3>
                        <h4>!!!Maybe some cometition quote here?!!!</h4>
                        <br />

                        <input placeholder="Tournament Name" type="text" tabIndex="1" required/>

                        <textarea placeholder="Tournament Description (optional)" tabIndex="5"></textarea>

                        <select name="" id="" onChange={ (e) => this.handleNumberOfPlayers(e.target.value)}>
                            <option value={2}>2 Competitors</option>
                            <option value={4}>4 Competitors</option>
                            <option value={8}>8 Competitors</option>
                            <option value={16}>16 Competitors</option>
                            <option value={32}>32 Competitors</option>
                            <option value={64}>64 Competitors</option>
                            <option value={128}>128 Competitors... Maybe rethink your tournament...</option>
                            <option value={256}>256 Competitors... Maybe rethink your life...</option>
                        </select>
                        <div className='ct-matches'>

                        </div>

                        <div className='ct-submit'>Submit</div>
                   </form>
                </div>
                <div className='ct-player-info'>

                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(CreateTournament);