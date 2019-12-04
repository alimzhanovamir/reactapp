import React from 'react';
import classes from './Messages.module.css';
import Message from "./message/Message";
import { reduxForm, Field } from 'redux-form';

// Component
function AddMessageForm(props) {

  // function onSendMessage() {
  //   if ( props.messagesPage.newMessageBody.length > 0 ) {
  //     props.sendMessage()
  //   }
  // }

  // function onNewMessageChange(e) {
  //   let body = e.target.value;
  //   props.newMessageChange( body )
  // }

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes['message-input']}>
        <Field name='messageTextarea' component='textarea' type='text'/>
      </div>
      <div className={classes['message-submit']}>
        <button name='messageSubmit' className='new-post__submit'>Send</button>
      </div>
    </form>
  )
}

// HOC
const AddMessageReduxForm = reduxForm({
  form: 'messageForm'
})(AddMessageForm)

// Component
function Messages(props) {

  function onSubmit(formData) {
    console.log(formData.messageTextarea);
    props.sendMessage(formData.messageTextarea)
  }

  // Message list from state
  let messagesList = props.messagesPage.messagesData.map( (messageData, key) => {
    return (
      <li className={classes['messages__message']} key={key}>
        <Message name={ messageData.name } message={ messageData.message } />
      </li>
    )
  });

  return (
    <div className={classes['messages-section']}>
      <ul className={classes['messages']}>
        { messagesList }
      </ul>
      <AddMessageReduxForm onSubmit={onSubmit}/>
    </div>
  )
}



export default Messages
