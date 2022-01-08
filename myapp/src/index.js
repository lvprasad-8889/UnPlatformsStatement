import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom'

import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import {Provider} from 'react-redux';
import store from './Redux';




ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

