const ADD_POST = 'ADD_POST';
const INPUT_POST_TEXT = 'INPUT_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  // profile: {
  //   fullName:'Tor',
  //   aboutMe: 'Avangers',
  //   photos: {
  //     large: null
  //   }
  // },

  posts: [
    {
      fullName: 'Captain America',
      message: 'Hi \''
    },
    {
      fullName: 'Tor',
      message: '!!!!!!!!!!!!'
    }
  ],

  newPostText: ''
};

export default function profileReducer( state = initialState, action ) {

  switch (action.type) {

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

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
export function  setUserProfile(profile) {
  return {
    type: SET_USER_PROFILE,
    profile: profile
  }
}

export function addPostCreator( name, text ){
  return {
    type: ADD_POST,
    postText: {
      fullName: name,
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
