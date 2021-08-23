import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './UI/Header';
import Footer from './UI/Footer';

import Welcome from './pages/WelcomeContent';
import ReadContent from './pages/ReadContent';
import UpdateContent from './pages/UpdateContent';
import CreateContent from './pages/CreateContent';

console.log('First App render');

function App() {
  console.log('App render');
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

  const [mode, setMode] = useState('welcome');
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(0);

  // Load recipes from local storage
  useEffect(() => {
    if (localStorage.getItem('recipes') !== null) {
      const recipes = localStorage.getItem('recipes');
      setRecipeList(JSON.parse(recipes));
      recipeList.length > 0 ? setMode('read') : setMode('welcome');
    }
  }, []);

  // Save recipes to local storage
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipeList));
    console.log('LOG', recipeList.length);
    recipeList.length > 0 ? setMode('read') : setMode('welcome');
  }, [recipeList]);

  // Add a new recipe handler
  const addNewRecipeHandler = (recipe) => {
    console.log('New recipe was added:', recipe);
    setRecipeList((prevRecipeList) => {
      return [recipe, ...prevRecipeList];
    });
    setSelectedRecipeId(recipe.id);
  };

  // Delete a selected recipe handler
  const deleteRecipeHanlder = () => {
    if (
      window.confirm(
        'Are you sure want to delete the recipe? If you delete the recipe, you will permanently lose your selected recipe.'
      )
    ) {
      var recipes = [...recipeList];

      // Find selected recipe id then delete it from array
      const index = recipes.find((recipe, index) => {
        var getIndex;
        if (recipe.id === selectedRecipeId) getIndex = index;
        return getIndex;
      });
      recipes.splice(index, 1);

      // Save remaining recipes
      setRecipeList(recipes);

      // Reset mode and selectedRecipeId
      recipeList.length > 0 ? setMode('read') : setMode('welcome');
      setSelectedRecipeId(0);
      alert('The recipe has been deleted successfully!');
    }
  };

  // Updated recipe handler
  const updateRecipeHandler = (recipe) => {
    setRecipeList(recipe);
    setMode('read');
  };

  // Close modal handler
  const closeModalHanlder = () => {
    recipeList.length > 0 ? setMode('read') : setMode('welcome');
    setShowModal(false);
  };

  // (Add a new recipe) modal open handler
  const createModalOpenHandler = () => {
    setMode('create');
    setShowModal(true);
  };

  // (Update seleted recipe) modal open handler
  const updateModalOpenHandler = () => {
    setMode('update');
    setShowModal(true);
  };

  // Render detail of selected recipe
  const readRecipe = (id) => {
    const getRecipe = recipeList.filter((recipe) => {
      var findRecipe;
      if (recipe.id === id) findRecipe = recipe;
      return findRecipe;
    });
    return getRecipe;
  };

  // Recipe selecte handler (When recipe is clicked from list)
  const recipClickHandler = (id) => {
    setSelectedRecipeId(id);
  };

  return (
    <div className='app container'>
      <Header onClick={createModalOpenHandler} />
      {mode === 'welcome' ? (
        <Welcome />
      ) : mode === 'read' ? (
        <>
          <ReadContent
            mode={mode}
            recipeList={recipeList}
            selectedRecipeId={selectedRecipeId}
            onRecipeClick={recipClickHandler}
            readRecipe={readRecipe}
            className='readContent'
          />
        </>
      ) : mode === 'create' ? (
        <CreateContent
          mode={mode}
          modal={showModal}
          onCloseModal={closeModalHanlder}
          onAddRecipe={addNewRecipeHandler}
          setMode={setMode}
        />
      ) : mode === 'update' ? (
        <UpdateContent
          mode={mode}
          modal={showModal}
          recipeList={recipeList}
          selectedRecipeId={selectedRecipeId}
          onCloseModal={closeModalHanlder}
          onUpdate={updateRecipeHandler}
          readRecipe={readRecipe}
        />
      ) : mode === 'delete' ? (
        deleteRecipeHanlder()
      ) : (
        ''
      )}
      <Footer
        selectedRecipeId={selectedRecipeId}
        onUpdate={updateModalOpenHandler}
        setMode={setMode}
      />
    </div>
  );
}

export default App;
