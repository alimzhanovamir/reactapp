const SEND_MASSAGE = 'SEND_MASSAGE';

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: 'Strange',
      lastMessage: 'Hello'},
    {
      id: 2,
      name: 'Groot',
      lastMessage: 'I\'m groot'},
    {
      id: 3,
      name: 'Loki',
      lastMessage: 'I have an army.'}
  ],

  messagesData: [
    {
      name: 'Groot',
      message: 'I\'m groot' },
    {
      name: 'Tor',
      message: 'Hello' },
    {
      name: 'Groot',
      message: 'I\'m groot' }
  ],

  newMessageBody: ''
};

export default function dialogsReducer( state = initialState, action ) {

  switch (action.type) {

    case SEND_MASSAGE:
      let body = action.messageText;

      return {
        ...state,
        newMessageBody: '',
        messagesData: [ ...state.messagesData, {
          id: 6,
          name: 'Amir',
          message: body
        } ]
      };

    default:
      return state;

  }
}

export function sendMessageCreator( messageText ){
  return {
    type: SEND_MASSAGE,
    messageText: messageText
  }
}