import React from 'react';
import classes from './RecipeList.module.css';

function RecipeList(props) {
  console.log('RecipeList render');
  const { onClick, recipeList, isActive } = props;
  return (
    <ul className={classes.ul}>
      {recipeList.map((recipe) => (
        <li
          key={recipe.id}
          data-id={recipe.id}
          className={`${classes.li} text-capitalize ${
            isActive.id === recipe.id ? classes.active : ''
          }`}
          onClick={onClick}
        >
          {recipe.title}
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
