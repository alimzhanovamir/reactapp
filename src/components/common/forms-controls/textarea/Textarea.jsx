import React from 'react';
import classes from './Textarea.module.css'

export default function Textarea({input, meta, ...props}) {
  console.log(meta);
  let hasError = meta.touched && meta.error;
  return (
    <div className={classes['textarea']}>
      <textarea className={classes['textarea__field']+' '+ (hasError ? classes['error'] : '') } {...input} {...props}/>
      {hasError && <div className={classes['textarea__error']}>{meta.error}</div>}
      
    </div>
  )
}