import React from 'react';

function IngrediList(props) {
  const { listOfIngredient, remove } = props;
  let list = listOfIngredient;
  const onDelete = (event) => {
    remove(event.target.dataset.index);
  };
  return (
    <>
      {list.length > 0
        ? list.map((ingredient, index) => (
            <li
              key={index}
              data-index={index}
              className={`${props.className ?? ''}`}
              onClick={onDelete}
            >
              {ingredient}
              {props.icon && <i data-index={index} className={props.icon} />}
            </li>
          ))
        : ''}
    </>
  );
}

export default IngrediList;
