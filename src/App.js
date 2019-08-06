import React from 'react';
import logo from './logo.svg';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Profile from './components/profile/Profile'
import './App.css';

function App() {
  return (
    <div className="grid">
      <Header />

      <aside className="aside">
        <Nav />
      </aside>
      
      <Profile />
    </div>
  );
}


export default App;
// export default Footer;
