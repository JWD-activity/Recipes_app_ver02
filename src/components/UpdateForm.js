import React, { useState } from 'react';
import classes from './FormModal.module.css';
import { Form, Row, Col } from 'react-bootstrap';
import Card from './Card';
import Button from './Button';
import IngrediList from './Recipes/IngrediList';

function UpdateForm(props) {
  console.log('UpdateFrom render');
  const { onClose, recipeList, onUpdate, selectedRecipeId, readRecipe } = props;

  const data = readRecipe(selectedRecipeId);
  const [recipe] = data;

  const { id, title, cookingTime, servings, ingredients } = recipe;

  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedTime, setUpdatedTime] = useState(cookingTime);
  const [updatedServings, setUpdatedServings] = useState(servings);
  const [updatedIngredients, setUpdatedIngredients] = useState(ingredients);

  const updateHandler = () => {
    const updatedRecipe = recipeList.map((recipe) =>
      recipe.id === selectedRecipeId
        ? {
            id: recipe.id,
            title: updatedTitle,
            cookingTime: updatedTime,
            servings: updatedServings,
            ingredients: updatedIngredients,
          }
        : recipe
    );

    onUpdate(updatedRecipe);
  };

  const deleteIngredientHandler = (event) => {
    const index = event.target.dataset.index;
    const data = recipe.ingredients;
    data.splice(index, 1);
    setUpdatedIngredients(data.filter((ingredient) => ingredient));
  };

  const onChangeHandler = (event) => {
    switch (event.target.name) {
      case 'title':
        setUpdatedTitle(event.target.value);
        break;
      case 'time':
        setUpdatedTime(event.target.value);
        break;
      case 'servings':
        setUpdatedServings(event.target.value);
        break;
      case 'ingredients':
        setUpdatedIngredients(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <Row className={`align-items-center ${classes['modal-top']}`}>
          <Col xs={12} sm={3} className='d-flex justify-content-end'>
            <Button
              icon='fas fa-times'
              className={classes['modal-close']}
              onClick={onClose}
            />
          </Col>
          <Col xs={12} sm={9}>
            <header className={classes['modal-header']}>
              <h3>Update a recipe</h3>
            </header>
          </Col>
        </Row>
        <Form onSubmit={updateHandler} noValidate validated={props.isValid}>
          <Row>
            <Col sm={12} md={6} className={classes.form}>
              <Row>
                <Form.Group className='mb-3' controlId='title'>
                  <Form.Label>Recipe Title</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder=''
                    className={classes.form}
                    onChange={onChangeHandler}
                    value={updatedTitle}
                    name='title'
                    required
                  />
                </Form.Group>
              </Row>
              <Row>
                <Col xs={12} sm={6}>
                  <Form.Group className='mb-3' controlId='cookingTime'>
                    <Form.Label>Cook Time</Form.Label>
                    <Form.Control
                      required
                      type='number'
                      placeholder='min'
                      className={classes.form}
                      min='1'
                      step='1'
                      name='time'
                      onChange={onChangeHandler}
                      value={updatedTime}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Group className='mb-3' controlId='servings'>
                    <Form.Label>Servings</Form.Label>
                    <Form.Control
                      required
                      type='number'
                      placeholder='Servings'
                      className={classes.form}
                      min='1'
                      step='1'
                      onChange={onChangeHandler}
                      name='servings'
                      value={updatedServings}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} className={classes.form}>
              <Row>
                <Form.Group
                  className='mb-3 align-items-center'
                  controlId='ingredients'
                >
                  <Form.Label>Ingredients</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your ingredient'
                    className={` ${classes.form}`}
                    onChange={onChangeHandler}
                    onKeyDown={props.enterHandler}
                    name='ingredient'
                  />
                </Form.Group>
                {updatedIngredients.length > 0 ? (
                  <ul className={`${classes.ul} mx-1`}>
                    <IngrediList
                      listOfIngredient={updatedIngredients}
                      icon={'fas fa-times'}
                      deleteIngredient={deleteIngredientHandler}
                      className={classes.li}
                    />
                  </ul>
                ) : (
                  ''
                )}
              </Row>
            </Col>
            <Col>
              <Button type='submit'>save</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}

export default UpdateForm;
