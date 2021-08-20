import React, { useState } from 'react';
// import classes from '../UI/Main.module.css';
import RecipeList from '../components/Recipes/RecipeList';
import RecipeDetail from '../components/Recipes/RecipeDetail';

function ReadContent(props) {
  const { recipeList, activeRecipe, onRecipeClick } = props;

  const recipeClickHandler = (event) => {
    onRecipeClick(+event.target.dataset.id);

    console.log('click: ', event.target.dataset.id);
    // props.setActive(selectedRecipe);
    // console.log('select: ', selectedRecipe);
  };

  return (
    <main className='row'>
      <div className='recipe col-sm-12 col-md-6 col-lg-5'>
        <RecipeList
          recipeList={recipeList}
          onClick={recipeClickHandler}
          // isActive={props.isActive}
        />
      </div>
      <div className='recipe col-sm-12 col-md-6 col-lg-7'>
        <RecipeDetail
          recipeList={recipeList}
          activeRecipe={activeRecipe ?? ''}
          // clickedRecipe={selectedRecipe ?? ''}
          // setActive={props.setActive}
        />
      </div>
    </main>
  );
}

export default ReadContent;
