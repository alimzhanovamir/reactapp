import React from 'react';
import { reduxForm, Field } from 'redux-form';
import classes from './New-post.module.css';

// Component NewPost

function NewPostForm(props) {
  return (
    <form className={classes['new-post']} onSubmit={props.handleSubmit}>
      <div className={classes['new-post__area']}>
        <Field name='postTextarea' component='textarea'/>
      </div>
      <div className={classes['new-post__footer']}>
        <button className={classes['new-post__submit']}>Add post</button>
      </div>
    </form>
  )
}

const NewPostReduxForm = reduxForm({
  form: 'NewPostForm'
}) (NewPostForm)

function NewPost( props ) {
  
  function onSubmit(formData) {
    if ( formData.postTextarea ) {
      props.addPost( props.fullName, formData.postTextarea )
    }
    else {
      alert('You make me cry. Please, fill the form');
    }
  }

  return (
    <NewPostReduxForm onSubmit={onSubmit}/>
  )
}

export default NewPost