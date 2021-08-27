import React, { useState, useEffect, useContext } from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import classes from './Header.module.css';
import { ModalContext } from '../contexts/ModalContext';

function Header({ setMode }) {
  const { createModalOpen } = useContext(ModalContext);
  const [smallButton, setSmallButton] = useState(true);

  // When window size(width) is less than 576px show mobile version of button
  const showButton = () => {
    if (window.innerWidth <= 576) setSmallButton(false);
    else setSmallButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  // When add a new recipe button is clicked
  const clickHandler = () => {
    setMode('create');
    createModalOpen();
  };

  return (
    <header className='row py-4 px-3 align-items-center'>
      <div className='col-sm-4'>
        <Logo />
      </div>
      <div className={`col-sm-8 ${classes['btn-box']}`}>
        <Button icon='fas fa-plus-square' onClick={clickHandler}>
          {smallButton && 'Add recipe'}
        </Button>
      </div>
    </header>
  );
}

export default Header;
