import React from 'react';
import classes from './IngrediList.module.css';

function IngrediList(props) {
  let list = props.listOfIngredient;
  console.log('LIST', list);
  let count = 0;
  const deleteHandler = (event) => {
    props.deleteHandler(event.target.dataset.index);
  };
  return (
    <>
      {list.length > 0
        ? list.map((ingredient, index) => (
            <li
              // key={count++}
              // data-index={count}
              key={index}
              data-index={index}
              className={`${classes.li} ${props.className ?? ''}`}
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
