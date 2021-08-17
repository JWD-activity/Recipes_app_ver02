import React, { useState } from 'react';
import './App.css';
import Header from './UI/Header';
import Main from './UI/Main';
import AddRecipes from './components/Recipes/AddRecipes';

function App() {
  const [recipeList, setRecipeList] = useState([]);

  const [activeRecipe, setActiveRecipe] = useState('');

  const [showModal, setShowModal] = useState(false);

  const addNewRecipeHandler = (recipe) => {
    setRecipeList((prevRecipeList) => {
      return [recipe, ...prevRecipeList];
    });
    activeHandler(recipe);
    // console.log('Main: ', recipe);
    // console.log('Main add active: ', activeRecipe);
  };

  const onClickHanlder = () => {
    setShowModal(true);
  };

  const closeModalHanlder = () => {
    setShowModal(false);
  };

  const activeHandler = (recipe) => {
    console.log('app: ', recipe);
    setActiveRecipe(recipe.id);
  };
  // const activeHandler = (id) => {
  //   setActiveRecipe(id);
  // };

  return (
    <div className='app container'>
      <AddRecipes
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
      />
    </div>
  );
}

export default App;
