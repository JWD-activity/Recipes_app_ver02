import React from 'react';
import RecipeList from '../components/Recipes/RecipeList';
import RecipeDetail from '../components/Recipes/RecipeDetail';
import Footer from '../UI/Footer';
const ReadContent = ({ setMode }) => {
  console.log('ReadContent render');

  return (
    <>
      <main className='row'>
        <div className='recipe col-sm-12 col-md-6 col-lg-5'>
          <RecipeList />
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
