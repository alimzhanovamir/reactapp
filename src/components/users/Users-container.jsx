import React from 'react';
import { compose } from 'redux';
import {connect} from "react-redux";
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Users from "./Users";
import {
  setCurrentPage,
  getUsers,
  onFollow,
  onUnfollow
} from '../../redux/reducers/users-reducer';

// Component Users Container
class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage( pageNumber );
    this.props.getUsers( pageNumber, this.props.pageSize )
  };

  render() {

    let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );
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
        followingInProgress={this.props.followingInProgress}
        onPageChanged={this.onPageChanged}
        onFollow={this.props.onFollow}
        onUnfollow={this.props.onUnfollow}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    users:                state.usersPage.users,
    pageSize:             state.usersPage.pageSize,
    totalUsersCount:      state.usersPage.totalUsersCount,
    currentPage:          state.usersPage.currentPage,
    isFetching:           state.usersPage.isFetching,
    followingInProgress:  state.usersPage.followingInProgress,
  }
}

export default compose(
  connect(
    mapStateToProps,
    {
      setCurrentPage,
      onFollow,
      onUnfollow,
      getUsers
    }
  ),
  withAuthRedirect
)(UsersContainer);
