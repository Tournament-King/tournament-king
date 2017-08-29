import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import router from './router/router';

class App extends Component {
  render() {
    return (
      <main className="app-wrapper">
        <div className="header-shim">  
          <Header />
        </div>
          <div className="view-wrapper">
            {router}
          </div>
        <Footer />
      </main>
    );
  }
}

export default App;
