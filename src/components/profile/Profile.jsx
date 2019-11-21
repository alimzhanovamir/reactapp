import React from 'react';
import './Profile.css';
import UserDataContainer from "./userData/UserData-container";
import UserPostsContainer from "./users-posts/User-posts-container";

// Component Profile
function Profile(props) {
  return (
    <main className="main">
      <div className="wide-image">
        <img src="https://cdn.pixabay.com/photo/2017/11/13/23/33/landscape-2947094_960_720.jpg" alt="" />
      </div>
      
      <UserDataContainer/>

      <UserPostsContainer/>
      
    </main>
  )
}

export default Profile