import React from 'react';
import Messages from './Messages';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/reducers/dialogs-reducer'
function MessagesContainer(props) {

  function sendMessage() {
    props.dispatch( sendMessageCreator() )
  }

  function newMessageChange(body) {
    props.dispatch( updateNewMessageBodyCreator(body) )
  }

  return (
    <Messages sendMessage={ sendMessage } newMessageChange={ newMessageChange } state={ props.state } />
  )
}

export default MessagesContainer
