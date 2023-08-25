import {
  ContactsWrapper,
  ContactsTitle,
  ContactsList,
  ContactsItem,
  ContactsName,
  ContactsNumber,
  DeleteBtn,
  DeleteIcon,
  Message,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getFilter, getLoading, getRefreshed } from 'Redux/selectors';
import { deleteContact } from 'Redux/operations';

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const refreshed = useSelector(getRefreshed);
  const onFilterContact = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  return (
    <ContactsWrapper>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactsList>
        {contacts.length === 0 && !error && !loading && !refreshed && (
          <Message>No contacts</Message>
        )}
        {loading && <Message>Loading</Message>}
        {error && <Message>Oops somthing wrong</Message>}
        {onFilterContact().map(({ name, number, _id }) => {
          return (
            <ContactsItem key={_id}>
              <ContactsName>{name}:</ContactsName>
              <ContactsNumber>{number}</ContactsNumber>
              <DeleteBtn
                aria-label="Delete"
                onClick={() => dispatch(deleteContact(_id))}
              >
                <DeleteIcon />
              </DeleteBtn>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </ContactsWrapper>
  );
}

export default Contacts;
