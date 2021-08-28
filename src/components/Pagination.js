import React from 'react';

function Pagination({ total, clickHandler }) {
  const pages = [...Array(total).keys()].map((num) => num + 1);
  // console.log(pages);
  return (
    <div>
      {pages.map((num) => (
        <button key={num} onClick={() => clickHandler(num)}>
          {num}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
