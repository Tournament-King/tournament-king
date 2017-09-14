import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete';
import { Redirect } from 'react-router-dom';
import debounce from 'debounce';

import { searchUsers } from '../../services/user';
import { createTournament } from '../../services/tournament';

class CreateTournament extends Component {
    constructor(props) {
        super(props)
        var players = []
        for (var i=0; i<256; i++) {
          players.push({user_id: null, name: 'player'})
        }
        this.state = {
            handleNumberOfPlayersInput: 4,
            id:null,
            name:'',
            description:'',
            type:'basketball',
            player1Input: {
              user_id: null,
              name:''
            },
            player2Input: {
              user_id: null,
              name: ''
            },
            editPlayer1Input: '',
            editPlayer2Input: '',
            player1ToUpdateIndex: null,
            player2ToUpdateIndex: null,
            numberOfMatches: 2,
            editMatchZIndex: '-1',
            players: players,
            users:[]
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
        this.handleSearch = debounce(this.handleSearch.bind(this),300)
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
          user_id:user.id,
          name:user.name
        }
      })
    }

    handlePlayer2Select(value, user) {
      this.setState({
        player2Input:{
          user_id:user.id,
          name:user.name
        }
      })
    }

    handlePlayer1Change(value) {
      this.setState({
        player1Input:{
          user_id: null,
          name:value
        }
      })
    }

    handlePlayer2Change(value) {
      this.setState({
        player2Input:{
          user_id: null,
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

    handleSearch(name) {
      console.log("handle search");
      searchUsers(name)
      .then(data => {
        this.setState({
          users:data
        })
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
      .catch(err => console.log(err.message))
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
                      user_id:null,
                      name:''
                    },
                    player2Input: {
                      user_id:null,
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
                </div>
                <div className='ct-tournament-info'>
                    <div id="contact" action="" >
                        <h3>Tournament Info</h3>
                        <br />

                        <input onChange={this.handleNameChange} placeholder="Tournament Name" type="text" required/>

                        <select value={this.state.type} onChange={this.handleTypeChange}>
                          <option value={'basketball'}>Basketball</option>
                          <option value={'pool'}>Pool</option>
                          <option value={'tennis'}>Tennis</option>
                          <option value={'bowling'}>Bowling</option>
                          <option value={'ping-pong'}>Ping-Pong</option>
                          <option value={'beer-pong'}>Beer-Pong</option>
                          <option value={'golf'}>Golf</option>
                        </select>

                        <textarea onChange={this.handleDescChange} placeholder="Tournament Description (optional)"></textarea>

                        <select value={this.state.handleNumberOfPlayersInput} onChange={this.handleNumberOfPlayers}>
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
                                  items={ this.state.users }
                                  handleSelect={ this.handlePlayer1Select }
                                  handleChange={ this.handlePlayer1Change }
                                  handleSearch={ this.handleSearch }
                                />
                                <span> vs </span>
                                <PlayerAutocomplete
                                  value={ this.state.player2Input.name }
                                  items={ this.state.users }
                                  handleSelect={ this.handlePlayer2Select }
                                  handleChange={ this.handlePlayer2Change }
                                  handleSearch={ this.handleSearch }
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

function PlayerAutocomplete({ value, items, handleSelect, handleChange, handleSearch }) {
  return (
    <Autocomplete
      getItemValue={(user) => user.name}
      value={ value }
      items={ items }
      onSelect={handleSelect}
      onChange={(event, value) => {
        handleChange(value)
        handleSearch(value)
      }}
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
