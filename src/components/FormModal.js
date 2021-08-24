import classes from './FormModal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field, useFormik, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Row, Col } from 'react-bootstrap';
import Button from './Button';
import Card from './Card';
import IngrediList from './Recipes/IngrediList';

let validationSchema = Yup.object().shape({
  title: Yup.string().trim().strict(true).required('Required').min(1),
  cookingTime: Yup.number()
    .required('Required')
    .positive('Invalid Cooking time')
    .integer(),
  servings: Yup.number()
    .required('Required')
    .positive('Invalid Servings')
    .integer(),
  ingredients: Yup.array()
    .of(Yup.string())
    .required('Must have ingredients')
    .min(2, 'Minimum of 2 ingredients'),
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
            ingredient: '',
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
    <>
      {ReactDOM.createPortal(
        <div className={classes.backdrop}></div>,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Formik
          initialValues={formik.initialValues}
          validationSchema={validationSchema}
          onKeyDown={(event) => event.preventDefault()}
          onSubmit={(values) =>
            mode === 'create' ? submitHandler(values) : updateHandler(values)
          }
        >
          {({ errors, touched }) => (
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
                    <h3 className='fw-bold'>
                      {mode === 'create'
                        ? 'Add a new recipe'
                        : 'Update a recipe'}
                    </h3>
                  </header>
                </Col>
              </Row>

              <Form>
                <Row>
                  <Col sm={12} md={6} className={classes.form}>
                    <Row>
                      {mode === 'update' && (
                        <input type='hidden' name='id' value={recipe.id} />
                      )}
                      <Col className='mb-4'>
                        <label htmlFor='title' className='form-label fw-bold'>
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
                        <label
                          htmlFor='cookingTime'
                          className='form-label fw-bold'
                        >
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
                        <label
                          htmlFor='servings'
                          className='form-label fw-bold'
                        >
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
                    <Row>
                      <div className='mb-3 align-items-center'>
                        <label
                          htmlFor='ingredients'
                          className='form-label fw-bold'
                        >
                          Ingredients
                        </label>

                        <FieldArray name='ingredients'>
                          {(fieldArrayProps) => {
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
                                      event.preventDefault();
                                      push(event.target.value);
                                      setFieldValue('ingredient', '');
                                    }
                                  }}
                                />
                                {errors.ingredients && touched.ingredients ? (
                                  <div className={classes.error}>
                                    {errors.ingredients}
                                  </div>
                                ) : null}
                                <ul className={`mt-4 ${classes.ul}`}>
                                  <IngrediList
                                    listOfIngredient={ingredients}
                                    icon={'fas fa-times'}
                                    remove={remove}
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

                  <Col className='my-2'>
                    <Button type='submit'>save</Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          )}
        </Formik>,
        document.getElementById('modal-root')
      )}
    </>
  );
}

export default FormModal;
