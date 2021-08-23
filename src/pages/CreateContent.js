import React from 'react';
import { v4 as createId } from 'uuid';
import FormModal from '../components/FormModal';

function CreateContent(props) {
  console.log('CreateContent render');

  const { mode, modal, onCloseModal, onAddRecipe, setMode } = props;

  const addRecipeHandler = (values) => {
    const _id = createId();
    onAddRecipe(values, (values.id = _id));
    onCloseModal();
    setMode('read');
  };

  return (
    <>
      {modal && (
        <FormModal
          mode={mode}
          onClose={onCloseModal}
          submitHandler={addRecipeHandler}
        />
      )}
    </>
  );
}

export default CreateContent;
