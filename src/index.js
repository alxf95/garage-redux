import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';

import App from './components/App';
import carsReducer from './reducers/carsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const garageName =
  // prompt('What is your garage?') ||
  // `garage${Math.floor(10 + Math.random() * 90)}`;
  'Alex';

const initialState = {
  garage: garageName,
  cars: [],
};

const reducers = combineReducers({
  garage: (state = null) => state,
  cars: carsReducer,
  form: formReducer,
});

const middlewares = composeEnhancers(
  applyMiddleware(reduxPromise, thunk, logger)
);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
