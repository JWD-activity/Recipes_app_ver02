import React from 'react';
import classes from './Button.module.css';

function Button(props) {
  return (
    <button className={`${classes['fill']} ${classes.button}`}>
      {props.icon && <i className={`${props.icon} ${classes['icon']} `}></i>}
      {props.children}
    </button>
  );
}

export default Button;
