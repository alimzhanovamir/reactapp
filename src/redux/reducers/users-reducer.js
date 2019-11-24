const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 17,
  currentPage: 1,
  isFetching: false
};

export default function usersReducer( state = initialState, action ) {

  switch (action.type) {

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };

    case FOLLOW:
      return {
        ...state,
        users: state.users.map( user => {
          if ( user.id === action.userID ) {
            return { ...user, followed: true }
          }
          return user
        } )
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( user => {
          if ( user.id === action.userID ) {
            return { ...user, followed: false }
          }
          return user
        })
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };

    default:
      return state;

  }
}

// Action creators
export function setIsFetchingCreator( isFetching ){
  return {
    type: SET_IS_FETCHING,
    isFetching: isFetching
  }
}

export function setCurrentPageCreator( currentPage ){
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  }
}

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
