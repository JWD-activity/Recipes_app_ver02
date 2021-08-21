import React, { useState } from 'react';
import './App.css';
import Header from './UI/Header';
import Footer from './UI/Footer';
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
  const [newRecipe, setNewRecipe] = useState({
    id: '',
    title: '',
    cookingTime: '',
    servings: 1,
    ingredients: [],
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState('');
  const [activeRecipe, setActiveRecipe] = useState({});

  const addNewRecipeHandler = (recipe) => {
    setRecipeList((prevRecipeList) => {
      return [recipe, ...prevRecipeList];
    });
  };

  const deleteRecipeHanlder = (id) => {
    console.log('dele:', selectedRecipe);
    setMode('delete');
    setRecipeList(deleteSelectedRecipe(selectedRecipe));
    setActiveRecipe({});
    setMode('read');
    // return getRecipe;
  };
  //   activeHandler(recipe);
  // console.log('Main: ', recipe);
  // console.log('Main add active: ', activeRecipe);
  // };

  // const onClickHanlder = () => {
  //   setShowModal(true);
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

  const getActiveRecipe = (id) => {
    const getRecipe = recipeList.filter((recipe) => {
      if (recipe.id === id) return recipe;
    });
    console.log('get', getRecipe);
    return getRecipe;
  };

  const deleteSelectedRecipe = (id) => {
    const getRecipe = recipeList.filter((recipe) => {
      if (recipe.id !== id) return recipe;
    });
    console.log('afterDelete: ', getRecipe);
    return getRecipe;
  };

  const recipClickHandler = (id) => {
    setSelectedRecipe(id);
    const recipe = getActiveRecipe(id);
    setActiveRecipe(...recipe);
    // setActiveRecipe();
  };

  const isEmptyRecipe = (recipe) => {
    return Object.keys(recipe).length === 0 && recipe.constructor === Object;
  };

  // const activeHandler = (recipe) => {
  //   console.log('app: ', recipe);
  //   setActiveRecipe(recipe.id);
  // };
  // const activeHandler = (id) => {
  //   setActiveRecipe(id);
  // };

  return (
    <div className='app container'>
      {/* <AddRecipes
        modal={showModal}
        onCloseModal={closeModalHanlder}
        onAddRecipe={addNewRecipeHandler}
        list={recipeList}
      /> */}
      <Header onClick={modalOpenHandler} />

      {mode === 'welcome' ? (
        <Welcome />
      ) : mode === 'read' ? (
        <ReadContent
          recipeList={recipeList}
          onRecipeClick={recipClickHandler}
          activeRecipe={activeRecipe}
          checkEmptyRecipe={isEmptyRecipe}
        />
      ) : mode === 'create' ? (
        <CreateContent
          modal={showModal}
          onCloseModal={closeModalHanlder}
          mode={mode}
          onAddRecipe={addNewRecipeHandler}
          setNewRecipe={setNewRecipe}
          // list={recipeList}
        />
      ) : mode === 'update' ? (
        <UpdateContent
          modal={showModal}
          onCloseModal={closeModalHanlder}
          mode={mode}
          activeRecipe={activeRecipe}
        />
      ) : mode === 'delete' ? (
        <DeleteContent />
      ) : (
        ''
      )}
      {/* <AddRecipes
        modal={showModal}
        onCloseModal={closeModalHanlder}
        onAddRecipe={addNewRecipeHandler}
        list={recipeList}
      /> */}
      <Footer
        activeRecipe={activeRecipe}
        checkEmptyRecipe={isEmptyRecipe}
        onUpdate={updateModalOpenHandler}
        onDelete={deleteRecipeHanlder}
      />
    </div>
    /* <AddRecipes
        modal={showModal}
        onCloseModal={closeModalHanlder}
        onAddRecipe={addNewRecipeHandler}
        list={recipeList}
      />
      <Header onClickHanlder={onClickHanlder} />
      <Main
        recipes={recipeList}
        isActive={activeRecipe}
        setActive={activeHandler}
      /> */
  );
}

export default App;
