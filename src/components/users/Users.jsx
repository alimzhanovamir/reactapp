import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';

function Users(props) {

  // Get users
  function getUser() {
    if ( props.users.length === 0 ) {
      axios.get('https://api.myjson.com/bins/jn4cq')
        .then( ({data}) => {
          props.setUsers(data.users);
        });
    }
  }

  // Download other users
/*  function showMore() {
    props.setUsers(props.users)
  }*/

  return (
    <div className={classes['users']}>
      <ul className={classes['users-list']}>
        {
          props.users.map( user => (
            <li className={classes['users-list__item']} key={user.id}>
              <div className={classes['user']}>
                <div className={classes['user__id']}>{ user.id }</div>
                <div className={classes['user__name']}>{ user.name }</div>
                <div className={classes['user__status']}>{ user.status }</div>
                <div>
                  <div className={classes['user__address']}>{ user.location.country }:</div>
                  <div className={classes['user__address']}>{ user.location.city }</div>
                </div>
                <button className={classes['user__follow-button']}>{ user.followed ? 'followed' : 'follow' }</button>
              </div>
            </li>
          ))
        }
      </ul>
      <div className={classes['users-footer']}>
        <button className={classes['users-footer__button']} onClick={ getUser }>Show more</button>
      </div>
    </div>
  )
}

export default Users