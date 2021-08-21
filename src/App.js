import React, { useState } from 'react';
import './App.css';
import Header from './UI/Header';
import Footer from './UI/Footer';
import { v4 as createId } from 'uuid';
// import Main from './UI/Main';
// import AddRecipes from './components/Recipes/AddRecipes';
import Welcome from './pages/WelcomeContent';
import ReadContent from './pages/ReadContent';
import DeleteContent from './pages/DeleteContent';
import UpdateContent from './pages/UpdateContent';
import CreateContent from './pages/CreateContent';

function App() {
  console.log('App render');
  const [mode, setMode] = useState('read');
  const [recipeList, setRecipeList] = useState([
    {
      id: 1,
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
      id: 2,
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

  const [ingredients, setIngredients] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    id: '',
    title: '',
    cookingTime: '',
    servings: 1,
    ingredients: ingredients,
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(0);
  // const [activeRecipe, setActiveRecipe] = useState({});

  const addNewRecipeHandler = (recipe) => {
    const id = createId();
    console.log('new:', recipe);
    setRecipeList((prevRecipeList) => {
      return [recipe, ...prevRecipeList];
    });
  };

  const deleteRecipeHanlder = () => {
    if (
      window.confirm(
        'Are you sure want to delete the recipe? If you delete the recipe, you will permanently lose your selected recipe.'
      )
    ) {
      var recipes = [...recipeList];
      const index = recipes.find((recipe, index) => {
        if (recipe.id === selectedRecipeId) return index;
      });
      recipes.splice(index, 1);
      setRecipeList(recipes);
      setMode('read');
      alert('The recipe has been deleted successfully!');
    }
  };

  const updateRecipeHandler = (recipe) => {
    console.log('gettt', recipe);
    setRecipeList(recipe);
    const updatedRecipe = readRecipe(selectedRecipeId);
    // setActiveRecipe(...updatedRecipe);
    // const result = getActiveRecipe(selectedRecipe);
    console.log('after', updatedRecipe);
    setMode('read');
  };

  // const updateRecipeHandler = (event) => {
  //   event.preventDefault();
  //   const updatedRecipe = recipeList.map((recipe) =>
  //     recipe.id === activeRecipe.id
  //       ? {
  //           id: id,
  //           title: updatedTitle,
  //           cookingTime: updatedTime,
  //           servings: updatedServings,
  //           ingredients: updatedIngredients,
  //         }
  //       : recipe
  //   );

  //   console.log('updatedForm: ', updatedRecipe);
  // };
  // const deleteIngredientHandler = (event) => {
  //   const index = event.target.dataset.index;
  //   const getRecipe = readRecipe(selectedRecipeId);
  //   // data.splice(index, 1);
  //   // setIngredients(data.filter((ingredient) => ingredient));
  //   console.log('ing', getRecipe.ingredients);
  // };

  const closeModalHanlder = () => {
    setMode('read');
    setShowModal(false);
  };

  const modalOpenHandler = () => {
    setMode('create');
    setShowModal(true);
  };

  const updateModalOpenHandler = () => {
    setMode('update');
    setShowModal(true);
  };

  const readRecipe = (id) => {
    console.log('read:', id);
    const getRecipe = recipeList.filter((recipe) => {
      if (recipe.id === id) return recipe;
    });
    return getRecipe;
  };

  const recipClickHandler = (id) => {
    setSelectedRecipeId(id);
    // const recipe = readRecipe(id);
    // setActiveRecipe(...recipe);
  };

  const isEmptyRecipe = (recipe) => {
    return Object.keys(recipe).length === 0 && recipe.constructor === Object;
  };

  return (
    <div className='app container'>
      <Header onClick={modalOpenHandler} />
      {mode === 'welcome' ? (
        <Welcome />
      ) : mode === 'read' ? (
        <ReadContent
          recipeList={recipeList}
          onRecipeClick={recipClickHandler}
          selectedRecipeId={selectedRecipeId}
          readRecipe={readRecipe}
        />
      ) : mode === 'create' ? (
        <CreateContent
          modal={showModal}
          onCloseModal={closeModalHanlder}
          onAddRecipe={addNewRecipeHandler}
          setNewRecipe={setNewRecipe}
          // selectedRecipe={selectedRecipe}
          // readRecipe={readRecipe}
          // list={recipeList}
        />
      ) : mode === 'update' ? (
        <UpdateContent
          modal={showModal}
          onCloseModal={closeModalHanlder}
          ingredients={ingredients}
          recipeList={recipeList}
          onUpdate={updateRecipeHandler}
          selectedRecipeId={selectedRecipeId}
          readRecipe={readRecipe}
        />
      ) : mode === 'delete' ? (
        deleteRecipeHanlder()
      ) : (
        ''
      )}
      <Footer
        // activeRecipe={activeRecipe}
        checkEmptyRecipe={isEmptyRecipe}
        selectedRecipeId={selectedRecipeId}
        onUpdate={updateModalOpenHandler}
        setMode={setMode}
      />
    </div>
  );
}

export default App;
