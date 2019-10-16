import React from 'react';
import classes from './New-post.module.css';
import { addPostActionCreator, onPostChangeActionCreator } from "../../../../redux/state";

// Component NewPost
function NewPost( props ) {
  let newPostElement = React.createRef();

  function onPostChange() {
    props.dispatch( onPostChangeActionCreator( newPostElement.current.value)  );
  }

  function addPost() {
    props.dispatch( addPostActionCreator('Amir', newPostElement.current.value) );
  }

  return (
    <div className={classes['new-post']}>
      <div className={classes['new-post__area']}>
        <textarea
          ref={ newPostElement }
          onChange={ onPostChange }
          id="textarea"
          value={ props.newPostText }
          name="" cols="30" rows="10"
        />
      </div>
      <div className={classes['new-post__footer']}>
        <button className={classes['new-post__submit']} onClick={ addPost }>Add post</button>
      </div>
    </div>
  )
}

export default NewPost