import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'Redux/selectors';
import { fetchContacts, deleteContact, addContact } from 'Redux/operations';
import { setFilterValue } from 'Redux/phonebookSlice';
import { nanoid } from 'nanoid';
import {
  Container,
  PhonebookContainer,
  PhonebookTitle,
} from './Phonebook.styled';
import Contacts from './ContactsList/ContactList';
import ContactAddForm from './ContactAddForm/ContactAddForm';
import Filter from './Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';

export default function Phonebook() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  console.log('contacts :>> ', contacts);

  const nameCheker = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const onFormSubmit = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    if (nameCheker(name)) {
      return toast.warn(`${name} is already in contacts.`);
    }
    dispatch(addContact(newContact));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const onFilterChange = e => {
    dispatch(setFilterValue(e.target.value));
  };

  const onFilterContact = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhonebookContainer>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactAddForm onSubmit={onFormSubmit}></ContactAddForm>
      </PhonebookContainer>
      <Filter value={filter} onChange={onFilterChange}></Filter>
      <Contacts
        title="Contacts"
        contacts={onFilterContact()}
        onDelete={onDeleteContact}
      ></Contacts>
      <ToastContainer />
    </Container>
  );
}
