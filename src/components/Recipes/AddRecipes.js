import React, { useState } from 'react';
import FormModal from '../FormModal';
import { v4 as createId } from 'uuid';

function AddRecipes(props) {
  const [validated, setValidated] = useState(false);
  const [recipe, setRecipe] = useState({
    id: '',
    title: '',
    cookingTime: '',
    servings: 0,
    ingredients: '',
  });

  const changeHandler = (event) => {
    const value = event.target.value;
    setRecipe({ ...recipe, [event.target.id]: value });
  };

  const closeHandler = () => {
    props.onCloseModal();
    setValidated(false);
  };

  const addRecipeHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      const id = createId();
      props.onAddRecipe(recipe, (recipe.id = id));
      console.log(props.list);
      closeHandler();
    }
  };

  return (
    <div>
      {props.modal && (
        <FormModal
          onClose={closeHandler}
          submitHandler={addRecipeHandler}
          changeHandler={changeHandler}
          isValid={validated}
        />
      )}
    </div>
  );
}

export default AddRecipes;
