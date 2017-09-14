import React, { Component } from 'react';
import Crown from './Crown';
import { getStats, getUser, getRecentActivity } from '../../services/user';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      stats: {},
      activity: []
    }
  }
  componentDidMount() {
    var userID = window.location.pathname.split('/').slice(-1)[0]
    getUser(userID)
    .then(user => {
      getStats(userID)
      .then(stats => {
        getRecentActivity(userID)
        .then(activity => {
          this.setState({user,stats,activity})
        })
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
            <aside>
                <Display
                  profile_img={ this.state.user.profile_pic }
                  rank={ this.state.user.rank }
                />
            </aside>
            <main>
                <Info
                  name={ this.state.user.name }
                  location={ this.state.user.location }
                />
                <Stats
                  matches_completed={ this.state.stats.matches_completed }
                  matches_won={ this.state.stats.matches_won }
                  tournaments_won={ this.state.stats.tournaments_won }
                />
                <Activity
                  activity={ this.state.activity }
                />
            </main>
        </div>
      )
    }
  }
}

const Display = ({ profile_img, rank }) => (
  <div className="profile-display">
    <img src={ profile_img }/>
    <Crown/>
    <h1>{`#${rank}`}</h1>
    <Contact/>
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

const Activity = ({ activity }) => {
  const matches = activity.map(match => (
    <MatchCard
      type={ match.type }
      match_won={ match.match_won }
      final_match={ match.final_match }
    />
  ))
  return (
    <div className="profile-activity">
      <h1>Recent Matches</h1>
      <div>
        { matches }
      </div>
    </div>
  )
}

const MatchCard = ({ type, match_won, final_match }) => (
  <div className={ match_won ? "green" : "red" }>
    <img src={`/public/img/icons/${type}.png`}/>
  </div>
)

const Contact = () => (
  <div className="contact">
    <button>Challenge</button>
    <button>Message</button>
  </div>
)

export default Profile;
