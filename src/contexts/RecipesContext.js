import React, { useState, createContext } from 'react';

export const RecipesContext = createContext();

const RecipesContextProvider = (props) => {
  const [recipeList, setRecipeList] = useState([
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
  ]);

  const [activeRecipe, setActiveRecipe] = useState();

  // Render detail of selected recipe
  const readRecipe = (id) => {
    recipeList.filter((recipe) => {
      if (recipe.id === id) setActiveRecipe(recipe);
    });
  };

  // Add a new recipe handler
  const addRecipe = (recipe) => {
    setRecipeList((prevRecipeList) => {
      return [recipe, ...prevRecipeList];
    });
  };

  // Updated recipe handler
  const updateRecipe = (recipe, id) => {
    const { title, cookingTime, servings, ingredients } = recipe;
    setActiveRecipe(recipe, (recipe.id = id));

    const updatedRecipe = recipeList.map((recipe) =>
      recipe.id === id
        ? {
            id: recipe.id,
            title: title,
            cookingTime: cookingTime,
            servings: servings,
            ingredients: ingredients,
          }
        : recipe
    );
    setRecipeList(updatedRecipe);
  };

  // Delete a selected recipe handler
  const deleteRecipe = (id) => {
    var recipes = [...recipeList];

    // Find selected recipe id then delete it from array
    const index = recipes.find((recipe, index) => {
      if (recipe.id === id) return index;
    });
    recipes.splice(index, 1);

    // Save remaining recipes
    setRecipeList(recipes);
    // Reset activeRecipe;
    setActiveRecipe();

    alert('The recipe has been deleted successfully!');
  };

  return (
    <RecipesContext.Provider
      value={{
        recipeList,
        activeRecipe,
        readRecipe,
        addRecipe,
        updateRecipe,
        deleteRecipe,
        setActiveRecipe,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
