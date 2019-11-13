import React from 'react';
import classes from './Messages.module.css';
import Message from './message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/reducers/dialogs-reducer'
function Messages(props) {

  function onSendMessage() {
    if ( props.state.newMessageBody.length > 0 ) {
      props.dispatch( sendMessageCreator() )
    }
  }

  function onNewMessageChange(e) {
    props.dispatch( updateNewMessageBodyCreator(e.target.value) )
  }

  let newMessageBody = props.state.newMessageBody;

  let messagesList = props.state.messagesData.map( (messageData, key) => {
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
