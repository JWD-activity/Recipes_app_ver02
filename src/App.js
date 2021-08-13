import React, { useState } from 'react';
import './App.css';
import Header from './UI/Header';
// import FormModal from './components/FormModal';
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

  const onCloseHanlder = () => {
    setShowModal(false);
  };

  return (
    <div className='app container'>
      <AddRecipes
        modal={showModal}
        onClose={onCloseHanlder}
        onAddRecipe={addNewRecipeHandler}
        list={recipeList}
      />
      <Header onClickHanlder={onClickHanlder} />
      <main className='row'>
        <div className='recipe col'>Recipe</div>
      </main>
    </div>
  );
}

export default App;
