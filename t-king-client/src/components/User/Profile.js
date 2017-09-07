import React, { Component } from 'react';
import Crown from './Crown';
import { getStats, getUser } from '../../services/user';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      stats: {}
    }
  }
  componentDidMount() {
    var userID = window.location.pathname.split('/').slice(-1)[0]
    getUser(userID)
    .then(user => {
      getStats(userID)
      .then(stats => {
        this.setState({user,stats})
      })
    })
  }
  render() {
    if (!this.state.user.id) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div className="profile-container">
          <Display
            profile_img={ this.state.user.profile_pic }
            ranking={ this.state.user.ranking }
          />
          <Info
            name={ this.state.user.name }
            location={ this.state.user.location }
          />
          <Stats
            matches_completed={ this.state.stats.matches_completed }
            matches_won={ this.state.stats.matches_won }
            tournaments_won={ this.state.stats.tournaments_won }
          />
        </div>
      )
    }
  }
}

const Display = ({ profile_img, ranking }) => (
  <div className="profile-display">
    <img src={ profile_img }/>
    <Crown/>
    <h1>{ranking}</h1>
  </div>
)

const Info = ({ name, location }) => (
  <div className="profile-info">
    <h1>{ name }</h1>
    <h5>{ location }</h5>
  </div>
)

const Stats = ({ matches_completed, matches_won, tournaments_won}) => (
  <div className="profile-stats">
    <StatDisplay name={'Matches Completed'} value={matches_completed}/>
    <StatDisplay name={'Matches Won'} value={matches_won}/>
    <StatDisplay name={'Tournaments Won'} value={tournaments_won}/>
  </div>
)

const StatDisplay = ({ name, value }) => (
  <div className="profile-stat-display">
    <h1>{ value }</h1>
    <p>{ name }</p>
  </div>
)

export default Profile;
