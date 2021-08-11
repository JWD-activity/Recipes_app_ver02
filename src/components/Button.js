import React from 'react';
import classes from './Button.module.css';

function Button(props) {
  return (
    <button className={`${classes['btn']} ${classes['fill']}`}>
      {props.icon && <i className={`${props.icon} `}></i>}
      {props.children}
    </button>
  );
}

export default Button;
