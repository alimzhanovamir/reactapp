// begin:: import reducers
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import lastDialogsReducer from "./reducers/last-dialogs-reducer";
// end:: import reducers

// begin:: Store
let store = {
  _state: {
    profilePage: {
      userData: {
        name:'Amir Alimzhanov',
        site: 'amir.pro'
      },
  
      posts: [
        {
          name: 'Amir',
          message: 'Hi bleat\''
        },
        {
          name: 'Amir',
          message: 'Hi bleat\''
        },
        {
          name: 'Lida',
          message: 'Hi \''
        }
      ],
  
      newPostText: ''
    },
    
    messagesPage: {
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
    },
  
    lastDialogs: {
      list: [
        {name: 'Amir'},
        {name: 'Lida'},
        {name: 'Lada'}
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },
  subscribe( observer ) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state
  },
  dispatch( action ) {

    this._state.profilePage = profileReducer( this._state.profilePage, action );
    this._state.messagesPage = dialogsReducer( this._state.messagesPage, action );
    this._state.lastDialogs = lastDialogsReducer( this._state.lastDialogs, action );
    this._callSubscriber( this._state )
  }
};
// end:: Store

export default store;