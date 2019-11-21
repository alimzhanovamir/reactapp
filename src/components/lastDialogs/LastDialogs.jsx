import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './LastDialogs.module.css';

function LastDialogs(props) {
  
  /*let lastDialogsList = props.state.list.map( ( item, id ) => {
    return (
      <li className={ classes['last-dialogs__item']} key={id}>
        <NavLink className={ classes['last-dialogs__link']} to="/dialogs">
          <div className={ classes['last-dialogs__dialog']}>
            <img className={ classes['last-dialogs__avatar']} src="" alt=""/>
          </div>
          <div className={ classes['last-dialogs__title']}>{ item.name }</div>
        </NavLink>
      </li>
    )
  });*/

  return (
    <div className={ classes['last-dialogs']}>
      <div className={ classes['last-dialogs__header']}>Last dialogs</div>
      <ul className={ classes['last-dialogs__list']}>
        {/*{ lastDialogsList }*/}
        <li className={ classes['last-dialogs__item']}>
          <NavLink className={ classes['last-dialogs__link']} to="/dialogs">
            <div className={ classes['last-dialogs__dialog']}>
              <img className={ classes['last-dialogs__avatar']} src="" alt=""/>
            </div>
            <div className={ classes['last-dialogs__title']}>еще...</div>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default LastDialogs