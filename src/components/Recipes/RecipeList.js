import React, { useState } from 'react';
import classes from './RecipeList.module.css';

function RecipeList(props) {
  // const recipeFindHandler = (event) => {
  //   console.log(event.target.dataset.id);
  //   // return props.findRecipe();
  // };
  return (
    <ul className={classes.ul}>
      {props.recipes.map((recipe) => (
        <li
          key={recipe.id}
          data-id={recipe.id}
          className={`${classes.li} text-capitalize`}
          onClick={props.onClick}
        >
          {recipe.title}
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
