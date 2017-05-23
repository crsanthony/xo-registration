import React, { Component } from 'react';
import Modal from 'react-modal';
import './RegistrationModal.css';

class RegistrationModal extends Component {

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
      <Modal isOpen={this.state.modalOpen} className="modal">
        <div className="closeBtn" onClick={this.toggleModal}>x</div>
        <form className="formContainer">
          <input className="formField" type="text" placeholder="email" />
          <input className="formField" type="password" placeholder="password" />
          <button className="submitBtn">register</button>
        </form>
      </Modal>
    );
  }
}

export default RegistrationModal;
