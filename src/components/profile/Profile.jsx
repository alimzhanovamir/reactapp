import React from 'react';
import './Profile.css';
import UserDataContainer from "./userData/UserData-container";
import UserPostsContainer from "./users-posts/User-posts-container";

// Component Profile
function Profile(props) {
  // debugger
  return (
    <main className="main">
      <UserDataContainer/>
      <UserPostsContainer/>
    </main>
  )
}

export default Profile