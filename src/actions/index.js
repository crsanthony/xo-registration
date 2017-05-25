import { TOGGLE_MODAL, SUBMIT_FORM } from '../constants/ActionTypes';

export const toggleModal = () => ({ type: TOGGLE_MODAL });
export const submitForm = data => ({ type: SUBMIT_FORM, data });
