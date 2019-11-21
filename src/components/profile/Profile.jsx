import React from 'react';
import './Profile.css';
import UserDataContainer from "./userData/UserData-container";
import UserPostsContainer from "./users-posts/User-posts-container";

// Component Profile
function Profile(props) {
  return (
    <main className="main">
      <div className="wide-image">
        <img src="http://www.artofvfx.com/THOR/THOR_WHISKYTREE_VFX_04.jpg" alt="" />
      </div>
      
      <UserDataContainer/>

      <UserPostsContainer/>
      
    </main>
  )
}

export default Profile