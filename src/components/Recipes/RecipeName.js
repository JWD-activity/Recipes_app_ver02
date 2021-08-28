import React, { useContext } from 'react';
import { RecipesContext } from '../../contexts/RecipesContext';
import classes from './RecipeName.module.css';

function RecipeName({ recipeId, name, clickHandler }) {
  const { activeRecipe } = useContext(RecipesContext);

  return (
    <li
      data-id={recipeId}
      onClick={clickHandler}
      className={`${classes.li} text-capitalize ${
        activeRecipe && activeRecipe.id === recipeId ? classes.active : ''
      }`}
    >
      {name}
    </li>
  );
}

export default RecipeName;
