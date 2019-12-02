import React from 'react';
import './Profile.css';
import UserDataContainer from "./userData/UserData-container";
import UserPostsContainer from "./users-posts/User-posts-container";

// Component Profile
function Profile() {
  return (
    <>
      <UserDataContainer/>
      <UserPostsContainer/>
    </>
  )
}

export default Profile