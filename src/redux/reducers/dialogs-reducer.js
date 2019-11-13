const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MASSAGE = 'SEND_MASSAGE';

export default function dialogsReducer( state, action ) {
  switch (action.type) {

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MASSAGE:
      let body = state.newMessageBody;

      state.newMessageBody = '';
      state.messagesData.push({
        id: 6,
        name: 'Amir',
        message: body
      });
      return state;

    default:
      return state;

  }
}

export function sendMessageCreator( body ){
  return {
    type: SEND_MASSAGE,
  }
}

export function updateNewMessageBodyCreator( body ){
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
}