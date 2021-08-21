import React from 'react';
import Card from './Card';
import classes from './FormModal.module.css';
import { Form, Row, Col } from 'react-bootstrap';
import Button from './Button';
import IngrediList from './Recipes/IngrediList';

function FormModal(props) {
  var { mode, onClose } = props;

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
              <h3>Add a new recipe</h3>
            </header>
          </Col>
        </Row>
        <Form
          action='/create'
          method='post'
          onSubmit={props.submitHandler}
          noValidate
          validated={props.isValid}
        >
          <Row>
            <Col sm={12} md={6} className={classes.form}>
              <Row>
                <Form.Group className='mb-3' controlId='title'>
                  <Form.Label>Recipe Title</Form.Label>
                  <Form.Control
                    type='text'
                    name='title'
                    placeholder=''
                    className={classes.form}
                    onChange={props.changeHandler}
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
                      name='time'
                      placeholder='min'
                      className={classes.form}
                      min='1'
                      step='1'
                      onChange={props.changeHandler}
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
                      name='servings'
                      onChange={props.changeHandler}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6} className={classes.form}>
              <Row className={`${classes['row-height']}`}>
                <Form.Group
                  className='mb-3 align-items-center'
                  controlId='ingredients'
                >
                  <Form.Label>Ingredients</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your ingredient'
                    className={` ${classes.form}`}
                    onChange={props.changeHandler}
                    onKeyDown={props.enterHandler}
                    name='ingredient'
                  />
                </Form.Group>

                {/* <ul className={`${classes.ul} mx-1`}>
                  <IngrediList
                    listOfIngredient={props.listOfIngredient}
                    icon={'fas fa-times'}
                    deleteHandler={props.deleteHandler}
                    className={classes.li}
                  />
                </ul> */}
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

export default FormModal;
