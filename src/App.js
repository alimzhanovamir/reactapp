import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import LastDialogs from './components/lastDialogs/LastDialogs';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import './App.css';

function App(props) {
  return (
    <div className="grid">
      <Header text='Site'/>

      <aside className="aside">
        <Nav />
        <LastDialogs state={ props.state.lastDialogs }/>
      </aside>
      <div className="content">
        <Route path="/" 
          render={ () => <Profile profilePage={ props.state.profilePage } addPost={ props.addPost } onInputPostText={ props.onInputPostText }/> } />
        <Route path="/dialogs" 
          render={ () => <Dialogs state={ props.state.messagesPage }/> } />
      </div>
    </div>
  );
}


export default App;
// export default Footer;
