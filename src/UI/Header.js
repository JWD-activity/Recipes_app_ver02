import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import classes from './Header.module.css';
function Header() {
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 576) setButton(false);
    else setButton(true);
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
        <Button icon='fas fa-plus-square'>{button && 'Add recipe'}</Button>
        <Button icon='fas fa-bookmark'>{button && 'Bookmark'}</Button>
      </div>
    </header>
  );
}

export default Header;
