import React from 'react';
import ReactDOM from 'react-dom';
import registration from '../../reducers';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import RegistrationModal from './RegistrationModal';
import * as actions from '../../actions';

import { createStore, applyMiddleware, combineReducers } from 'redux';

const middleware = [ thunk ];
const reducers = {
  registration,
  form: formReducer
}
const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

it('renders the registration modal', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><RegistrationModal actions={actions}/></Provider>, div);
});
