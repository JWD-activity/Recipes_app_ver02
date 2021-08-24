import React from 'react';
import Button from '../components/Button';
import classes from './Footer.module.css';

export default function Footer(props) {
  const { onUpdate, setMode, selectedRecipeId, onDelete } = props;

  console.log('footer render');
  const deleteClickHandler = () => {
    setMode('delete');
    onDelete();
  };

  return (
    <footer className={`row ${classes.footer}`}>
      <div className='col-sm-12 col-md-6 col-lg-5'></div>
      <div
        className={`col-sm-12 col-md-6 col-lg-7 ${classes['button-container']}`}
      >
        {selectedRecipeId !== 0 && (
          <>
            <Button className={classes.button} onClick={onUpdate}>
              Update
            </Button>
            <Button className={classes.button} onClick={deleteClickHandler}>
              Delete
            </Button>
          </>
        )}
      </div>
    </footer>
  );
}
