import React from 'react';
import classes from './IngrediBadge.module.css';

function IngrediBadge(props) {
  return (
    <li className={`${props.className ?? ''} ${classes.li}`}>
      {props.children}
    </li>
  );
}

export default IngrediBadge;
