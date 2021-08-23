import React from 'react';

function IngrediList(props) {
  let list = props.listOfIngredient;
  const deleteHandler = (event) => {
    props.deleteHandler(event.target.dataset.index);
  };
  return (
    <>
      {list.length > 0
        ? list.map((ingredient, index) => (
            <li
              key={index}
              data-index={index}
              className={`${props.className ?? ''}`}
              onClick={deleteHandler}
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
