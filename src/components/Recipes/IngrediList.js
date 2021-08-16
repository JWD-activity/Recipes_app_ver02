import React from 'react';
import classes from './IngrediList.module.css';

function IngrediList(props) {
  let list = props.listOfIngredient;
  let count = 0;
  return list.length !== 0
    ? list.map((ingredient) => (
        <li
          key={count++}
          data-id={count++}
          className={`${props.className ?? ''} ${classes.li}`}
          // onClick={props.deleteHandler}
        >
          {ingredient}
          {props.icon && <i className={props.icon} />}
        </li>
      ))
    : '';
}

export default IngrediList;
