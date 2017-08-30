import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import router from './router/router';
import MatchModal from './components/Tournament/MatchModal';

class App extends Component {


  render() {
    return (
      <main className="app-wrapper">
        <div className="header-shim">  
          <Header />
        </div>
        <MatchModal />
          <div className="view-wrapper">
            {router}
          </div>
        <Footer />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
