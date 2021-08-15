import React from 'react';

function IngrediList(props) {
  // console.log(props.listOfIngredient);
  return props.listOfIngredient.length !== 0
    ? props.listOfIngredient.map(
        (ingredient) =>
          Object.keys(ingredient).map((key, index) => {
            if (ingredient.length !== 0 && key === 'name') {
              return (
                <li
                  key={ingredient.id}
                  data-index={ingredient.id}
                  className={`${props.className ?? ''}`}
                  onClick={props.deleteHandler}
                >
                  {ingredient[key]}
                  {props.icon && <i className={props.icon} />}
                </li>
              );
            }
          })
        //   <li
        //     key={ingredient.id}
        //     data-index={ingredient.id}
        //     className={`${props.className ?? ''}`}
        //     onClick={props.deleteHandler}
        //   >
        //     {ingredient}
        //     {props.icon && <i className={props.icon} />}
        //   </li>
      )
    : '';
}

export default IngrediList;

// {Object.keys(subjects).map((keyName, i) => (
//   <li className="travelcompany-input" key={i}>
//       <span className="input-label">key: {i} Name: {subjects[keyName]}</span>
//   </li>
// ))}
