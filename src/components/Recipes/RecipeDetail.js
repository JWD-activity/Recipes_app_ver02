import React, { useContext } from 'react';
import classes from './RecipeDetail.module.css';
import { RecipesContext } from '../../contexts/RecipesContext';

// Rendering detail of a seleted recipe
function RecipeDetail() {
  console.log('Recipe Detail render');
  const { activeRecipe: recipe } = useContext(RecipesContext);

  // Formatting cooking time
  const calcCookingTime = (time) => {
    if (time >= 60) {
      let hours = Math.floor(time / 60);
      var min = time % 60;
      return min > 0 ? hours + 'hr ' + min + 'mins' : hours + 'hr ';
    } else return time + 'mins';
  };

  return (
    <>
      {recipe ? (
        <ul key={recipe.id} className={`row ${classes.ul}`}>
          <li>
            <h2>{recipe.title}</h2>
          </li>
          <li className={'col-md-5 col-sm-3'}>
            <i className='far fa-clock me-2'></i>
            {calcCookingTime(+recipe.cookingTime)}
          </li>
          <li className={'col-md-4 col-sm-3'}>
            <i className='fas fa-user-friends me-2'></i>
            {recipe.servings} servings
          </li>
          <li>Ingredients:</li>
          <ul className={classes.ingredients}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} data-index={index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

export default RecipeDetail;
