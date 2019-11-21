import React from 'react';
import classes from './Users-posts.module.css';
import Post from './post/Post';
import NewPostContainer from "./new-post/New-post-container";

function UsersPosts(props) {

  let postsList = props.posts.map( ( post, id ) => {
    return (
      <li className={ classes['user-posts__item'] } key={id}>
        <Post name={ post.name } message={ post.message } />
      </li>
    )
  });

  return (
    <div className={ classes['user-posts'] }>
      <NewPostContainer/>

      <ul className={ classes['user-posts__list'] }>
        { postsList }
      </ul>
    </div>
  )
}

export default UsersPosts