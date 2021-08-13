import React from 'react';
import classes from './Button.module.css';

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${classes.fill} ${props.className ?? ''}`}
    >
      {props.icon && <i className={`${props.icon} ${classes.icon}`}></i>}
      {props.children}
    </button>
  );
}

export default Button;
