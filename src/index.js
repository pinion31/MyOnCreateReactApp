'use strict';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//import logger from 'redux-logger';
//import {createStore, applyMiddleware} from 'redux';
//import thunk from 'redux-thunk';
//import {Provider} from 'react-redux';
//import {BrowserRouter} from 'react-router-dom';
//import App from './components/App';
import '../sass/style.scss';

//const middleware = applyMiddleware(thunk);
//const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}