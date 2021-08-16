import React, { useEffect } from 'react';
import classes from './IngrediList.module.css';

function IngrediList(props) {
  // let count = 0;
  let list = props.listOfIngredient;

  return list.length !== 0
    ? list.map((ingredient) => (
        <li
          key={ingredient}
          data-id={ingredient}
          className={`${props.className ?? ''} ${classes.li}`}
          onClick={props.deleteHandler}
        >
          {ingredient}
          {props.icon && <i className={props.icon} />}
        </li>
      ))
    : '';
}

export default IngrediList;
