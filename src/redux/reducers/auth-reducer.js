import AuthAPI from "../../crud/authAPI";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false
};

export default function authReducer( state = initialState, action ) {

  switch (action.type) {

    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };

    default:
      return state;

  }
}

// Action creators
export function setAuthUserData(userID, email, login) {
  return {
    type: SET_USER_DATA,
    data: {
      userID: userID,
      email: email,
      login: login
    }
  }
}

//Thunks
export function getAuthInfo() {
  return (dispatch) => {
    AuthAPI.getAuth()
      .then( data => {
        let { id, email, login } = data.data;

        if ( data.resultCode === 0 ) {
          dispatch(setAuthUserData(id, email, login));
        }
      });
  }
}
