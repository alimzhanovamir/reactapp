import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Users.module.css';
import FollowAPI from "../../crud/followAPI";

function Users(props) {
  return (
    <div className={classes['users']}>

      <div className={classes['users-paginator']}>
        <div>Page size: {props.pageSize}</div>
        <div>Total count: {props.totalUsersCount}</div>
        <div>Current Page: {props.currentPage}</div>

        <ul className={classes['users-paginator__list']}>
          {
            props.pages.map((pageNumber) => {
              return (
                <li key={pageNumber} className={classes['users-paginator__item']}>
                  <button

                    className={`
                      ${classes['users-paginator__link']} 
                      ${props.currentPage === pageNumber && classes['active']}`
                    }

                    onClick={() => {
                      props.onPageChanged(pageNumber)
                    }}

                    disabled={props.isFetching}
                  >
                    {pageNumber}
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>

      <div className={`${classes['users-list-container']} ${props.isFetching ? classes['fetching'] : ''}`}>
        <ul className={classes['users-list']}>
          {
            props.users.map(user => (
              <li className={classes['users-list__item']} key={user.id}>
                <div className={classes['user']}>
                  <div className={classes['user__']}>
                    <img src={user.photos.small} alt=""/>
                  </div>
                  <div className={classes['user__id']}>{user.id}</div>
                  <NavLink
                    className={classes['user__name']}
                    to={`profile/${user.id}`}>{user.name}
                  </NavLink>
                  {user.status && <div className={classes['user__status']}>{user.status}</div>}
                  <div>
                    {/*<div className={classes['user__address']}>{ user.location.country }:</div>*/}
                    {/*<div className={classes['user__address']}>{ user.location.city }</div>*/}
                  </div>
                  {user.followed
                    ? <button className={classes['user__follow-button']}
                        onClick={
                          () => {
                            props.toggleFollowingProgress(user.id, true);
                            FollowAPI.Unfollow(user.id)
                              .then(resultCode => {
                                if (resultCode === 0) {
                                  props.unfollow(user.id);
                                  props.toggleFollowingProgress(user.id, false);
                                }
                              })
                          }
                        }

                        disabled={ props.followingInProgress.some( id => id === user.id )}
                    >followed</button>
                    : <button className={classes['user__follow-button']}
                        onClick={
                          () => {
                            props.toggleFollowingProgress(user.id, true);
                            FollowAPI.Follow(user.id)
                              .then(resultCode => {
                                if (resultCode === 0) {
                                  props.follow(user.id);
                                  props.toggleFollowingProgress(user.id, false);
                                }
                              })
                          }
                        }

                        disabled={ props.followingInProgress.some( id => id === user.id )}
                      >follow</button>
                  }
                </div>
              </li>
            ))
          }
        </ul>
      </div>
      <div className={classes['users-footer']}>
        <button className={classes['users-footer__button']}>Show more</button>
      </div>
    </div>
  )
}

export default Users