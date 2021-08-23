import React from 'react';
import RecipeList from '../components/Recipes/RecipeList';
import RecipeDetail from '../components/Recipes/RecipeDetail';

function ReadContent(props) {
  console.log('ReadContent render');
  const { recipeList, onRecipeClick, selectedRecipeId, readRecipe } = props;

  const data = readRecipe(selectedRecipeId);
  const [recipe] = data;
  //recipe is single recipeobject
  console.log('RECIPE', recipe);
  const recipeClickHandler = (event) => {
    onRecipeClick(event.target.dataset.id);
  };

  return (
    <main className='row'>
      <div className='recipe col-sm-12 col-md-6 col-lg-5'>
        <RecipeList
          recipeList={recipeList}
          onClick={recipeClickHandler}
          isActive={recipe ?? ''}
        />
      </div>
      <div className='recipe col-sm-12 col-md-6 col-lg-7'>
        <RecipeDetail recipe={recipe} />
      </div>
    </main>
  );
}

export default ReadContent;
