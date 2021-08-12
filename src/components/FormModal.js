import React from 'react';
import Card from './Card';
import classes from './FormModal.module.css';
import { Form, Row, Col } from 'react-bootstrap';
import Button from './Button';

function FormModal(props) {
  return (
    <Card>
      <Row>
        <header className={classes['modal-header']}>
          <h3>Add a new recipe</h3>
        </header>
      </Row>
      <Form>
        <Row>
          <Col sm={12} md={6} className={classes['form']}>
            <Row>
              <Form.Group className='mb-3' controlId='formRecipeTitle'>
                <Form.Label>Recipe Title</Form.Label>
                <Form.Control
                  type='text'
                  placeholder=''
                  className={classes['form']}
                />
              </Form.Group>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <Form.Group className='mb-3' controlId='formRecipeCookTime'>
                  <Form.Label>Cook Time</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='min'
                    className={classes['form']}
                    min='1'
                    step='1'
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group className='mb-3' controlId='formRecipeServings'>
                  <Form.Label>Servings</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Servings'
                    className={classes['form']}
                    min='1'
                    step='1'
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={6} className={classes['form']}>
            <Form.Group className='mb-3' controlId='formRecipeTitle'>
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                type='text'
                placeholder=''
                className={classes['form']}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button>upload</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default FormModal;
