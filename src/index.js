import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import './index.css';
// import { Provider } from "./store-context";
import { Provider } from "react-redux";

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>, document.getElementById('root')
  );

serviceWorker.unregister();
