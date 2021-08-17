import React from 'react';
import classes from './RecipeDetail.module.css';
import IngrediList from '../Recipes/IngrediList';

function RecipeDetail(props) {
  const id = props.clickedRecipe;
  const recipe = props.recipes.find((recipe) => recipe.id === id);
  // recipe && props.setActive(recipe);
  // recipe ?? console.log('detail: ', recipe);
  // console.log('detail: ', recipe);

  const calcCookingTime = (time) => {
    if (time >= 60) {
      let hours = Math.floor(time / 60);
      var min = time % 60;
      return hours + 'hr ' + min + 'mins';
    } else return time + 'mins';
  };

  const renderDetailInfo = (recipe) => {
    // recipe && props.setActive(recipe);
    if (recipe) props.setActive(recipe);

    return recipe ? (
      <ul key={recipe.id} className={`row ${classes.ul}`}>
        <li>{recipe.title}</li>
        <li className={'col'}>
          <i className='far fa-clock'></i>{' '}
          {calcCookingTime(+recipe.cookingTime)}
        </li>
        <li className={'col'}>
          <i className='fas fa-user-friends'></i>
          {recipe.servings} servings
        </li>
        <li>Ingredients:</li>
        {<IngrediList listOfIngredient={recipe.ingredients} />}
      </ul>
    ) : (
      ''
    );
  };

  return (
    <>
      {recipe ? renderDetailInfo(recipe) : renderDetailInfo(props.recipes[0])}
    </>
  );
}

export default RecipeDetail;
