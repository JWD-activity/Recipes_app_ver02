import React from 'react';
import classes from './Logo.module.css';

function Logo() {
  return (
    <div className={classes.logo}>
      <i className={`${classes.icon} fas fa-utensils`} />
      COOKBOOK
    </div>
  );
}

export default React.memo(Logo);
