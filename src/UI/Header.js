import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import classes from './Header.module.css';

function Header(props) {
  const [smallButton, setSmallButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 576) setSmallButton(false);
    else setSmallButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <header className='row py-4 px-3 align-items-center'>
      <div className='col-sm-4'>
        <Logo />
      </div>
      <div className={`col-sm-8 ${classes['btn-box']}`}>
        <Button icon='fas fa-plus-square' onClick={props.onClick}>
          {smallButton && 'Add recipe'}
        </Button>
        {/* <Button icon='fas fa-bookmark'>{smallButton && 'Bookmark'}</Button> */}
      </div>
    </header>
  );
}

export default Header;
