// import React, { useState } from 'react';
// import FormModal from '../FormModal';
// import { v4 as createId } from 'uuid';

// function AddRecipes(props) {
//   const [validated, setValidated] = useState(false);
//   const [ingredientList, setIngredientList] = useState([]);
//   const [recipe, setRecipe] = useState({
//     id: '',
//     title: '',
//     cookingTime: '',
//     servings: 0,
//     ingredients: [],
//   });

//   const deleteHandler = (event) => {
//     let index = event.target.dataset.index;
//     const data = ingredientList;

//     data.splice(index, 1);
//     setIngredientList(data.filter((item) => item));
//   };

//   const changeHandler = (event) => {
//     const value = event.target.value;
//     setRecipe({
//       ...recipe,
//       [event.target.id]: value,
//       ingredients: ingredientList,
//     });
//   };

//   const closeHandler = () => {
//     props.onCloseModal();
//     setValidated(false);
//     setIngredientList([]);
//   };

//   const onAddIngredient = (event) => {
//     const value = event.target.value;
//     setIngredientList((prevList) => {
//       return [...prevList, value];
//     });
//   };

//   const enterKeyPressHandler = (event) => {
//     if (event.key === 'Enter' && event.target.value.trim().length !== 0) {
//       event.preventDefault();
//       const id = createId();
//       onAddIngredient(event, id);
//       event.target.value = '';
//     }
//   };

//   const addRecipeHandler = (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//       setValidated(true);
//     } else {
//       const id = createId();
//       props.onAddRecipe(recipe, (recipe.id = id));
//       setIngredientList([]);
//       closeHandler();
//       console.log(recipe);
//     }
//   };

//   return (
//     <div>
//       {props.modal && (
//         <FormModal
//           onClose={closeHandler}
//           submitHandler={addRecipeHandler}
//           changeHandler={changeHandler}
//           enterHandler={enterKeyPressHandler}
//           deleteHandler={deleteHandler}
//           onAddIngredient={onAddIngredient}
//           listOfIngredient={ingredientList}
//           isValid={validated}
//         />
//       )}
//     </div>
//   );
// }

// export default AddRecipes;
