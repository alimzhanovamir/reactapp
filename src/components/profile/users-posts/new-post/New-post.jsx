import React from 'react';
import classes from './New-post.module.css';

// Component NewPost
function NewPost( props ) {

  let postTextarea = React.createRef();
  let postButton = React.createRef();
  let buttonDisabled = props.newPostText.length > 0 ? false : true;

  function onPostChange() {
    let text = postTextarea.current.value;
    postButton.current.disabled = buttonDisabled;
    props.updateNewPostText( text );
  }

  function onAddPost() {
    if ( props.newPostText !== '' ) {
      props.addPost( props.fullName, props.newPostText )
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
        />
      </div>
      <div className={classes['new-post__footer']}>
        <button className={classes['new-post__submit']} ref={ postButton } onClick={ onAddPost } disabled={ buttonDisabled }>Add post</button>
      </div>
    </div>
  )
}

export default NewPost