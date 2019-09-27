import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

function Nav() {  
  return (
    <nav className={ classes.nav }>
      <ul className={ classes.nav__list }>
        <li className={classes.nav__item}>
          <NavLink className={ classes.nav__link } activeClassName={classes.active} to="/">Profile</NavLink>
        </li>
        <li className={ classes.nav__item }>
          <NavLink className={ classes.nav__link } activeClassName={classes.active} to="/dialogs">Messages</NavLink>
        </li>
        <li className={ classes.nav__item }>
          <NavLink className={ classes.nav__link } activeClassName={classes.active} to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav