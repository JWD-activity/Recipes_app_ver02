import React from 'react';

function IngrediList(props) {
  return props.listOfIngredient.length !== 0
    ? props.listOfIngredient.map((ingredient) => (
        <li
          key={ingredient.id}
          data-index={ingredient.id}
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
