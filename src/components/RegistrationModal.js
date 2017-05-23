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
        <span>hi there</span>
      </Modal>
    );
  }
}

export default RegistrationModal;
