import React, { useState, useEffect, useContext } from 'react';
import RecipeList from '../components/Recipes/RecipeList';
import RecipeDetail from '../components/Recipes/RecipeDetail';
import Pagination from '../components/Pagination';
import { RecipesContext } from '../contexts/RecipesContext';
import Footer from '../UI/Footer';
import { RECIPE_PER_PAGE } from '../utils/constants';
const ReadContent = ({ setMode }) => {
  console.log('ReadContent render');
  const { recipeList } = useContext(RecipesContext);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchRecipes = () => {
      setList(recipeList);
      setTotalPages(Math.ceil(recipeList.length / RECIPE_PER_PAGE));
    };
    fetchRecipes();
  }, []);

  const handlePagination = (num) => {
    setPage(num);
  };

  return (
    <>
      <main className='row'>
        <div className='recipe col-sm-12 col-md-6 col-lg-5'>
          <RecipeList page={page} />
          <Pagination total={totalPages} clickHandler={handlePagination} />
        </div>
        <section className='recipe col-sm-12 col-md-6 col-lg-7'>
          <RecipeDetail />
        </section>
      </main>
      <Footer setMode={setMode} />
    </>
  );
};

export default ReadContent;
