import React from 'react';
import classes from './Message.module.css';

function Message(props) {
  return (
    <div className={classes['message']}>
      <div className={classes['message__header']}>
        <div className={classes['message__name']}>{ props.name }</div>
        <div className={classes['message__date']}>12.12.12</div>
      </div>
      <div className={classes['message__body']}>
        <p>{ props.message }</p>
      </div>
    </div>
  )
}

export default Message