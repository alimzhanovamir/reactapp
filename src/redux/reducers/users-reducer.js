import UsersAPI from "../../crud/usersAPI";
import FollowAPI from "../../crud/followAPI";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
  users: [],
  pageSize: 3,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

export default function usersReducer( state = initialState, action ) {

  switch (action.type) {

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };

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
      
    case FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.status ?
            [...state.followingInProgress, action.fetchingID]
            :
            state.followingInProgress.filter( el => el !== action.fetchingID )

      }

    default:
      return state;

  }
}

// Action creators
export function setTotalUsersCount( totalUsersCount ){
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
  }
}

export function setIsFetching( isFetching ){
  return {
    type: SET_IS_FETCHING,
    isFetching: isFetching
  }
}

export function setCurrentPage( currentPage ){
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  }
}

export function followSuccess( userID ){
  return {
    type: FOLLOW,
    userID: userID
  }
}

export function unfollowSuccess( userID ){
  return {
    type: UNFOLLOW,
    userID: userID
  }
}

export function setUsers( users ) {
  return {
    type: SET_USERS,
    users: users
  }
}

export function toggleFollowingProgress( fetchingID, status ) {
  return {
    type: FOLLOWING_IN_PROGRESS,
    fetchingID: fetchingID,
    status: status
  }
}

// Thunks
export function getUsers(currentPage, pageSize) {
  return (dispatch) => {
    dispatch(setIsFetching(true));

    UsersAPI.getUsers(currentPage, pageSize)
      .then( data => {
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setUsers(data.items));
        dispatch(setIsFetching(false));
      });

  }
}

export function onFollow(userID) {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(userID, true));

    FollowAPI.Follow(userID)
      .then(resultCode => {
        if (resultCode === 0) {
          dispatch(followSuccess(userID));
          dispatch(toggleFollowingProgress(userID, false));
        }
      });
  }
}

export function onUnfollow(userID) {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(userID, true));

    FollowAPI.Unfollow(userID)
      .then(resultCode => {
        if (resultCode === 0) {
          dispatch(unfollowSuccess(userID));
          dispatch(toggleFollowingProgress(userID, false));
        }
      });
  }
}
