import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

function Header(props) {
  // debugger
  return (
    <header className={ classes.header }>
      <a href="/">
        <img src="https://www.freeiconspng.com/uploads/avengers-icon-16.png" alt=""/>
      </a>
      {props.isAuth ?
        <span>{props.login}</span>
        :
        <NavLink className={classes['header__link']} to={'/login'}>Login</NavLink>
      }
    </header>
  )
}

export default Header