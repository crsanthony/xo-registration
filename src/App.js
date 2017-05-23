import React, { Component } from 'react';
import Modal from 'react-modal';
import logo from './assets/logo.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} />
          <h2>Ready to take our relationship to the next level?</h2>
        </div>
        <p className="App-intro">
          <button>Register</button>
        </p>
        <Modal isOpen={true} className="modal">
          <span>hi there</span>
        </Modal>
      </div>
    );
  }
}

export default App;
