import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from 'Redux/selectors';
import { fetchContacts } from 'Redux/operations';
import {
  Container,
  PhonebookContainer,
  PhonebookTitle,
} from './Phonebook.styled';
import Contacts from './ContactsList/ContactList';
import ContactAddForm from './ContactAddForm/ContactAddForm';
import Filter from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchRefresh } from 'Redux/operationsAuth';

export default function Phonebook() {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);

  useEffect(() => {
    dispatch(fetchRefresh(token));
    dispatch(fetchContacts());
  }, [dispatch, token]);

  return (
    <Container>
      <PhonebookContainer>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactAddForm />
      </PhonebookContainer>
      <Filter />
      <Contacts />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Container>
  );
}
