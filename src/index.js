import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import './index.css';
import StoreContext from "./store-context";

function rerenderEntireTree(state) {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree( store.getState() );

store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree( state )
} );

serviceWorker.unregister();
