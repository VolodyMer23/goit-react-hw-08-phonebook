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
import { login } from 'Redux/operationsAuth';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .max(255, 'Must be 15 characters or less')
    .required('Must be a valid email'),
  password: Yup.string()
    .min(6, 'Must be atleat 6 symbols')
    .max(255, 'Must be 255 symbols or less')
    .required('Password is required'),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: ({ email, password }) => handleSubmit(email, password),
    validationSchema,
  });

  const handleSubmit = (email, password) => {
    formik.resetForm();
    dispatch(login({ email, password }));
    navigate('/contacts');
  };
  return (
    <Form onSubmit={formik.handleSubmit}>
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
          type="password"
          name="password"
          id="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <label htmlFor="password">Password</label>
      </InputWrapper>

      <AddContactBtn type="submit">Login</AddContactBtn>
    </Form>
  );
}

export default Login;
