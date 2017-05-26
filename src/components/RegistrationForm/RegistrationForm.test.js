import React from 'react';
import ReactDOM from 'react-dom';
import registration from '../../reducers';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import RegistrationForm from './RegistrationForm';

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

it('renders the registration form', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><RegistrationForm store={store}/></Provider>, div);
});
