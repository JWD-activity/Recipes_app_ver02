import React, { useState, useEffect, useContext } from 'react';
import RecipeList from '../components/Recipes/RecipeList';
import RecipeDetail from '../components/Recipes/RecipeDetail';
import Pagination from '../components/Pagination';
import { SelectedIdContext } from '../contexts/SelectedIdContext';
import { RecipesContext } from '../contexts/RecipesContext';
import { RECIPE_PER_PAGE } from '../utils/constants';

const ReadContent = ({ setMode }) => {
  // console.log('ReadContent render');
  const { recipeList, setActiveRecipe } = useContext(RecipesContext);
  const { setSelectedId } = useContext(SelectedIdContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchRecipes = () => {
      setTotalPages(Math.ceil(recipeList.length / RECIPE_PER_PAGE));
    };
    fetchRecipes();
  }, [recipeList.length]);

  const handlePagination = (num) => {
    setCurrentPage(num);
    setSelectedId(0);
    setActiveRecipe();
  };

  return (
    <>
      <main className='row'>
        <div className='recipe col-sm-12 col-md-6 col-lg-5'>
          <RecipeList page={currentPage} />
          <Pagination
            total={totalPages}
            currentPage={currentPage}
            clickHandler={handlePagination}
          />
        </div>

        <section className='recipe col-sm-12 col-md-6 col-lg-7'>
          <RecipeDetail setMode={setMode} />
        </section>
      </main>
    </>
  );
};

export default ReadContent;
