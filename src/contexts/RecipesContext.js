import React, { useState, useReducer, createContext, useEffect } from 'react';

export const RecipesContext = createContext();
function recipeReducer(state, action) {
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
      const getIndex = state.find((recipe, index) => {
        if (recipe.id === action.id) return index;
      });
      state.splice(getIndex, 1);
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

const RecipesContextProvider = (props) => {
  const [recipeList, dispatchRecipeList] = useReducer(recipeReducer, [], () => {
    const localData = localStorage.getItem('recipes');
    return localData
      ? JSON.parse(localData)
      : [
          {
            id: '59d0208e-0490',
            title: 'Garlic and Green Olives Pasta',
            cookingTime: 15,
            servings: 4,
            ingredients: [
              '12oz. pappardelle or other wide noodle',
              'Kosher salt',
              '¼cup extra-virgin olive oil',
              '8 garlic cloves',
              '1cup finely chopped parsley',
              '1cup pitted Castelvetrano olives',
              'crushed red pepper flakes',
              'unsalted butter',
              '1 cup basil leaves',
              '2tsp. fresh lemon juice',
            ],
          },
          {
            id: '59d0208e-0491',
            title: 'Greek Salad',
            cookingTime: 10,
            servings: 3,
            ingredients: [
              '6 firm ripe tomatoes',
              '3 Lebanese cucumbers',
              '1 red onion, sliced into rings',
              '1 red capsicum, halved, deseeded, coarsely chopped',
              '200g marinated Greek olives',
              '220g marinated feta, coarsely chopped',
              '1 tsp dried Greek oregano',
              '1 tsp salt',
              '125ml (1/2 cup) olive oil',
              '60ml (1/4 cup) white vinegar',
            ],
          },
        ];
  });

  const [activeRecipe, setActiveRecipe] = useState();

  useEffect(() => {
    recipeList.length > 0 ? props.setMode('read') : props.setMode('welcome');
    localStorage.setItem('recipes', JSON.stringify(recipeList));
  }, [recipeList.length, recipeList]);

  // Render detail of selected recipe
  const readRecipe = (id) => {
    recipeList.filter((recipe) => {
      if (recipe.id === id) setActiveRecipe(recipe);
      return recipe;
    });
  };

  return (
    <RecipesContext.Provider
      value={{
        recipeList,
        activeRecipe,
        readRecipe,
        setActiveRecipe,
        dispatchRecipeList,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
