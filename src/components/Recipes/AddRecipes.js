import React, { useState } from 'react';
import FormModal from '../FormModal';
import { v4 as createId } from 'uuid';

function AddRecipes(props) {
  const [validated, setValidated] = useState(false);

  const [ingredientList, setIngredientList] = useState([]);

  const [recipe, setRecipe] = useState({
    id: '',
    title: '',
    cookingTime: '',
    servings: 0,
    ingredients: [],
  });

  const changeHandler = (event) => {
    const value = event.target.value;
    setRecipe({
      ...recipe,
      [event.target.id]: value,
      ingredients: ingredientList,
    });
  };

  const closeHandler = () => {
    props.onCloseModal();
    setValidated(false);
    setIngredientList([]);
  };

  const onAddIngredient = (ingredients) => {
    setIngredientList((prevList) => {
      return [...prevList, ingredients];
    });
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
      setIngredientList([]);
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
          onAddIngredient={onAddIngredient}
          listOfIngredient={ingredientList}
          isValid={validated}
        />
      )}
    </div>
  );
}

export default AddRecipes;
