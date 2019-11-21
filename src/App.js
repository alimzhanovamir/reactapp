import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import LastDialogs from './components/lastDialogs/LastDialogs';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';
import './App.css';
import DialogsContainer from "./components/dialogs/Dialogs-container";

function App(props) {
  return (
    <div className="grid">
      <Header text='Site'/>

      <aside className="aside">
        <Nav />
        <LastDialogs/>
      </aside>
      <div className="content">
        <Route
          exact path="/"
          render={ () => <Profile/> } />

        <Route
          path="/dialogs" render={ () => <DialogsContainer/> }/>

        <Route
          path="/settings" render={ () => <Settings/> } />
      </div>
    </div>
  );
}


export default App;
