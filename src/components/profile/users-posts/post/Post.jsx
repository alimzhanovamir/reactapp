import React from 'react';
import classes from './Post.module.css';

function Post(props) {
  return (
    <div className={ classes['user-post'] }>
      <div className={ classes['user-post__avatar'] }>
        <img src="https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png" alt="" />
      </div>
      <div className={ classes['user-post__content'] }>
        <div className={ classes['user-post__user-name'] }>{ props.fullName }</div>
        <div className={ classes['user-post__text'] }>{ props.message }</div>
      </div>
    </div>
  )
}

export default Post