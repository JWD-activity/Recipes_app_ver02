import React from 'react';
import classes from './RecipeDetail.module.css';
import IngrediList from '../Recipes/IngrediList';

function RecipeDetail(props) {
  console.log('Recipe Detail render');
  const { recipe } = props;
  const calcCookingTime = (time) => {
    if (time >= 60) {
      let hours = Math.floor(time / 60);
      var min = time % 60;
      return min > 0 ? hours + 'hr ' + min + 'mins' : hours + 'hr ';
    } else return time + 'mins';
  };

  const renderDetailInfo = (recipe) => {
    return recipe ? (
      <ul key={recipe.id} className={`row ${classes.ul}`}>
        <li>{recipe.title}</li>
        <li className={'col-md-4 col-sm-3'}>
          <i className='far fa-clock me-2'></i>
          {calcCookingTime(+recipe.cookingTime)}
        </li>
        <li className={'col-md-4 col-sm-3'}>
          <i className='fas fa-user-friends me-2'></i>
          {recipe.servings} servings
        </li>
        <li>Ingredients:</li>
        <ul className={classes.ingredients}>
          {<IngrediList listOfIngredient={recipe.ingredients} />}
        </ul>
      </ul>
    ) : (
      ''
    );
  };

  return <>{renderDetailInfo(recipe)}</>;
}

export default RecipeDetail;
