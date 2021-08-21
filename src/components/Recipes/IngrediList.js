import React from 'react';

function IngrediList(props) {
  let list = props.listOfIngredient;
  console.log('LIST', list);
  let count = 0;
  return (
    <>
      {list.length > 0
        ? list.map((ingredient) => (
            <li
              key={count++}
              data-index={count}
              className={`${props.className ?? ''}`}
              onClick={props.deleteIngredient}
            >
              {ingredient}
              {props.icon && <i data-index={count} className={props.icon} />}
            </li>
          ))
        : ''}
    </>
  );
}

export default IngrediList;
