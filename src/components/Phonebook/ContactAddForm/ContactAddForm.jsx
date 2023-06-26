import PropTypes from 'prop-types';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  PhonebookInput,
  InputWrapper,
  AddContactBtn,
  Form,
} from './ContactAddForm.styled';

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Name is required')
    .matches(
      /^[\p{L} '-]+$/u,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: Yup.string()
    .min(6, 'Must be atleat 6 nubmers')
    .max(17, 'Must be 11 nubmers or less')
    .required('Phone number is required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.'
    ),
});

function ContactAddForm({onSubmit}) {
 
  const formik = useFormik({
    initialValues: { name: '', number: '' },
    onSubmit: ({ name, number }) => handleSubmit(name, number),
    validationSchema,
  });

  const handleSubmit = (name, number) => {
    // e.preventDefault();
    formik.resetForm();
    onSubmit(name, number);
  };
  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputWrapper>
        <PhonebookInput
          name="name"
          id="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <label htmlFor="name">Name</label>
      </InputWrapper>
      <InputWrapper>
        <PhonebookInput
          name="number"
          id="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <label htmlFor="number">Number</label>
      </InputWrapper>

      <AddContactBtn type="submit">Add Contact</AddContactBtn>
    </Form>
  );
}

export default ContactAddForm;

ContactAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
