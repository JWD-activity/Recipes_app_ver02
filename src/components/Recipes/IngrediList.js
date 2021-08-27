import React from 'react';

function IngrediList({ icon, remove, className, ingredients }) {
  // When Delete button is clicked on ingredient badge
  const onDelete = (event) => {
    remove(event.target.dataset.index);
  };

  return (
    <>
      {ingredients.length > 0
        ? ingredients.map((ingredient, index) => (
            <li
              key={index}
              data-index={index}
              className={`${className ?? ''}`}
              onClick={onDelete}
            >
              {ingredient}
              {icon && <i data-index={index} className={icon} />}
            </li>
          ))
        : ''}
    </>
  );
}

export default IngrediList;
