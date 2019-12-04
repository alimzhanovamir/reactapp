import React from 'react';
import classes from './AuthPage.module.css';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../redux/reducers/auth-reducer';

function AuthForm(props) {
  console.log('props from AuthForm', props);
  return (
    <div className={classes['auth-form-wrap']}>
      <form className={classes['auth-form']} onSubmit={props.handleSubmit}>
        <div className={classes['auth-form__header']}>Login</div>
        <div className={classes['auth-form__body']}>
          <label className={classes['auth-form__label']} htmlFor="loginEmail">
            <span>login</span>
            <Field className={classes['auth-form__input']} name="loginEmail" component="input" type="text"/>
          </label>
          <label className={classes['auth-form__label']} htmlFor="loginPassword">
            <span>password</span>
            <Field className={classes['auth-form__input']} name="loginPassword" component="input" type="password"/>
          </label>
          <label className={classes['auth-form__']} htmlFor="rememberMe">
            <Field className={classes['auth-form__']} name="rememberMe" component="input" type="checkbox"/>
            <span>Remember me</span>
          </label>
        </div>
        <div className={classes['auth-form__footer']}>
          <button className={classes['auth-form__submit']}>Login</button>
        </div>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({
  // Уникальное имя для данной формы
  form: 'loginForm'
}) (AuthForm);

function AuthPage(props) {  
  function onSubmit(formData) {
    console.log('On submit');
    props.login(formData)
  }

  return (
    <LoginReduxForm onSubmit={onSubmit}/>
  )
}

export default connect(
  null, 
  {
    login
  }
)(AuthPage)