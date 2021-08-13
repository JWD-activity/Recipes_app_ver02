import React from 'react';
import classes from './RecipeList.module.css';

function RecipeList(props) {
  return (
    <ul className={classes.ul}>
      {props.recipes.map((recipe) => (
        <li key={recipe.id} className={`${classes.li} text-capitalize`}>
          {recipe.title}
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
