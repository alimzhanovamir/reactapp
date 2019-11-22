import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import LastDialogs from './components/lastDialogs/LastDialogs';
import Profile from './components/profile/Profile';
import UsersContainer from "./components/users/Users-container";
import Settings from './components/settings/Settings';
import './App.css';
import DialogsContainer from "./components/dialogs/Dialogs-container";

function App(props) {
  return (
    <div className="grid">
      <Header/>

      <aside className="aside">
        <Nav />
        <LastDialogs/>
      </aside>
      <div className="content">

        {/* Profile page */}
        <Route
          exact path="/"
          render={ () => <Profile/> }
        />

        {/* Users page */}
        <Route
          path="/users"
          render={ () => <UsersContainer/> }
        />

        {/* Dialogs page */}
        <Route
          path="/dialogs"
          render={ () => <DialogsContainer/> }
        />

        {/* Settings page */}
        <Route
          path="/settings"
          render={ () => <Settings/> }
        />

      </div>
    </div>
  );
}


export default App;
