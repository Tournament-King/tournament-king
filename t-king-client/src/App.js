import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import router from './router/router';
import MatchModal from './components/Tournament/MatchModal';

class App extends Component {



  render() {
    return (
    <BrowserRouter>
      {/* <main className="app-wrapper">
      <div>
          <Header />
        <MatchModal /> */}
          <div className="view-wrapper">
            <MatchModal />
            {router}
          </div>
        {/* </div>
        <Footer />
      </main> */}
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
