import React from 'react';
import classes from './New-post.module.css';
import { addPostCreator, onPostChangeCreator } from "./../../../../redux/reducers/profile-reducer";

// Component NewPost
function NewPost( props ) {
  let postTextarea = React.createRef();
  let postButton = React.createRef();
  let buttonDisabled = props.newPostText.length > 0 ? false : true;

  // Событие ввода текста в <textarea>
  function onPostChange() {
    postButton.current.disabled = postTextarea.current.value.length > 0 ? false : true;
    props.dispatch( onPostChangeCreator( postTextarea.current.value)  );
  }

  // Событие добавления поста
  function addPost() {
    if ( postTextarea.current.value !== '' ) {
      props.dispatch( addPostCreator('Amir', postTextarea.current.value) );
    }
    else {
      alert('You make me cry. Please, fill the form');
    }
  }

  return (
    <div className={classes['new-post']}>
      <div className={classes['new-post__area']}>
        <textarea
          ref={ postTextarea }
          onChange={ onPostChange }
          id="textarea"
          value={ props.newPostText }
          name="" cols="" rows=""
        />
      </div>
      <div className={classes['new-post__footer']}>
        <button className={classes['new-post__submit']} ref={ postButton } onClick={ addPost } disabled={ buttonDisabled }>Add post</button>
      </div>
    </div>
  )
}

export default NewPost