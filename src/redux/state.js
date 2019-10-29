
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
  
      newPostText: 'Hi man!'
    },
    
    messagesPage: {
      dialogsData: [
        {id: 1, name: 'Amir', lastMessage: 'Hello'},
        {id: 2, name: 'Lida', lastMessage: 'Hello =)'},
        {id: 3, name: 'Lada', lastMessage: 'Af af dsaf dasf sdf sadf sadfdsf'}
      ],
  
      messagesData: [
        { name: 'Amir', message: 'Hello' },
        { name: 'Lida', message: 'Hello )))' },
        { name: 'Amir', message: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nulla!)))' }
      ],

      newMessageBody: ''
    },
  
    lastDialogs: [
      { name: 'Amir' },
      { name: 'Lida' },
      { name: 'Lada' }
    ]
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
  dispatch(action) {

    if ( action.type === INPUT_POST_TEXT ) {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber( this._state );
    }

    else if ( action.type === ADD_POST ) {
      let postText = {
        name: 'Samurai',
        message: this._state.profilePage.newPostText
      };

      this._state.profilePage.posts.push( action.postText );
      this._state.profilePage.newPostText = '';
      this._callSubscriber( this._state );
    }

    else if ( action.type === UPDATE_NEW_MESSAGE_BODY ) {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber( this._state );
    }

    else if ( action.type === SEND_MASSAGE ) {
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = '';
      this._state.messagesPage.messagesData.push({
        id: 6,
        message: body
      });
      this._callSubscriber( this._state );
    }
  }
};
// end:: Store

// begin:: Action types
const ADD_POST = 'ADD_POST';
const INPUT_POST_TEXT = 'INPUT_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MASSAGE = 'SEND_MASSAGE';
// end:: Action types


// begin:: Action creators
export function addPostActionCreator(name, text){
  return {
    type: ADD_POST,
    postText: {
      name: name,
      message: text
    }
  }
}

export function onPostChangeActionCreator(text){
  return {
    type: INPUT_POST_TEXT,
    text: text
  }
}
// end:: Action creators

export default store;