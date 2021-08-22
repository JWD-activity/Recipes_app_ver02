import React from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';
import classes from './FormModal.module.css';
import { Row, Col } from 'react-bootstrap';
import Button from './Button';
import Card from './Card';
import IngrediList from './Recipes/IngrediList';

let validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  cookingTime: Yup.number()
    .required('Required')
    .positive('Invalid Cooking time')
    .integer(),
  servings: Yup.number()
    .required('Required')
    .positive('Invalid Servings')
    .integer(),
  ingredient: Yup.string(),
  ingredients: Yup.array().of(Yup.string()),
});

// const initialValues = {
//   title: '',
//   cookingTime: '',
//   servings: '',
//   ingredient: '',
//   ingredients: [],
// };

// const onSubmit = () => {
//   console.log('submit');
// };

function CreateForm(props) {
  var { mode, onClose, submitHandler, isValid } = props;

  const formik = useFormik({
    initialValues: {
      title: '',
      cookingTime: '',
      servings: '',
      ingredient: '',
      ingredients: [],
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Formik
      initialValues={formik.initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
      render={({ values, errors, touched }) => (
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
                        onChange={formik.handleChange}
                        value={formik.values.title}
                      />
                      {errors.title && touched.title ? (
                        <div>{errors.title}</div>
                      ) : null}
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12} sm={6}>
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
                    </Col>
                    <Col xs={12} sm={6}>
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
                    </Col>
                  </Row>
                </Col>
                <Col sm={12} md={6} className={classes.form}>
                  <Row className={`${classes['row-height']}`}>
                    <div className='mb-3 align-items-center'>
                      <label htmlFor='ingredient' className='form-label'>
                        Ingredients
                      </label>
                      <Field
                        type='text'
                        id='ingredient'
                        name='ingredient'
                        className={`form-control ${classes.form}`}
                        placeholder='Enter your ingredient'
                        // onChange={props.changeHandler}
                        // onKeyDown={props.enterHandler}
                      />
                    </div>

                    <ul className={`${classes.ul} mx-1`}>
                      {/* <IngrediList
                      listOfIngredient={props.listOfIngredient}
                      icon={'fas fa-times'}
                      deleteHandler={props.deleteHandler}
                      className={classes.li}
                    /> */}
                    </ul>
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

export default CreateForm;
