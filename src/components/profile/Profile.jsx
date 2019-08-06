import React from 'react';
import UserData from './../userData/UserData'

function Profile() {
  return (
    <main className="main">
      <div className="wide-image">
        <img src="https://cdn.pixabay.com/photo/2017/11/13/23/33/landscape-2947094_960_720.jpg" alt="" />
      </div>
      
      <UserData />

      <div className="user-posts">
        <div className="new-post">
          <div className="new-post__area">
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="new-post__footer">
            <button className="new-post__submit">Send</button>
          </div>
        </div>

        <ul className="user-posts__list">
          <li className="user-posts__item">
            <div className="user-post">
              <div className="user-post__avatar">
                <img src="https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png" alt="" />
              </div>
              <div className="user-post__content">
                <div className="user-post__user-name">Amir</div>
                <div className="user-post__text">Hello!!</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Profile