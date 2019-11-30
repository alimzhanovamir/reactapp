import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
  setCurrentPage,
  setTotalUsersCount,
  follow,
  unfollow,
  setUsers,
  setIsFetching,
  toggleFollowingProgress
} from '../../redux/reducers/users-reducer';
import UsersAPI from "../../crud/usersAPI";

class UsersContainer extends React.Component {

  componentDidMount() {
    // This code moved to reducer(thunk)
    // this.props.setIsFetching(true);
    //
    // UsersAPI.getUsers( this.props.currentPage, this.props.pageSize)
    //   .then( data => {
    //     this.props.setTotalUsersCount(data.totalCount);
    //     this.props.setUsers(data.items);
    //     this.props.setIsFetching(false);
    //   });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);

    UsersAPI.getUsers( pageNumber, this.props.pageSize)
      .then( data => {
        this.props.setTotalUsersCount(data.totalCount);
        this.props.setUsers(data.items);
        this.props.setIsFetching(false);
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
        followingInProgress={this.props.followingInProgress}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
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

export default connect(
  mapStateToProps,
  {
    setTotalUsersCount,
    setIsFetching,
    setCurrentPage,
    follow,
    unfollow,
    setUsers,
    toggleFollowingProgress
  }
) ( UsersContainer );
