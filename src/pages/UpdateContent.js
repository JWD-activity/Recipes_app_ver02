import React from 'react';
import UpdateForm from '../components/UpdateForm';

function UpdateContent(props) {
  console.log('UpdateContent render');
  const { modal, onCloseModal, activeRecipe, mode } = props;
  console.log('updaterecip: ', activeRecipe);
  return (
    <>
      <UpdateForm
        mode={mode}
        onClose={onCloseModal}
        activeRecipe={activeRecipe}
      />
    </>
  );
}

export default UpdateContent;
