import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { addPost, onInputPostText, subscribe } from './state/state';
import App from './App';
import state from './state/state';
import './index.css';

function rerenderEntireTree(state) {
  console.log('state changed');
  
  ReactDOM.render(
    <BrowserRouter>
      <App state={ state } addPost={ addPost } onInputPostText={ onInputPostText }/>
    </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree(state);
subscribe( rerenderEntireTree );

serviceWorker.unregister();
