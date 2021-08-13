import React from 'react';
import classes from './Main.module.css';
import RecipeList from '../components/Recipes/RecipeList';
import RecipeDetail from '../components/Recipes/RecipeDetail';
function Main(props) {
  return (
    <main className='row'>
      <div className='recipe col-sm-12 col-md-6 col-lg-5'>
        <RecipeList recipes={props.recipes} />
      </div>
      <div className='recipe col-sm-12 col-md-6 col-lg-7'>
        <RecipeDetail recipes={props.recipes} />
      </div>
    </main>
  );
}

export default Main;
