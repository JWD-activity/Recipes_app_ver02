import React from 'react';

function IngrediBadge(props) {
  return props.listOfIngredient.length !== 0
    ? props.listOfIngredient.map((ingredient, index) => (
        <li key={index} className={`${props.className ?? ''}`}>
          <span>{ingredient}</span>
          {props.icon && <i className={props.icon} />}
        </li>
      ))
    : '';
}

export default IngrediBadge;
