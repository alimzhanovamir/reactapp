import React from 'react';
import classes from './Dialogs.module.css';
import MessagesContainer from './messages/Messages-container';
import DialogsItem from './dialogsItem/DialogsItem';

function Dialogs(props) {
  // debugger
  let dialogsElements = props.dialogsData.map( ( dialog, key ) => {
    return (
      <li className={classes['dialogs__item']} key={key}>
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

      <MessagesContainer />

    </div>
  )
}

export default Dialogs