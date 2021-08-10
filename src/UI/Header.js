import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import classes from './Header.module.css';
function Header() {
  return (
    <header className='row py-3 align-items-center'>
      <div className='col-sm-10 col-md-3'>
        <Logo />
      </div>
      <div className='col-sm-10 col-md-4'>search</div>
      <div className='col-sm-10 col-md-5'>
        <Button icon='fas fa-plus-square'>Add recipe</Button>
        <Button icon='fas fa-bookmark'>Bookmark</Button>
      </div>
    </header>
  );
}

export default Header;
