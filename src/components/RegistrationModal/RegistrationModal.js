import React from 'react';
import Modal from 'react-modal';
import './RegistrationModal.css';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const RegistrationModal = props => {
  let { toggleModal, submitForm  } = props.actions;
  let { isOpen, formData } = props;
  return (
    <Modal isOpen={isOpen} className="modal" contentLabel="registration">
      <div className="closeBtn" onClick={toggleModal}>x</div>
      <div className="modalContent">
        <h2>Create an account!</h2>
        <div className="formContainer">
          <RegistrationForm submitHandler={submitForm} formData={formData} />
        </div>
      </div>
    </Modal>
  )
}

export default RegistrationModal;
