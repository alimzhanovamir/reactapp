import React from 'react';
import UserData from './userData/UserData';
import './Profile.css';
import UsersPosts from './users-posts/Users-posts';

function Profile(props) {
  return (
    <main className="main">
      <div className="wide-image">
        <img src="https://cdn.pixabay.com/photo/2017/11/13/23/33/landscape-2947094_960_720.jpg" alt="" />
      </div>
      
      <UserData userData={ props.profilePage.userData } />
      <UsersPosts 
        posts={ props.profilePage.posts } 
        newPostText={ props.profilePage.newPostText }
        dispatch={ props.dispatch }/>
      
    </main>
  )
}

export default Profile