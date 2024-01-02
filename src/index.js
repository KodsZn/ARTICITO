import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Js/Store/Store';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
</BrowserRouter>
);

