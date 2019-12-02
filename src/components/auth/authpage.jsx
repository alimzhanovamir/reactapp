import React from 'react';

export default function AuthPage() {
  return (
    <div className="form">
      <label htmlFor="">
        login
        <input type="text"/>
      </label>
      <label htmlFor="">
        password
        <input type="password"/>
      </label>
    </div>
  )
}