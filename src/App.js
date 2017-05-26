import React from 'react';
import RegistrationModal from './components/RegistrationModal/RegistrationModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import logo from './assets/logo.png';
import './App.css';
import * as Actions from './actions';

const App = ({modalOpen, registered, actions, formData}) => (
    <div className="App">
      <div className="App-header">
        <img alt="logo" src={logo} />
      </div>
      { registered ? App.renderConfirmation() : App.renderDefault(modalOpen, actions, formData) }
    </div>
)

App.renderConfirmation = () => {
  return <div>We're so excited you said yes!</div>
}

App.renderDefault = (modalOpen, actions, formData) => {
  return (
    <div>
      <h2>Ready to take our relationship to the next level?</h2>
      <p className="App-intro">
        <button onClick={actions.toggleModal}>Register</button>
      </p>
      <RegistrationModal isOpen={modalOpen} actions={actions} formData={formData} />
    </div>
  )
}

App.propTypes = {
  registered: PropTypes.bool.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  formData: PropTypes.object
}

const mapStateToProps = state => ({
  modalOpen: state.registration.modalOpen,
  registered: state.registration.registered,
  formData: state.form
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
