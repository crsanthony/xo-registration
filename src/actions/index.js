import * as types from '../constants/ActionTypes';

export const toggleModal = () => ({ type: types.TOGGLE_MODAL });
export const submitForm = data => ({ type: types.SUMBIT_FORM, data });
