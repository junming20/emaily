import 'materialize-css/dist/css/materialize.min.css'; // 引入非.js时必须加后缀
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';
import axios from 'axios';
window.axios = axios;

// create instance of redux store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  // every time our redex store get some new state, provider will inform all children components
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
// console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
// console.log('Environment is', process.env.NODE_ENV);
