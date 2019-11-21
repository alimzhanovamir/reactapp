const ADD_POST = 'ADD_POST';
const INPUT_POST_TEXT = 'INPUT_POST_TEXT';

let initialState = {
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
};

export default function profileReducer( state = initialState, action ) {

  switch (action.type) {

    case INPUT_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      };

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.postText],
        newPostText: ''
      };

    default:
      return state;

  }
}

// Action creators
export function addPostCreator( name, text ){
  return {
    type: ADD_POST,
    postText: {
      name: name,
      message: text
    }
  }
}

export function onPostChangeCreator( text ){
  return {
    type: INPUT_POST_TEXT,
    text: text
  }
}
