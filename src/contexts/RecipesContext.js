import React, { useState, useReducer, createContext, useEffect } from 'react';
import { recipeReducer } from '../reducers/recipeReducer';

export const RecipesContext = createContext();

const RecipesContextProvider = ({ setMode, children }) => {
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

  // Store data to localStorage when the list of recipes is changed
  useEffect(() => {
    settingMode(recipeList.length);
    localStorage.setItem('recipes', JSON.stringify(recipeList));
  }, [recipeList.length, recipeList]);

  // Find a selected recipe then set as active and displays detail on the screen
  const readRecipe = (id) => {
    recipeList.filter((recipe) => {
      if (recipe.id === id) setActiveRecipe(recipe);
      return recipe;
    });
  };

  // Check currently stored recipe, if it is empty, change to welcome mode
  const settingMode = (recipeLength) => {
    recipeLength > 0 ? setMode('read') : setMode('welcome');
  };

  return (
    <RecipesContext.Provider
      value={{
        recipeList,
        activeRecipe,
        readRecipe,
        setActiveRecipe,
        dispatchRecipeList,
        settingMode,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
