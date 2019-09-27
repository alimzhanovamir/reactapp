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
        {id: 1, name: 'Amir', message: 'Hello'},
        {id: 2, name: 'Lida', message: 'Hello =)'},
        {id: 3, name: 'Lada', message: 'Af af dsaf dasf sdf sadf sadfdsf'}
      ],
  
      messagesData: [
        { name: 'Amir', message: 'Hello' },
        { name: 'Lida', message: 'Hello )))' },
        { name: 'Amir', message: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nulla!)))' }
      ]
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
  onInputPostText( newText ) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber( this._state );
  },
  addPost() {
    let newPost = {
      name: 'Samuray',
      message: this._state.profilePage.newPostText
    };
  
    this._state.profilePage.posts.push( newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber( this._state );
  },
  subscribe( observer ) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state
  }
}

window.store = store;

export default store;