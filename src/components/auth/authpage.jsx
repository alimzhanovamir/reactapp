import React from 'react';
import classes from './AuthPage.module.css';

export default function AuthPage() {
  return (
    <div className={classes['auth-form-wrap']}>
      <div className={classes['auth-form']}>
        <label className={classes['auth-form__label']} htmlFor="">
          <span>login</span>
          <input  className={classes['auth-form__input']} type="text"/>
        </label>
        <label className={classes['auth-form__label']} htmlFor="">
          <span>password</span>
          <input  className={classes['auth-form__input']} type="password"/>
        </label>
      </div>
    </div>
  )
}