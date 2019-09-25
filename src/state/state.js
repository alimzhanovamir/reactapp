let state = {
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
};

let rerenderEntireTree = () => {
  console.log('State changed');
}

export function onInputPostText( newText ) {
  state.profilePage.newPostText = newText;
  rerenderEntireTree( state );
}

export function addPost() {
  let newPost = {
    name: 'Samuray',
    message: state.profilePage.newPostText
  };

  state.profilePage.posts.push( newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree( state );
};

export function subscribe( observer ) {
  rerenderEntireTree = observer;
}

window.state = state;

export default state;