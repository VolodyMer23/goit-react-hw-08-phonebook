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

const validationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .max(255, 'Must be 15 characters or less')
    .required('Must be a valid email'),
  password: Yup.string()
    .min(6, 'Must be atleat 6 symbols')
    .max(255, 'Must be 255 symbols or less')
    .required('Password is required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.'
    ),
});

function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: ({ email, password }) => handleSubmit(email, password),
    validationSchema,
  });

  const handleSubmit = (email, password) => {
    // e.preventDefault();
    formik.resetForm();
    dispatch(login({ email, password }));
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
