import React, { useState, useEffect } from 'react';
import classes from './Main.module.css';
import RecipeList from '../components/Recipes/RecipeList';
import RecipeDetail from '../components/Recipes/RecipeDetail';

function Main(props) {
  const [selectedRecipe, setSelectedRecipe] = useState('');

  const recipeClickHandler = (event) => {
    setSelectedRecipe(event.target.dataset.id);
    // console.log(selectedRecipe);
  };

  const activeRecipeHandler = (recipes) => {
    return (
      <RecipeDetail
        recipes={recipes}
        clickedRecipe={selectedRecipe ?? ''}
        isActive={activeRecipeHandler}
      />
    );
  };

  // const activeInfo = (recipes) => {
  //   <RecipeList recipes={recipes} onClick={recipeClickHandler} />;
  // };
  // const activeRecipeHandler = (id) => {
  //   setSelectedRecipe(id);
  // };
  useEffect(() => {
    activeRecipeHandler(props.recipes);
  }, [selectedRecipe]);

  console.log(selectedRecipe);
  return (
    <main className='row'>
      <div className='recipe col-sm-12 col-md-6 col-lg-5'>
        {/* {activeInfo(props.recipes)} */}
        <RecipeList recipes={props.recipes} onClick={recipeClickHandler} />
      </div>
      <div className='recipe col-sm-12 col-md-6 col-lg-7'>
        {activeRecipeHandler(props.recipes)}
      </div>
    </main>
  );
}

export default Main;
