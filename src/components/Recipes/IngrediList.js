import React from 'react';

function IngrediList(props) {
  let list = props.listOfIngredient;
  let count = 0;
  return list.length !== 0
    ? list.map((ingredient) => (
        <li
          key={count++}
          data-id={ingredient}
          data-index={count}
          className={`${props.className ?? ''}`}
          onClick={props.deleteHandler}
        >
          {ingredient}
          {props.icon && (
            <i data-index={count} data-id={ingredient} className={props.icon} />
          )}
        </li>
      ))
    : '';
}

export default IngrediList;
