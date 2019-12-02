import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/nav/Nav';
import './App.css';
import AuthPage from './components/auth/AuthPage';
import Settings from './components/settings/Settings';
import UsersContainer from "./components/users/Users-container";
import DialogsContainer from "./components/dialogs/Dialogs-container";
import LastDialogs from './components/lastDialogs/LastDialogs';
import ProfileContainer from "./components/profile/Profile-container";
import HeaderContainer from "./components/header/HeaderContainer";

function App() {
  return (
    <div className="grid">
      <HeaderContainer/>

      <aside className="aside">
        <div className="aside__sticky">
          <Nav/>
          <LastDialogs/>
        </div>
      </aside>
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>

          <Route
            path="/profile/:userID?"
            render={ () => <ProfileContainer/> }
          />
          
          <Route
            path="/login"
            render={ () => <AuthPage/> }
          />

          <Route
            path="/users"
            render={ () => <UsersContainer/> }
          />

          <Route
            path="/dialogs"
            render={ () => <DialogsContainer/> }
          />

          <Route
            path="/settings"
            render={ () => <Settings/> }
          />
        </Switch>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}


export default App;
