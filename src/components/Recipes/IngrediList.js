import React from 'react';

function IngrediList(props) {
  let list = props.listOfIngredient;

  return list.length !== 0
    ? list.map((ingredient) => (
        <li
          key={ingredient}
          data-id={ingredient}
          className={`${props.className ?? ''}`}
          onClick={props.deleteHandler}
        >
          {ingredient}
          {props.icon && <i data-id={ingredient} className={props.icon} />}
        </li>
      ))
    : '';
}

export default IngrediList;
