const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: []
};

export default function userReducer( state = initialState, action ) {

  switch (action.type) {

    case FOLLOW:
      console.log(state)
      return {
        ...state,
        users: state.users.map( user => {
          if ( user.id === action.userID ) {
            return { ...user, followed: true }
          }
          return user
        } )
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( user => {
          if ( user.id === action.userID ) {
            return { ...user, followed: false }
          }
          return user
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }

    default:
      return state;

  }
}

// Action creators
export function followCreator( userID ){
  return {
    type: FOLLOW,
    userID: userID
  }
}

export function unfollowCreator( userID ){
  return {
    type: UNFOLLOW,
    userID: userID
  }
}

export function setUsersCreator( users ) {
  return {
    type: SET_USERS,
    users: users
  }
}
