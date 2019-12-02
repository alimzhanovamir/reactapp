import React from 'react';
import AuthPage from '../auth/AuthPage';

function Settings(props) {
  
  if (!props.isAuth) return <AuthPage/> 

  return (
    <h1>
      Coming soon!
    </h1>
  )
}

export default Settings