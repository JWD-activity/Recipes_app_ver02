import React from 'react';
import classes from './RecipeList.module.css';

function RecipeList(props) {
  console.log('list: ', props.isActive);
  return (
    <ul className={classes.ul}>
      {props.recipes.map((recipe) => (
        <li
          key={recipe.id}
          data-id={recipe.id}
          className={`${classes.li} text-capitalize ${
            props.isActive && props.isActive === recipe.id ? classes.active : ''
          }`}
          onClick={props.onClick}
        >
          {recipe.title}
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
