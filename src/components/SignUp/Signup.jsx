import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  AddContactBtn,
  Form,
  InputWrapper,
  PhonebookInput,
} from 'components/Phonebook/ContactAddForm/ContactAddForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/operationsAuth';
import { Title } from './Signup.styled';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string()
    .max(255, 'Must be 255 characters or less')
    .required('Enter your name'),
  email: Yup.string()
    .trim()
    .max(255, 'Must be 255 characters or less')
    .required('Must be a valid email'),
  password: Yup.string()
    .min(6, 'Must be atleat 6 symbols')
    .max(255, 'Must be 255 symbols or less')
    .required('Password is required'),
});

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    onSubmit: ({ name, email, password }) =>
      handleSubmit(name, email, password),
    validationSchema,
  });

  const handleSubmit = (name, email, password) => {
      const newUser = {
      name,
      email,
      password,
    };
    dispatch(register(newUser));
    navigate('/login');
  };
  return (
    <>
      <Title>Sign Up</Title>
      <Form onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <PhonebookInput
            name="name"
            id="name"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <label htmlFor="name">Name</label>
        </InputWrapper>
        <InputWrapper>
          <PhonebookInput
            name="email"
            id="email"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <label htmlFor="email">Email</label>
        </InputWrapper>
        <InputWrapper>
          <PhonebookInput
            type='password'
            name="password"
            id="password"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
  
          <label htmlFor="password">Password</label>
        </InputWrapper>
  
        <AddContactBtn type="submit">Signup</AddContactBtn>
      </Form>
    </>
  );
}

export default Signup;
