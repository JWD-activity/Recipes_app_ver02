import React from 'react';
import UpdateForm from '../components/UpdateForm';

function UpdateContent(props) {
  console.log('UpdateContent render');
  const {
    onCloseModal,
    activeRecipe,
    deleteIngredient,
    ingredients,
    recipeList,
    onUpdate,
    getActiveRecipe,
    selectedRecipeId,
    readRecipe,
  } = props;

  console.log('updaterecip: ');

  return (
    <>
      <UpdateForm
        onClose={onCloseModal}
        onUpdate={onUpdate}
        activeRecipe={activeRecipe}
        deleteIngredient={deleteIngredient}
        ingredientList={ingredients}
        recipeList={recipeList}
        getActiveRecipe={getActiveRecipe}
        selectedRecipeId={selectedRecipeId}
        readRecipe={readRecipe}
      />
    </>
  );
}

export default UpdateContent;
