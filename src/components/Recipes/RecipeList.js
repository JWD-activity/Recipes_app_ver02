import React, { useContext } from 'react';
import classes from './RecipeList.module.css';
import { RecipesContext } from '../../contexts/RecipesContext';
import { SelectedIdContext } from '../../contexts/SelectedIdContext';

// Rendering list of recipes
function RecipeList() {
  console.log('RecipeList render');
  const { recipeList, readRecipe, activeRecipe } = useContext(RecipesContext);
  const { setSelectedId } = useContext(SelectedIdContext);

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
      {recipeList.map((recipe) => (
        <li
          key={recipe.id}
          data-id={recipe.id}
          onClick={clickHandler}
          className={`${classes.li} text-capitalize ${
            activeRecipe && activeRecipe.id === recipe.id ? classes.active : ''
          }`}
        >
          {recipe.title}
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
