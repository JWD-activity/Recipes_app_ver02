export function recipeReducer(state, action) {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        {
          id: action.recipe.id,
          title: action.recipe.title,
          cookingTime: action.recipe.cookingTime,
          servings: action.recipe.servings,
          ingredients: action.recipe.ingredients,
        },
        ...state,
      ];

    case 'REMOVE_RECIPE':
      let foundIndex;
      state.find((recipe, index) => {
        if (recipe.id === action.id) {
          foundIndex = index;
        }
      });
      state.splice(foundIndex, 1);
      return state;

    case 'UPDATE_RECIPE':
      return state.map((recipe) =>
        recipe.id === action.id
          ? {
              id: recipe.id,
              title: action.updatedRecipe.title,
              cookingTime: action.updatedRecipe.cookingTime,
              servings: action.updatedRecipe.servings,
              ingredients: action.updatedRecipe.ingredients,
            }
          : recipe
      );

    default:
      return state;
  }
}
