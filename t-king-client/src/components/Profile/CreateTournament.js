import React, {Component} from 'react';
import {connect} from 'react-redux';



class CreateTournament extends Component {
    constructor(props) {
        super(props)

        this.state = {
            handleNumberOfPlayersInput: 2,
            player1Input: '',
            player2Input: '',
            numberOfMatches: 1,
            players: [
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
                {id: null, name: 'player'},
            ]
        }

        this.handleNumberOfPlayers = this.handleNumberOfPlayers.bind(this);
        this.handlePlayer1Input = this.handlePlayer1Input.bind(this);
        this.handlePlayer2Input = this.handlePlayer2Input.bind(this);
        this.addPlayers = this.addPlayers.bind(this);
        //bind
    }

    handleNumberOfPlayers(e) {
        let input = parseInt(e.target.value)
        this.setState({
            handleNumberOfPlayersInput: input,
            numberOfMatches: input / 2
        })
    }

    handlePlayer1Input(e) {
        this.setState({
            player1Input: e.target.value
        })
    }

    handlePlayer2Input(e) {
        this.setState({
            player2Input: e.target.value
        })
    }

    addPlayers() {
        console.log(this.state.numberOfMatches *2)
        for(let i = 0; i < this.state.numberOfMatches * 2; i+=2) {
            console.log(i)
            if (this.state.players[i].name === 'player' && this.state.players[i+1].name ==='player') {
                console.log('hit', i)
                let newPlayers = [...this.state.players]
                newPlayers[i].name = this.state.player1Input
                newPlayers[i+1].name = this.state.player2Input
                this.setState({
                    players: newPlayers,
                    player1Input: '',
                    player2Input: ''
                })
                return
            }
        }    
    }




    render() {
        console.log(this.state)

        let matches = []
        for(let i = 0; i<this.state.numberOfMatches; i++) {
            matches.push(
                <div className='ct-match'>
                    <h1 className='ct-match-player1'>{this.state.players[((i+1)*2)-2].name}</h1>
                    <div className="ct-match-matchNumber">Match {i+1}</div>
                    <h1 className='ct-match-player2'>{this.state.players[((i+1)*2)-1].name}</h1>
                    {/*<div onClick={() => this.editPlayers()}>Edit</div>*/}
                    {/*<h1>{this.state.player[((i+1)*2)-1].name}</h1>*/}
                </div>
            )
        }
        
        return (
            <main className='ct-main'>
                <div className='ct-header'>
                    <h1 className="" style={{"fontSize":"50px"}}>Create Your Tournament</h1>
                    <br/>
                    <p>You're two quick and simple steps away from having your tournament</p>
                    <p>live and updating in real time. Let everyone know the name of your tournament</p>
                    <p>and the team/player names competing, then simply click and activate</p>
                    <p>each match for the fans to see.</p>
                </div>
                <div className='ct-tournament-info'>
                    <div id="contact" action="" >
                        <h3>Tournament Info</h3>
                        <h4 style={{"color":"white"}}>!!!Maybe some competition quote here?!!!</h4>
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
                                <input  style={{"width":"35%"}} 
                                        type="text" 
                                        placeholder='Competitor' 
                                        value={this.state.player1Input}
                                        onChange={this.handlePlayer1Input}
                                        tabIndex='1'
                                        />
                                <span> vs </span>
                                <input  style={{"width":"35%"}} 
                                        type="text" 
                                        placeholder='Competitor' 
                                        value={this.state.player2Input}
                                        onChange={this.handlePlayer2Input}                                        
                                        tabIndex='2'
                                        />
                                <button tabIndex='3' type='submit' style={{"margin":"10px"}} onClick={this.addPlayers}>Add</button>
                            </div>
                            <br />
                            <div className='ct-matches-list'>   
                                {matches}
                            </div>
                        </div>

                        <div className='ct-submit'>Finalize</div>
                   </div>
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