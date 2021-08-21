import React from 'react';
import UpdateForm from '../components/UpdateForm';

function UpdateContent(props) {
  console.log('UpdateContent render');
  const { onCloseModal, activeRecipe, deleteIngredient, ingredients } = props;
  console.log('updaterecip: ', activeRecipe);

  return (
    <>
      <UpdateForm
        onClose={onCloseModal}
        activeRecipe={activeRecipe}
        deleteIngredient={deleteIngredient}
        ingredientList={ingredients}
      />
    </>
  );
}

export default UpdateContent;
