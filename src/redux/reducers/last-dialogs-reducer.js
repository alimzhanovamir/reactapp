let initialState = {
  list: [
    {name: 'Strange'},
    {name: 'Groot'},
    {name: 'Loki'}
  ]
}

export default function lastDialogsReducer( state = initialState, action ) {

  // switch (action.type) {
  //
  //   case UPDATE_NEW_MESSAGE_BODY:
  //     state.newMessageBody = action.body;
  //     return state;
  //
  //   case SEND_MASSAGE:
  //     let body = state.newMessageBody;
  //
  //     state.newMessageBody = '';
  //     state.messagesData.push({
  //       id: 6,
  //       name: 'Amir',
  //       message: body
  //     });
  //     return state;
  //
  //   default:
  //     return state;
  //
  // }

  return state
}