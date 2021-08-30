import React from 'react';
import classes from './Pagination.module.css';

function Pagination({ total, clickHandler, currentPage }) {
  const numPages = [...Array(total).keys()].map((num) => num + 1);
  console.log(numPages, currentPage);

  // Page 1, and there are other pages
  if (currentPage === 1 && numPages.length > 1) {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <span className={classes.span}>{`${currentPage}`}</span> / {total}
        <button
          data-goto={currentPage + 1}
          className={classes.button}
          key={currentPage + 1}
          onClick={() => clickHandler(currentPage + 1)}
        >
          <i className={`fas fa-chevron-right ${classes.i}`}></i>
        </button>
      </div>
    );
    // Last page
  } else if (currentPage === numPages.length && numPages.length > 1) {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <button
          data-goto={currentPage - 1}
          className={classes.button}
          key={currentPage - 1}
          onClick={() => clickHandler(currentPage - 1)}
        >
          <i className={`fas fa-chevron-left ${classes.i}`} />
        </button>
        <span className={classes.span}>{`${currentPage}`}</span> / {total}
        <button className={classes.button} disabled>
          <i className={`fas fa-chevron-right ${classes.i}`}></i>
        </button>
      </div>
    );
  } else if (currentPage < numPages.length) {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <button
          data-goto={currentPage - 1}
          className={classes.button}
          key={currentPage - 1}
          onClick={() => clickHandler(currentPage - 1)}
        >
          <i className={`fas fa-chevron-left ${classes.i}`} />
        </button>
        <span className={classes.span}>{`${currentPage}`}</span> / {total}
        <button
          data-goto={currentPage + 1}
          className={classes.button}
          key={currentPage + 1}
          onClick={() => clickHandler(currentPage + 1)}
        >
          <i className={`fas fa-chevron-right ${classes.i}`}></i>
        </button>
      </div>
    );
  } else return '';
}

export default Pagination;
