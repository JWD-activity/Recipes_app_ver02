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
          {
            id: '59d0208e-0492',
            title: 'Potato Salad',
            cookingTime: 10,
            servings: 6,
            ingredients: [
              '3 lb. gold potatoes, chopped',
              'salt',
              '1 1/2 cup. mayonnaise',
              '1 small red onion, finely chopped',
              '1 tbsp. Dijon mustard',
              '1 tbsp. lemon juice',
              '1/4 cup. chopped pickles',
              '1/4 cup. finely chopped chives',
              'Freshly ground black pepper',
            ],
          },
          {
            id: '59d0208e-0493',
            title: 'Garlic Pizza',
            cookingTime: 20,
            servings: 4,
            ingredients: [
              '3/4 cup butter',
              '1 tbs garlic crushed',
              '1 pinch chives',
              '2 cups tasty cheese grated',
              '2 tbs parmesan cheese grated',
              'olive oil',
              'dough',
            ],
          },
          {
            id: '59d0208e-0494',
            title: 'Pumpkin soup',
            cookingTime: 40,
            servings: 6,
            ingredients: [
              '2 tbsp olive oil',
              '1 onion, finely chopped',
              '1 leek, white part only, finely sliced',
              '1 garlic clove, crushed',
              '1/2 tsp ground coriander',
              '1 tsp ground cumin',
              '1kg peeled pumpkin, diced',
              '1 large potato, peeled, diced',
              '1L Massel chicken style liquid stock or vegetable liquid stock',
              '1/2 cup (125ml) thin cream',
            ],
          },
          {
            id: '59d0208e-0495',
            title: 'Green soup',
            cookingTime: 40,
            servings: 6,
            ingredients: [
              '2 tbsp olive oil',
              '1 onion, finely chopped',
              '1 leek, white part only, finely sliced',
              '1 garlic clove, crushed',
              '1/2 tsp ground coriander',
              '1 tsp ground cumin',
              '1kg peeled pumpkin, diced',
              '1 large potato, peeled, diced',
              '1L Massel chicken style liquid stock or vegetable liquid stock',
              '1/2 cup (125ml) thin cream',
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
