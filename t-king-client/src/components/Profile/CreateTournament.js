import React, {Component} from 'react';
import {connect} from 'react-redux';



class CreateTournament extends Component {
    constructor(props) {
        super(props)

        this.state = {
            handleNumberOfPlayersInput: 2,
            player1Input: '',
            player2Input: '',
            editPlayer1Input: '',
            editPlayer2Input: '',
            player1ToUpdateIndex: null,
            player2ToUpdateIndex: null,
            numberOfMatches: 1,
            editMatchZIndex: '-1',
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
        this.handleEditPlayer1Input = this.handleEditPlayer1Input.bind(this);
        this.handleEditPlayer2Input = this.handleEditPlayer2Input.bind(this);
        this.addPlayers = this.addPlayers.bind(this);
        this.editPlayers = this.editPlayers.bind(this);
        this.updateNames = this.updateNames.bind(this);
        this.cancelUpdateNames = this.cancelUpdateNames.bind(this);
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

    handleEditPlayer1Input(e) {
        this.setState({
            editPlayer1Input: e.target.value
        })
    }

    handleEditPlayer2Input(e) {
        this.setState({
            editPlayer2Input: e.target.value
        })
    }

    editPlayers(p1, p2) {
        this.setState({
            editMatchZIndex: '3',
            editPlayer1Input: this.state.players[p1].name,
            editPlayer2Input: this.state.players[p2].name,
            player1ToUpdateIndex: p1,
            player2ToUpdateIndex: p2
        })

    }

    cancelUpdateNames() {
        this.setState({
            editMatchZIndex: '-1',
        })
    }

    updateNames() {
        let players = [...this.state.players]
        players[this.state.player1ToUpdateIndex].name = this.state.editPlayer1Input
        players[this.state.player2ToUpdateIndex].name = this.state.editPlayer2Input
        this.setState({
            editMatchZIndex: '-1',
            players: players,
            editPlayer1Input: '',
            editPlayer2Input: ''
        })
    }




    render() {
        console.log(this.state)

        let editMatchZIndex = {"zIndex":this.state.editMatchZIndex}
        let matches = []
        for(let i = 0; i<this.state.numberOfMatches; i++) {
            matches.push(
                <div className='ct-match'>
                    <h1 className='ct-match-player1'>{this.state.players[((i+1)*2)-2].name}</h1>
                    <div className="ct-match-matchNumber">Match {i+1}</div>
                    <h1 className='ct-match-player2'>{this.state.players[((i+1)*2)-1].name}</h1>
                    <button style={{"width":"30px"}} onClick={() => this.editPlayers(((i+1)*2)-2, ((i+1)*2)-1)}>Edit</button>
                    {/*<h1>{this.state.player[((i+1)*2)-1].name}</h1>*/}
                </div>
            )
        }

        
        return (
            <main className='ct-main'>
                <div style={editMatchZIndex} className="ct-edit-match-names">
                    <div>Player 1</div>
                    <input  onChange={this.handleEditPlayer1Input} 
                            value={this.state.editPlayer1Input} 
                            style={{"border":"1px solid grey"}} 
                            type="text"
                            />
                    <br />
                    <br />
                    <div>Player 1</div>
                    <input  onChange={this.handleEditPlayer2Input} 
                            value={this.state.editPlayer2Input} 
                            style={{"border":"1px solid grey"}} 
                            type="text"
                            />
                    <br />
                    <br />
                    <button style={{"border":"1px solid grey"}} onClick={this.updateNames}>Update</button>
                    <button style={{"border":"1px solid grey"}} onClick={this.cancelUpdateNames}>Cancel</button>
                </div>
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