import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete';
import { Redirect } from 'react-router-dom';

import { searchUsers } from '../../services/user';
import { createTournament } from '../../services/tournament';

const userData = [
    {
        "id": 1,
        "auth0_id": "google-oauth2|114485428686719472115",
        "email": "claytonpabst@gmail.com",
        "profile_pic": "https://lh3.googleusercontent.com/-JjWi8k4-76g/AAAAAAAAAAI/AAAAAAAAAtU/yFrbzDnIaCE/photo.jpg",
        "name": "Clayton Pabst",
        "username": null,
        "location": null
    },
    {
        "id": 2,
        "auth0_id": "facebook|1016497821826298",
        "email": "thevjm@gmx.com",
        "profile_pic": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/18194801_956216294521118_7387746207472594409_n.jpg?oh=10c5acbca176636cdb33fef3fbeca04c&oe=5A58F94B",
        "name": "Victor Matonis",
        "username": null,
        "location": null
    },
    {
        "id": 3,
        "auth0_id": "google-oauth2|115018160791477878008",
        "email": "spcbrn1@gmail.com",
        "profile_pic": "https://lh4.googleusercontent.com/-qIKmrkbVVD0/AAAAAAAAAAI/AAAAAAAAAAg/celq0JoDIuA/photo.jpg",
        "name": "Christopher Lemke",
        "username": null,
        "location": null
    }
];

class CreateTournament extends Component {
    constructor(props) {
        super(props)

        this.state = {
            handleNumberOfPlayersInput: 2,
            id:null,
            name:'',
            description:'',
            type:'',
            player1Input: {
              id: null,
              name:''
            },
            player2Input: {
              id: null,
              name: ''
            },
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
        this.handleEditPlayer1Input = this.handleEditPlayer1Input.bind(this);
        this.handleEditPlayer2Input = this.handleEditPlayer2Input.bind(this);
        this.addPlayers = this.addPlayers.bind(this);
        this.editPlayers = this.editPlayers.bind(this);
        this.updateNames = this.updateNames.bind(this);
        this.cancelUpdateNames = this.cancelUpdateNames.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlayer1Select = this.handlePlayer1Select.bind(this);
        this.handlePlayer2Select = this.handlePlayer2Select.bind(this);
        this.handlePlayer1Change = this.handlePlayer1Change.bind(this);
        this.handlePlayer2Change = this.handlePlayer2Change.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleNumberOfPlayers(e) {
        let input = parseInt(e.target.value, 10);
        this.setState({
            handleNumberOfPlayersInput: input,
            numberOfMatches: input / 2
        })
    }

    handlePlayer1Select(value, user) {
      this.setState({
        player1Input:{
          id:user.id,
          name:user.name
        }
      })
    }

    handlePlayer2Select(value, user) {
      this.setState({
        player2Input:{
          id:user.id,
          name:user.name
        }
      })
    }

    handlePlayer1Change(event, value) {
      this.setState({
        player1Input:{
          id: null,
          name:value
        }
      })
    }

    handlePlayer2Change(event, value) {
      this.setState({
        player2Input:{
          id: null,
          name:value
        }
      })
    }

    handleNameChange(e) {
      this.setState({
        name:e.target.value
      })
    }

    handleDescChange(e) {
      this.setState({
        description:e.target.value
      })
    }

    handleTypeChange(e) {
      this.setState({
        type:e.target.value
      })
    }

    handleSubmit() {
      var data = {
        name:this.state.name,
        description:this.state.description,
        type:this.state.type,
        players:this.state.players.slice(0,this.state.handleNumberOfPlayersInput)
      }
      var promise = createTournament(data)
      promise.then(res => {
        this.setState({
          id:res.data.id
        })
      })
    }

    addPlayers() {
        for(let i = 0; i < this.state.numberOfMatches * 2; i+=2) {
            if (this.state.players[i].name === 'player' && this.state.players[i+1].name ==='player') {
                console.log('hit', i)
                let newPlayers = [...this.state.players]
                newPlayers[i] = this.state.player1Input
                newPlayers[i+1] = this.state.player2Input
                this.setState({
                    players: newPlayers,
                    player1Input: {
                      id:null,
                      name:''
                    },
                    player2Input: {
                      id:null,
                      name:''
                    }
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
          <div>
            {
              this.state.id
              ?
              <Redirect to={`/tournament/${this.state.id}`}/>
              :
              null
            }
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

                        <input onChange={this.handleNameChange} placeholder="Tournament Name" type="text" required/>

                        <select value={this.state.type} onChange={this.handleTypeChange}>
                          <option value={'Basketball'}>Basketball</option>
                          <option value={'Pool'}>Pool</option>
                          <option value={'Bowling'}>Bowling</option>
                          <option value={'Ping-Pong'}>Ping-Pong</option>
                          <option value={'Soccer'}>Soccer</option>
                        </select>

                        <textarea onChange={this.handleDescChange} placeholder="Tournament Description (optional)"></textarea>

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
                                <PlayerAutocomplete
                                  value={ this.state.player1Input.name }
                                  items={ userData }
                                  onSelect={ this.handlePlayer1Select }
                                  onChange={ this.handlePlayer1Change }
                                />
                                <span> vs </span>
                                <PlayerAutocomplete
                                  value={ this.state.player2Input.name }
                                  items={ userData }
                                  onSelect={ this.handlePlayer2Select }
                                  onChange={ this.handlePlayer2Change }
                                />
                                <button tabIndex='3' type='submit' style={{"margin":"10px"}} onClick={this.addPlayers}>Add</button>
                            </div>
                            <br />
                            <div className='ct-matches-list'>
                                {matches}
                            </div>
                        </div>

                        <div onClick={ this.handleSubmit } className='ct-submit'>Finalize</div>
                   </div>
                </div>
                <div className='ct-player-info'>

                </div>
            </main>
          </div>

        )
    }
}

function PlayerAutocomplete({ value, items, onSelect, onChange }) {
  return (
    <Autocomplete
      getItemValue={(user) => user.name}
      value={ value }
      items={ items }
      onSelect={onSelect}
      onChange={onChange}
      renderMenu={children => (
        <div className="menu">
          {children}
        </div>
      )}
      renderItem={(item, isHighlighted) => (
      <div
        className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
        key={item.abbr}
      >{item.name}</div>
      )}
    />
  )
}

export default CreateTournament;
