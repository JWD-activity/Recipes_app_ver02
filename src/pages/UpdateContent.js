import React from 'react';
import UpdateForm from '../components/UpdateForm';

function UpdateContent(props) {
  console.log('UpdateContent render');
  const { onCloseModal, recipeList, onUpdate, selectedRecipeId, readRecipe } =
    props;

  console.log('updaterecip: ');

  return (
    <>
      <UpdateForm
        onClose={onCloseModal}
        onUpdate={onUpdate}
        recipeList={recipeList}
        selectedRecipeId={selectedRecipeId}
        readRecipe={readRecipe}
      />
    </>
  );
}

export default UpdateContent;
