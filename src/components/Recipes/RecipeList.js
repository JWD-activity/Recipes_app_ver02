import React, { useContext } from 'react';
import classes from './RecipeList.module.css';
import { RecipesContext } from '../../contexts/RecipesContext';
import { SelectedIdContext } from '../../contexts/SelectedIdContext';
import RecipeName from './RecipeName';

import { RECIPE_PER_PAGE } from '../../utils/constants';

// Rendering list of recipes
function RecipeList({ page }) {
  console.log('RecipeList render');
  const { recipeList, readRecipe, activeRecipe } = useContext(RecipesContext);
  const { setSelectedId } = useContext(SelectedIdContext);
  const startIndex = (page - 1) * RECIPE_PER_PAGE;

  const selectedList = recipeList.slice(
    startIndex,
    startIndex + RECIPE_PER_PAGE
  );

  // When the list of recipes is clicked shows recipe details
  const clickHandler = (event) => {
    setSelectedId(event.target.dataset.id);
    readRecipe(event.target.dataset.id);
  };

  return (
    <ul className={classes.ul}>
      <p className={classes.p}>
        <i className='fas fa-arrow-circle-down me-2' />
        Select a recipe to check the details.
      </p>
      {selectedList.map((recipe) => (
        <RecipeName
          key={recipe.id}
          recipeId={recipe.id}
          name={recipe.title}
          clickHandler={clickHandler}
        />
      ))}
    </ul>
  );
}

export default RecipeList;
