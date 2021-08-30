import React from 'react';
import classes from './Pagination.module.css';

function Pagination({ total, clickHandler, currentPage }) {
  const numPages = [...Array(total).keys()].map((num) => num + 1);
  console.log(numPages, currentPage);

  const renderPrevBtn = (currPage, num) => {
    // Page 1, and there are other pages or last page
    if (currPage === 1 && num.length > 1)
      return (
        <button className={classes.button} disabled>
          <i className={`fas fa-chevron-left ${classes.i}`} />
        </button>
      );
    // Other page
    else if (
      currPage < num.length ||
      (currPage !== 1 && currPage === num.length)
    ) {
      return (
        <button
          data-goto={currentPage - 1}
          className={classes.button}
          key={currentPage - 1}
          onClick={() => clickHandler(currentPage - 1)}
        >
          <i className={`fas fa-chevron-left ${classes.i}`} />
        </button>
      );
    }
  };

  const renderNextBtn = (currPage, num) => {
    // Page 1, and there are other pages
    if ((currPage === 1 && num.length > 1) || currPage < num.length) {
      return (
        <button
          data-goto={currentPage + 1}
          className={classes.button}
          key={currentPage + 1}
          onClick={() => clickHandler(currentPage + 1)}
        >
          <i className={`fas fa-chevron-right ${classes.i}`} />
        </button>
      );
    } else if (currPage !== 1 && currPage === num.length) {
      // Other page or Last page
      return (
        <button className={classes.button} disabled>
          <i className={`fas fa-chevron-right ${classes.i}`} />
        </button>
      );
    }
  };

  return currentPage === 1 && numPages.length === 1 ? (
    ''
  ) : (
    <div className='d-flex justify-content-center align-items-center'>
      {renderPrevBtn(currentPage, numPages)}
      <span className={classes.span}>{`${currentPage}`}</span> / {total}
      {renderNextBtn(currentPage, numPages)}
    </div>
  );
}

export default Pagination;
