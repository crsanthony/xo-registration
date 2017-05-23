import { TOGGLE_MODAL, SUBMIT_FORM } from './constants/ActionTypes';

const initialState = {
  modalOpen: true,
  registered: false,
}

export default function registration(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_MODAL:
     return {
       ...state,
       modalOpen: !state.modalOpen
     }
    case SUBMIT_FORM:
      return {
        ...state,
        registered: true
      }
    default:
      return state
  }
}
