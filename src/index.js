import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './state/state';
import './index.css';

function rerenderEntireTree(state) {
  ReactDOM.render(
    <BrowserRouter>
      <App state={ state } addPost={ store.addPost.bind(store) } onInputPostText={ store.onInputPostText.bind(store) }/>
    </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree( store.getState() );
store.subscribe( rerenderEntireTree );

serviceWorker.unregister();
