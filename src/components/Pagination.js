import React from 'react';
import classes from './Pagination.module.css';

function Pagination({ total, clickHandler }) {
  const pages = [...Array(total).keys()].map((num) => num + 1);
  // console.log(pages);
  return (
    <div className='d-flex justify-content-center'>
      {pages.map((num) => (
        <button
          className={classes.button}
          key={num}
          onClick={() => clickHandler(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
