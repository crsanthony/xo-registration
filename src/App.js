import React, { Component } from 'react';
import Modal from 'react-modal';
import logo from './assets/logo.png';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true
    }
  }

  toggleModal = () => {
    const open = !this.state.modalOpen;
    this.setState({modalOpen: open});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img alt="logo" src={logo} />
          <h2>Ready to take our relationship to the next level?</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.toggleModal}>Register</button>
        </p>
        <Modal isOpen={this.state.modalOpen} className="modal">
          <div className="closeBtn" onClick={this.toggleModal}>x</div>
          <span>hi there</span>
        </Modal>
      </div>
    );
  }
}

export default App;
