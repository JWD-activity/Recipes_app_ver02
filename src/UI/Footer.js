import React from 'react';
import Button from '../components/Button';
import classes from './Footer.module.css';

export default function Footer(props) {
  const { activeRecipe, checkEmptyRecipe, onUpdate, setMode } = props;

  console.log('footer render', activeRecipe.id);
  const deleteClickHandler = () => {
    setMode('delete');
  };
  return (
    <footer className={`row ${classes.footer}`}>
      <div className='col-sm-12 col-md-6 col-lg-5'>PageNation</div>
      <div
        className={`col-sm-12 col-md-6 col-lg-7 ${classes['button-container']}`}
      >
        {!checkEmptyRecipe(activeRecipe) && (
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
