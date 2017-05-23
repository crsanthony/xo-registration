import { TOGGLE_MODAL, SUBMIT_FORM } from '../constants/ActionTypes';

const initialState = {
  modalOpen: false,
  registered: false,
}

export default function registration(state = initialsState, action) {
  switch(action.type) {
    case TOGGLE_MODAL:
     return (
       ...state
       modalOpen: !state.modalOpen
     )
    case SUBMIT_FORM:
      return state
  }
}
