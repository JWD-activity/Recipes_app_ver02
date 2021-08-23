import classes from './FormModal.module.css';
import React from 'react';
import { Formik, Form, Field, useFormik, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Row, Col } from 'react-bootstrap';
import Button from './Button';
import Card from './Card';
import IngrediList from './Recipes/IngrediList';

let validationSchema = Yup.object().shape({
  title: Yup.string().required('Required').min(1),
  cookingTime: Yup.number()
    .required('Required')
    .positive('Invalid Cooking time')
    .integer(),
  servings: Yup.number()
    .required('Required')
    .positive('Invalid Servings')
    .integer(),
  ingredients: Yup.array().of(Yup.string()).min(1),
});

function FormModal(props) {
  const {
    onClose,
    submitHandler,
    recipeList,
    onUpdate,
    selectedRecipeId,
    readRecipe,
    mode,
  } = props;
  const data = selectedRecipeId && readRecipe(selectedRecipeId);
  const [recipe] = data ?? '';
  const { title, cookingTime, servings, ingredients } = recipe ?? '';

  const updateHandler = (values) => {
    const { title, cookingTime, servings, ingredients } = values;
    const updatedRecipe = recipeList.map((recipe) =>
      recipe.id === selectedRecipeId
        ? {
            id: recipe.id,
            title: title,
            cookingTime: cookingTime,
            servings: servings,
            ingredients: ingredients,
          }
        : recipe
    );

    onUpdate(updatedRecipe);
  };

  const formik = useFormik({
    initialValues:
      mode === 'create'
        ? {
            title: '',
            cookingTime: '',
            servings: '',
            ingredients: [],
          }
        : mode === 'update'
        ? {
            title: title,
            cookingTime: cookingTime,
            servings: servings,
            ingredients: ingredients,
          }
        : '',
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Formik
      initialValues={formik.initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) =>
        mode === 'create' ? submitHandler(values) : updateHandler(values)
      }
      render={({ errors, touched }) => (
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
                  <h3>
                    {mode === 'create' ? 'Add a new recipe' : 'Update a recipe'}
                  </h3>
                </header>
              </Col>
            </Row>

            <Form>
              <Row>
                <Col sm={12} md={6} className={classes.form}>
                  <Row>
                    <Col className='mb-4'>
                      <label htmlFor='title' className='form-label'>
                        Recipe Title
                      </label>
                      <Field
                        type='text'
                        id='title'
                        name='title'
                        className={`form-control ${classes.form}`}
                      />
                      {errors.title && touched.title ? (
                        <div className={classes.error}>{errors.title}</div>
                      ) : null}
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12} sm={6} className='mb-4'>
                      <label htmlFor='cookingTime' className='form-label'>
                        Cook Time
                      </label>
                      <Field
                        type='number'
                        id='cookingTime'
                        name='cookingTime'
                        placeholder='min'
                        className={`form-control ${classes.form}`}
                        min='1'
                        step='1'
                      />
                      {errors.cookingTime && touched.cookingTime ? (
                        <div className={classes.error}>
                          {errors.cookingTime}
                        </div>
                      ) : null}
                    </Col>
                    <Col xs={12} sm={6} className='mb-4'>
                      <label htmlFor='servings' className='form-label'>
                        Servings
                      </label>
                      <Field
                        type='number'
                        id='servings'
                        name='servings'
                        placeholder='servings'
                        className={`form-control ${classes.form}`}
                        min='1'
                        step='1'
                      />
                      {errors.servings && touched.servings ? (
                        <div className={classes.error}>{errors.servings}</div>
                      ) : null}
                    </Col>
                  </Row>
                </Col>

                <Col sm={12} md={6} className={classes.form}>
                  <Row className={`${classes['row-height']}`}>
                    <div className='mb-3 align-items-center'>
                      <label htmlFor='ingredients' className='form-label'>
                        Ingredients
                      </label>

                      <FieldArray name='ingredients'>
                        {(fieldArrayProps) => {
                          console.log('fieldArrayProps', fieldArrayProps);
                          const { push, remove, form } = fieldArrayProps;
                          const { values, setFieldValue } = form;
                          const { ingredients } = values;

                          return (
                            <div>
                              <Field
                                type='text'
                                id='ingredient'
                                name='ingredient'
                                className={`form-control ${classes.form}`}
                                placeholder='Enter your ingredient'
                                onKeyDown={(event) => {
                                  if (
                                    event.key === 'Enter' &&
                                    event.target.value.trim().length !== 0
                                  ) {
                                    push(event.target.value);
                                    setFieldValue('ingredient', '');
                                  }
                                }}
                              />
                              {errors.ingredient && touched.ingredient ? (
                                <div className={classes.error}>
                                  {errors.ingredient}
                                </div>
                              ) : null}
                              <ul className={classes.ul}>
                                <IngrediList
                                  listOfIngredient={ingredients}
                                  icon={'fas fa-times'}
                                  deleteHandler={remove}
                                  className={classes.li}
                                />
                              </ul>
                            </div>
                          );
                        }}
                      </FieldArray>
                    </div>
                  </Row>
                </Col>

                <Col>
                  <Button type='submit'>save</Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      )}
    />
  );
}

export default FormModal;
