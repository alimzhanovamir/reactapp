import React from 'react';
import classes from './Messages.module.css';
import Message from "./message/Message";

function Messages(props) {
  // debugger
  // EVENT CALLBACKS
  function onSendMessage() {
    if ( props.messagesPage.newMessageBody.length > 0 ) {
      props.sendMessage()
    }
  }

  function onNewMessageChange(e) {
    let body = e.target.value;
    props.newMessageChange( body )
  }

  // New text message from state
  let newMessageBody = props.messagesPage.newMessageBody;

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
      <div className={classes['message-input']}>
        <textarea value={ newMessageBody } onChange={ onNewMessageChange } name="" placeholder='Enter your message'></textarea>
      </div>
      <div className={classes['message-submit']}>
        <button className="new-post__submit" onClick={ onSendMessage }>Send</button>
      </div>
    </div>
  )
}

export default Messages
