import React, { Component } from 'react';
import RegistrationModal from './components/RegistrationModal';
import logo from './assets/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img alt="logo" src={logo} />
          <h2>Ready to take our relationship to the next level?</h2>
        </div>
        <p className="App-intro">
          <button>Register</button>
        </p>
        <RegistrationModal />
      </div>
    );
  }
}

export default App;
