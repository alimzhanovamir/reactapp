import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
  setCurrentPageCreator,
  followCreator,
  unfollowCreator,
  setUsersCreator,
  setIsFetchingCreator
} from '../../redux/reducers/users-reducer';
import * as axios from "axios";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get('https://api.myjson.com/bins/jn4cq')
      .then( ({data}) => {
        this.props.setUsers(data.users);
          setTimeout(() => {
            this.props.setIsFetching(false)
          }, 1000)
        }
      );
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios
      .get('https://api.myjson.com/bins/jn4cq')
      .then( ({data}) => {
        this.props.setUsers(data.users);
        setTimeout(() => {
          this.props.setIsFetching(false)
        }, 1000)
      });
  };

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <Users
        users={this.props.users}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        pages={pages}
        isFetching={this.props.isFetching}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setIsFetching: isFetching => {
      dispatch(setIsFetchingCreator(isFetching))
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageCreator(pageNumber))
    },
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
) ( UsersContainer );
