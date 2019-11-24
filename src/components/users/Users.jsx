import React from 'react';
import classes from './Users.module.css';

function Users(props) {
 return (
   <div className={classes['users']}>

     <div  className={classes['users-paginator']}>
       <div>Page size: {props.pageSize}</div>
       <div>Total count: {props.totalUsersCount}</div>
       <ul className={classes['users-paginator__list']}>
         {
           props.pages.map( ( pageNumber) => {
             return <li key={pageNumber} className={classes['users-paginator__item']}>
                  <span
                      className={`
                      ${classes['users-paginator__link']} 
                      ${props.currentPage === pageNumber && classes['active']}`
                      }
                      onClick={() => { props.onPageChanged(pageNumber) }}
                  >
                    {pageNumber}
                  </span>
             </li>
           })
         }
       </ul>
     </div>

     <div className={`${classes['users-list-container']} ${props.isFetching ? classes['fetching'] : '' }`}>
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
                   { user.followed
                       ? <button className={classes['user__follow-button']} onClick={ () => {props.unfollow(user.id)} }>followed</button>
                       : <button className={classes['user__follow-button']} onClick={ () => {props.follow(user.id)} }>follow</button>
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