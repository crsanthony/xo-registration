import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import registration from './reducers';
import { reducer as formReducer } from 'redux-form'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const reducers = {
  registration,
  form: formReducer
}
const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
