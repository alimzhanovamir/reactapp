import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import './App.css';
import Settings from './components/settings/Settings';
import UsersContainer from "./components/users/Users-container";
import DialogsContainer from "./components/dialogs/Dialogs-container";
import LastDialogs from './components/lastDialogs/LastDialogs';
import ProfileContainer from "./components/profile/Profile-container";

function App(props) {
  return (
    <div className="grid">
      <Header/>

      <aside className="aside">
        <Nav/>
        <LastDialogs/>
      </aside>
      <div className="main">

        {/* Profile page */}
        <Route exact path="/">
          <Redirect to="/profile" />
        </Route>

        <Route
          path="/profile"
          render={ () => <ProfileContainer/> }
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
      <div className="footer">Footer</div>
    </div>
  );
}


export default App;
