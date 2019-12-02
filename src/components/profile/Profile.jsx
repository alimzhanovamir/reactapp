import React from 'react';
import './Profile.css';
import UserDataContainer from "./userData/UserData-container";
import UserPostsContainer from "./users-posts/User-posts-container";
import AuthPage from '../auth/AuthPage';

// Component Profile
function Profile(props) {
  
  if (!props.isAuth) return <AuthPage/>

  return (
    <main className="main">
      <UserDataContainer/>
      <UserPostsContainer/>
    </main>
  )
}

export default Profile