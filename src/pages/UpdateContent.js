import React from 'react';
import FormModal from '../components/FormModal';

function UpdateContent(props) {
  console.log('UpdateContent render');
  const {
    mode,
    modal,
    onCloseModal,
    recipeList,
    onUpdate,
    selectedRecipeId,
    readRecipe,
  } = props;

  return (
    <>
      {modal && (
        <FormModal
          mode={mode}
          onClose={onCloseModal}
          onUpdate={onUpdate}
          recipeList={recipeList}
          selectedRecipeId={selectedRecipeId}
          readRecipe={readRecipe}
        />
      )}
    </>
  );
}

export default UpdateContent;