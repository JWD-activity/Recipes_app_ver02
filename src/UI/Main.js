import React, { useState } from 'react';
import classes from './Main.module.css';
import RecipeList from '../components/Recipes/RecipeList';
import RecipeDetail from '../components/Recipes/RecipeDetail';

function Main(props) {
  const [selectedRecipe, setSelectedRecipe] = useState('');

  const recipeClickHandler = (event) => {
    setSelectedRecipe(event.target.dataset.id);
  };

  return (
    <main className='row'>
      <div className='recipe col-sm-12 col-md-6 col-lg-5'>
        <RecipeList recipes={props.recipes} onClick={recipeClickHandler} />
      </div>
      <div className='recipe col-sm-12 col-md-6 col-lg-7'>
        <RecipeDetail
          recipes={props.recipes}
          clickedRecipe={selectedRecipe ?? ''}
        />
      </div>
    </main>
  );
}

export default Main;
