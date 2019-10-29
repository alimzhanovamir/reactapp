import React from 'react';
import classes from './Dialogs.module.css';
import Messages from './messages/Messages';
import DialogsItem from './dialogsItem/DialogsItem';

function Dialogs(props) {

  let dialogsElements = props.state.dialogsData.map( dialog => {
    return (
      <li className={classes['dialogs__item']}>
        <DialogsItem
          id={ dialog.id }
          name={ dialog.name }
          messages={ dialog.lastMessage }
          active={true} />
      </li>
    )
  });

  return (
    <div className={classes.dialogs}>

      <ul className={classes['dialogs__list']}>
        { dialogsElements }
      </ul>

      <Messages messagesData={ props.state.messagesData }/>

    </div>
  )
}

export default Dialogs