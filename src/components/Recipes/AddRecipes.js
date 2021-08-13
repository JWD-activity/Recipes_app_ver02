import React, { useState } from 'react';
import FormModal from '../FormModal';
function AddRecipes(props) {
  const [recipe, setRecipe] = useState({
    title: '',
    cookingTime: '',
    servings: 0,
    ingredients: '',
  });

  const [validated, setValidated] = useState(false);

  const changeHandler = (event) => {
    const value = event.target.value;
    setRecipe({ ...recipe, [event.target.id]: value });
  };
  const addRecipeHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (validated) {
      props.onAddRecipe(recipe);
      console.log(props.list);
    }
  };
  return (
    <div>
      {props.modal && (
        <FormModal
          onClose={props.onClose}
          submitHandler={addRecipeHandler}
          changeHandler={changeHandler}
          isValid={validated}
        />
      )}
    </div>
  );
}

export default AddRecipes;
