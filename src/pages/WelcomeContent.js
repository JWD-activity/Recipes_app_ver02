import React from 'react';
import classes from './WelcomeContent.module.css';

function WelcomeContent() {
  console.log('WelcomeContent render');

  return (
    <div className={classes.container}>
      <div className={classes['h2-box']}>
        <h2 className={classes.h2}>Welcome to COOKBOOK</h2>
      </div>
    </div>
  );
}

export default WelcomeContent;
