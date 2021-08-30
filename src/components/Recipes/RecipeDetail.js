import React, { useContext } from 'react';
import { RecipesContext } from '../../contexts/RecipesContext';
import { SelectedIdContext } from '../../contexts/SelectedIdContext';
import { ModalContext } from '../../contexts/ModalContext';
import Button from '../../components/Button';
import classes from './RecipeDetail.module.css';

// Rendering detail of a seleted recipe
function RecipeDetail({ setMode }) {
  console.log('Recipe Detail render');

  const {
    activeRecipe: recipe,
    dispatchRecipeList,
    setActiveRecipe,
  } = useContext(RecipesContext);
  const { selectedRecipeId, setSelectedId } = useContext(SelectedIdContext);
  const { updateModalOpen } = useContext(ModalContext);

  // Formatting cooking time
  const calcCookingTime = (time) => {
    if (time >= 60) {
      let hours = Math.floor(time / 60);
      var min = time % 60;
      return min > 0 ? hours + 'hr ' + min + 'mins' : hours + 'hr ';
    } else return time + 'mins';
  };
  // When delete button is clicked
  const deleteClickHandler = () => {
    if (
      window.confirm(
        'Are you sure want to delete the recipe? If you delete the recipe, you will permanently lose your selected recipe.'
      )
    ) {
      dispatchRecipeList({
        type: 'REMOVE_RECIPE',
        id: selectedRecipeId,
      });
      setSelectedId(0);
      setActiveRecipe();
      alert('The recipe has been deleted successfully!');
    }
  };

  // When update button is clicked
  const updateClickHandler = () => {
    updateModalOpen();
    setMode('update');
  };

  return (
    <>
      {recipe ? (
        <>
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
          {selectedRecipeId !== 0 && (
            <div className='d-flex justify-content-end mb-5'>
              <Button className={classes.button} onClick={updateClickHandler}>
                Update
              </Button>
              <Button className={classes.button} onClick={deleteClickHandler}>
                Delete
              </Button>
            </div>
          )}
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default RecipeDetail;
