import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'Redux/selectors';
import { addContact } from 'Redux/operations';
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
  email: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Name is required'),
  phone: Yup.string()
    .min(6, 'Must be atleat 6 nubmers')
    .max(17, 'Must be 11 nubmers or less')
    .required('Phone number is required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.'
    ),
});

function ContactAddForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const formik = useFormik({
    initialValues: { name: '', phone: '', email: '' },
    onSubmit: ({ name, phone, email }) => handleSubmit(name, phone, email),
    validationSchema,
  });
  
  const nameCheker = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = (name, phone, email) => {
    const newContact = {
      name,
      email,
      phone,
    };
    if (nameCheker(name)) {
      return toast.warn(`${name} is already in contacts.`);
    }
    console.log('newContact :>> ', newContact);
    dispatch(addContact(newContact));
    formik.handleReset();
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
          name="email"
          id="email"
          title=""
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <label htmlFor="email">Email</label>
      </InputWrapper>
      <InputWrapper>
        <PhonebookInput
          name="phone"
          id="phone"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={formik.values.phone}
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
