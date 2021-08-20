import React from 'react';
import classes from './RecipeList.module.css';

function RecipeList(props) {
  const { onClick } = props;
  // console.log(props.isActive);
  return (
    <ul className={classes.ul}>
      {props.recipeList.map((recipe) => (
        <li
          key={recipe.id}
          data-id={recipe.id}
          className={`${classes.li} text-capitalize `}
          // className={`${classes.li} text-capitalize ${
          //   props.isActive && props.isActive.id === recipe.id
          //     ? classes.active
          //     : ''
          // }`}
          onClick={onClick}
        >
          {recipe.title}
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
