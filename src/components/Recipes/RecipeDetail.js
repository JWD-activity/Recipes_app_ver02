import React from 'react';
import classes from './RecipeDetail.module.css';

function RecipeDetail(props) {
  const id = props.clickedRecipe;
  const recipe = props.recipes.find((recipe) => recipe.id === id);

  return (
    <>
      {recipe ? (
        <ul key={recipe.id} className={`row ${classes.ul}`}>
          <li>{recipe.title}</li>
          <li className={'col'}>
            <i className='far fa-clock'></i> {recipe.cookingTime}min
          </li>
          <li className={'col'}>
            <i className='fas fa-user-friends'></i>
            {recipe.servings} servings
          </li>
          <li>Ingredients: {recipe.ingredients}</li>
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

export default RecipeDetail;
