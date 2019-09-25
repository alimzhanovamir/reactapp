import React from 'react';
import classes from './New-post.module.css';

function NewPost( props ) {
  let newPostElement = React.createRef();

  function onPostChange() {
    let text = newPostElement.current.value;
    props.onInputPostText( text );
  }

  return (
    <div className={classes['new-post']}>
      <div className={classes['new-post__area']}>
        <textarea onChange={ onPostChange } ref={ newPostElement } id="textarea" value={ props.newPostText } name="" cols="30" rows="10"></textarea>
      </div>
      <div className={classes['new-post__footer']}>
        <button className={classes['new-post__submit']} onClick={ props.addPost }>Add post</button>
      </div>
    </div>
  )
}

export default NewPost