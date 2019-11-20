const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MASSAGE = 'SEND_MASSAGE';

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: 'Amir',
      lastMessage: 'Hello'},
    {
      id: 2,
      name: 'Lida',
      lastMessage: 'Hello =)'},
    {
      id: 3,
      name: 'Lada',
      lastMessage: 'Af af dsaf dasf sdf sadf sadfdsf'}
  ],

  messagesData: [
    {
      name: 'Amir',
      message: 'Hello' },
    {
      name: 'Lida',
      message: 'Hello )))' },
    {
      name: 'Amir',
      message: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nulla!)))' }
  ],

  newMessageBody: ''
};

export default function dialogsReducer( state = initialState, action ) {
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