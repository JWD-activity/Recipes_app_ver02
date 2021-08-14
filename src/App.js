import React, { useState } from 'react';
import './App.css';
import Header from './UI/Header';
import Main from './UI/Main';
import AddRecipes from './components/Recipes/AddRecipes';

function App() {
  const [recipeList, setRecipeList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addNewRecipeHandler = (recipe) => {
    setRecipeList((prevRecipeList) => {
      return [...prevRecipeList, recipe];
    });
  };

  const onClickHanlder = () => {
    setShowModal(true);
  };

  const closeModalHanlder = () => {
    setShowModal(false);
  };

  return (
    <div className='app container'>
      <AddRecipes
        modal={showModal}
        onCloseModal={closeModalHanlder}
        onAddRecipe={addNewRecipeHandler}
        list={recipeList}
      />
      <Header onClickHanlder={onClickHanlder} />
      <Main recipes={recipeList} />
    </div>
  );
}

export default App;
