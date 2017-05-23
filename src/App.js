import React, { Component } from 'react';
import RegistrationModal from './components/RegistrationModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from './assets/logo.png';
import './App.css';
import * as Actions from './actions';

const App = ({modalOpen, registered, actions}) => (
    <div className="App">
      <div className="App-header">
        <img alt="logo" src={logo} />
        <h2>Ready to take our relationship to the next level?</h2>
      </div>
      <p className="App-intro">
        <button onClick={actions.toggleModal}>Register</button>
      </p>
      <RegistrationModal isOpen={props.modalOpen} actions={actions} />
    </div>
)

const mapStateToProps = state => ({
  modalOpen: state.modalOpen,
  registered: state.registered
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default App;
