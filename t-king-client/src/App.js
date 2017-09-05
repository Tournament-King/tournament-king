import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import router from './router/router';
import MatchModal from './components/Tournament/MatchModal';

class App extends Component {



  render() {
    return (
    <BrowserRouter>
          <div className="view-wrapper">
            <MatchModal />
            {router}
          </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
