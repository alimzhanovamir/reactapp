import Users from "./Users";
import {connect} from "react-redux";
import { followCreator, unfollowCreator, setUsersCreator } from '../../redux/reducers/users-reducer';

function mapStateToProps (state) {
  return {
    users: state.usersPage.users
  }
}

function mapDispatchToProps (dispatch) {
  return {
    follow: userID => {
      dispatch(followCreator(userID))
    },
    unfollow: userID => {
      dispatch(unfollowCreator(userID))
    },
    setUsers: users => {
      dispatch(setUsersCreator(users))
    }
  }
}

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) ( Users )

export default UsersContainer
