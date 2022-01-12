import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Storages from "./Redux/Store/store"


ReactDOM.render(
  <Provider store={Storages}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root'));