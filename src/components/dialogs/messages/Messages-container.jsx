import React from 'react';
import Messages from './Messages';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/reducers/dialogs-reducer'
import StoreContext from "../../../store-context";
function MessagesContainer(props) {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let messagesPage = store.getState().messagesPage;

          function sendMessage() {
            store.dispatch( sendMessageCreator() )
          }

          function newMessageChange(body) {
            store.dispatch( updateNewMessageBodyCreator(body) )
          }

          return (
            <Messages
              sendMessage={ sendMessage }
              newMessageChange={ newMessageChange }
              messagesPage={ messagesPage } />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default MessagesContainer
