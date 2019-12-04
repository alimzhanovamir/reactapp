import profileAPI from '../../crud/profileAPI';

const ADD_POST = 'ADD_POST';
// const INPUT_POST_TEXT = 'INPUT_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
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
  status: '',
  newPostText: ''
};

export default function profileReducer( state = initialState, action ) {

  switch (action.type) {

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status ? action.status : 'write status'
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

/* begin:: Action creators
 * gets params
 * return object(Action)
 */
export function setUserProfile(profile) {
  return {
    type: SET_USER_PROFILE,
    profile: profile
  }
}

export function setStatus(status) {
  return {
    type: SET_USER_STATUS,
    status: status
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
// end:: Action creators




/* begin:: Thunks creators
 * gets params
 * return function(Thunk) with dispatch in argument
 */

// GET profile data
export function loadProfile(userID) {
  return (dispatch) => {
    if (!userID) userID = 5270;

    profileAPI.loadProfile(userID)
      .then( data => {
        dispatch(setUserProfile(data));
      });
  }
}

// GET status data
export function loadStatus(userID) {
  return (dispatch) => {
    if (!userID) userID = 5270;

    profileAPI.getUserStatus(userID)
      .then( status => {
        dispatch(setStatus(status))
      });
  }
}

// PUT status
export function uploadStatus(status) {
  return (dispatch) => {
    profileAPI.updateUserStatus(status)
      .then( response => {
        if ( response.data.resultCode === 0 ) {
          dispatch(setStatus(status))
        }
      });
  }
}

// end:: Thunks