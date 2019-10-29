import React from 'react';
import classes from './Messages.module.css';
import Message from './message/Message';

function Messages(props) {

  let messagesList = props.messagesData.map( messageData => {
    return (
      <li className={classes['messages__message']}>
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
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className={classes['message-submit']}>
        <button className="new-post__submit">Send</button>
      </div>
    </div>
  )
}

export default Messages
