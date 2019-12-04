import React from 'react';
import { reduxForm, Field } from 'redux-form';
import classes from './New-post.module.css';
import { requiredFields, maxLengthCreator } from '../../../../utils/validators/validator';
import Textarea from '../../../common/forms-controls/textarea/Textarea';

const maxLength = maxLengthCreator(10);

// Component
function NewPostForm(props) {
  return (
    <form className={classes['new-post']} onSubmit={props.handleSubmit}>
      <div className={classes['new-post__area']}>
        <Field 
          name='postTextarea' 
          component={Textarea} 
          multiline='true'
          validate={[requiredFields, maxLength]}  
        />
      </div>
      <div className={classes['new-post__footer']}>
        <button className={classes['new-post__submit']}>Add post</button>
      </div>
    </form>
  )
}

// Component
const NewPostReduxForm = reduxForm({
  form: 'NewPostForm'
}) (NewPostForm)

// Component
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