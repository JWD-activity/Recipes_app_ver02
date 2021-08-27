import React, { useContext } from 'react';
import Button from '../components/Button';
import classes from './Footer.module.css';
import { RecipesContext } from '../contexts/RecipesContext';
import { SelectedIdContext } from '../contexts/SelectedIdContext';
import { ModalContext } from '../contexts/ModalContext';

export default function Footer({ setMode }) {
  console.log('footer render');
  const { selectedRecipeId, setSelectedId } = useContext(SelectedIdContext);
  const { updateModalOpen } = useContext(ModalContext);
  const { setActiveRecipe, dispatchRecipeList } = useContext(RecipesContext);

  const deleteClickHandler = () => {
    if (
      window.confirm(
        'Are you sure want to delete the recipe? If you delete the recipe, you will permanently lose your selected recipe.'
      )
    ) {
      dispatchRecipeList({
        type: 'REMOVE_RECIPE',
        id: setSelectedId,
      });
      setSelectedId(0);
      setActiveRecipe();
      alert('The recipe has been deleted successfully!');
    }
  };

  // When update button is clicked
  const updateClickHandler = () => {
    updateModalOpen();
    setMode('update');
  };

  return (
    <>
      <footer className={`row ${classes.footer}`}>
        <div className='col-sm-12 col-md-6 col-lg-5'></div>
        <div
          className={`col-sm-12 col-md-6 col-lg-7 ${classes['button-container']}`}
        >
          {selectedRecipeId !== 0 && (
            <>
              <Button className={classes.button} onClick={updateClickHandler}>
                Update
              </Button>
              <Button className={classes.button} onClick={deleteClickHandler}>
                Delete
              </Button>
            </>
          )}
        </div>
      </footer>
    </>
  );
}
