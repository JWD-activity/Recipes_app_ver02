import React, { useState, useReducer, createContext, useEffect } from 'react';
import { recipeReducer } from '../reducers/recipeReducer';
import { INIT_RECIPES } from '../utils/constants';

export const RecipesContext = createContext();

const RecipesContextProvider = ({ setMode, children }) => {
  const [recipeList, dispatchRecipeList] = useReducer(recipeReducer, [], () => {
    const localData = localStorage.getItem('recipes');
    return localData ? JSON.parse(localData) : INIT_RECIPES;
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
