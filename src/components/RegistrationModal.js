import React, { Component } from 'react';
import Modal from 'react-modal';
import './RegistrationModal.css';

class RegistrationModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} className="modal">
        <div className="closeBtn" onClick={this.props.toggleModal}>x</div>
        <div className="formContainer">
          <form action={this.props.submitFrom} id="regForm">
            <input className="formField" type="text" placeholder="email" />
            <input className="formField" type="password" placeholder="password" />
          </form>
          <button type="submit" form="regForm" className="submitBtn">register</button>
        </div>
      </Modal>
    );
  }
}

export default RegistrationModal;
