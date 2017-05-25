import React from 'react';
import Modal from 'react-modal';
import './RegistrationModal.css';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const RegistrationModal = props => {
  let { toggleModal, submitForm } = props.actions;
  let { isOpen } = props;
  return (
    <Modal isOpen={isOpen} className="modal" contentLabel="registration">
      <div className="closeBtn" onClick={toggleModal}>x</div>
      <div className="formContainer">
        <RegistrationForm submitHandler={submitForm} />
      </div>
    </Modal>
  )
}

export default RegistrationModal;
