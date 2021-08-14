import React from 'react';

function IngrediList(props) {
  return props.listOfIngredient.length !== 0
    ? props.listOfIngredient.map((ingredient, index) => (
        <li
          key={index}
          data-index={index}
          className={`${props.className ?? ''}`}
          onClick={props.deleteHandler}
        >
          {ingredient}
          {props.icon && <i className={props.icon} />}
        </li>
      ))
    : '';
}

export default IngrediList;
