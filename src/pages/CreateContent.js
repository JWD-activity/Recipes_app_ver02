import React, { useState } from 'react';
// import FormModal from '../components/FormModal';
import { v4 as createId } from 'uuid';
import FormModal from '../components/FormModal';

function CreateContent(props) {
  console.log('CreateContent render');

  const { modal, onCloseModal, onAddRecipe, setNewRecipe, mode } = props;

  const [ingredientList, setIngredientList] = useState([]);

  const [recipe, setRecipe] = useState({
    id: '',
    title: '',
    cookingTime: '',
    servings: 0,
    ingredients: [],
  });

  // const deleteHandler = (event) => {
  //   let index = event.target.dataset.index;
  //   const data = ingredientList;

  //   data.splice(index, 1);
  //   setIngredientList(data.filter((item) => item));
  // };

  const deleteIngredientHandler = (event) => {
    const index = event.target.dataset.index;
    const data = ingredientList;
    data.splice(index, 1);
    setIngredientList(data.filter((ingredient) => ingredient));
  };

  const changeHandler = (event) => {
    const value = event.target.value;
    setRecipe({
      ...recipe,
      [event.target.id]: value,
      ingredients: ingredientList,
    });
  };

  const closeHandler = () => {
    onCloseModal();
    // setValidated(false);
    // setIngredientList([]);
  };

  // const onAddIngredient = (event) => {
  //   const value = event.target.value;
  //   setIngredientList((prevList) => {
  //     return [...prevList, value];
  //   });
  // };

  // const enterKeyPressHandler = (event) => {
  // console.log(event);
  // if (event.target.value.trim().length !== 0) {
  // event.preventDefault();
  // const id = createId();
  // onAddIngredient(event, id);
  // }
  // };

  const addRecipeHandler = (values) => {
    // const { _title, _cookingTime, _servings, _ingredients } = values;
    const _id = createId();
    setIngredientList(values.modeingredients);
    onAddRecipe(values, (values.id = _id));
    onCloseModal();

    // {
    //   id: _id,
    //   title: _title,
    //   cookingTime: _cookingTime,
    //   servings: _servings,
    //   // ingredients: _ingredients,
    // });
    // setIngredientList([]);

    // onAddRecipe(recipe, (recipe.id = id));
    // event.preventDefault();
    // const form = event.currentTarget;

    // if (form.checkValidity() === false) {
    // event.preventDefault();
    // event.stopPropagation();
    // setValidated(true);
    // } else {
    console.log('VALUEW', recipe);
    // onAddRecipe(recipe, (recipe.id = id));
    // setIngredientList([]);
    // onCloseModal();
    // }
  };

  return (
    <div>
      {modal && (
        <FormModal
          mode={mode}
          onClose={closeHandler}
          submitHandler={addRecipeHandler}
          // isValid={validated}
          // changeHandler={changeHandler}
          // enterHandler={enterKeyPressHandler}
          // deleteHandler={deleteIngredientHandler}
          // onAddIngredient={onAddIngredient}
          // listOfIngredient={ingredientList}
          // isValid={validated}
        />
      )}
    </div>
  );
}

export default CreateContent;
