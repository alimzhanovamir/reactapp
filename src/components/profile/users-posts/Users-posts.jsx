import React from 'react';
import classes from './Users-posts.module.css';
import NewPost from './new-post/New-post';
import Post from './post/Post';

function UsersPosts(props) {
  let postsList = props.posts.map( post => {
    return (
      <li className={ classes['user-posts__item'] }>
        <Post name={ post.name } message={ post.message } />
      </li>
    )
  })

  return (
    <div className={ classes['user-posts'] }>
      
      <NewPost 
        addPost={ props.addPost } 
        newPostText={ props.newPostText } 
        onInputPostText={ props.onInputPostText }/>

      <ul className={ classes['user-posts__list'] }>
        { postsList }
      </ul>
    </div>
  )
}

export default UsersPosts