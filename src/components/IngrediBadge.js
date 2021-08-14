import React from 'react';
import classes from './IngrediBadge.module.css';

function IngrediBadge(props) {
  return (
    <li className={`${props.className ?? ''} ${classes.li}`}>
      <span>{props.children}</span>
      <i className='fas fa-times'></i>
    </li>
  );
}

export default IngrediBadge;
