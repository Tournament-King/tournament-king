import React, {Component} from 'react';
import {connect} from 'react-redux';



class CreateTournament extends Component {
    constructor(props) {
        super(props)

        this.state = {
            handleNumberOfPlayersInput: 2,
            numberOfMatches: 1,
            players: [
                {id: null, name: 't1'},  
                {id: null, name: 't2'},  
            ]
        }

        this.handleNumberOfPlayers = this.handleNumberOfPlayers.bind(this);
        //bind
    }

    handleNumberOfPlayers(e) {
        let input = parseInt(e.target.value)
        this.setState({
            handleNumberOfPlayersInput: input,
            numberOfMatches: input / 2
        })
    }




    render() {

        let matches = []
        for(let i = 0; i<this.state.numberOfMatches; i++) {
            matches.push(
                <div className='ct-match'>
                    <h1 className='ct-match-player1'>{this.state.players[((i+1)*2)-2].name}</h1>
                    <h1 className='ct-match-player2'>{this.state.players[((i+1)*2)-1].name}</h1>
                    {/*<h1>{this.state.player[((i+1)*2)-1].name}</h1>*/}
                </div>
            )
        }
        
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
                        <h4>!!!Maybe some competition quote here?!!!</h4>
                        <br />

                        <input placeholder="Tournament Name" type="text" required/>

                        <textarea placeholder="Tournament Description (optional)"></textarea>

                        <select value={this.state.handleNumberOfPlayersInput} onChange={this.handleNumberOfPlayers}>
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
                            <br />
                            <div className='ct-matches-header'>
                                <h1>1st Round Matches</h1>
                                {/*<br/>*/}
                                <input style={{"width":"35%"}} type="text" placeholder='Competitor' tabIndex='1'/><span> vs </span>
                                <input style={{"width":"35%"}} type="text" placeholder='Competitor' tabIndex='2'/>
                                <button tabIndex='3' type='submit' style={{"margin":"10px"}} onClick={this.addPlayers}>Add</button>
                            </div>
                            <br />
                            {matches}
                        </div>

                        <div className='ct-submit'>Finalize</div>
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