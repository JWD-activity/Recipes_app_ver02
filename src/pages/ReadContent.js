import React, { useContext, useEffect } from 'react';
import RecipeList from '../components/Recipes/RecipeList';
import RecipeDetail from '../components/Recipes/RecipeDetail';
import { RecipesContext } from '../contexts/RecipesContext';

const ReadContent = ({ setMode }) => {
  console.log('ReadContent render');
  const { recipeList } = useContext(RecipesContext);

  useEffect(() => {
    recipeList.length > 0 ? setMode('read') : setMode('welcome');
  }, [recipeList]);

  return (
    <main className='row'>
      <div className='recipe col-sm-12 col-md-6 col-lg-5'>
        <RecipeList />
      </div>
      <section className='recipe col-sm-12 col-md-6 col-lg-7'>
        <RecipeDetail />
      </section>
    </main>
  );
};

export default ReadContent;
