import PropTypes from 'prop-types';
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
import { useSelector } from 'react-redux';
import { getError, getLoading } from 'Redux/selectors';

function Contacts({ title, contacts, onDelete }) {
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  return (
    <ContactsWrapper>
      <ContactsTitle>{title}</ContactsTitle>
      <ContactsList>
        {contacts.length === 0 && !error && !loading && (
          <Message>No contacts</Message>
        )}
        {loading && <Message>Loading</Message>}
        {error && <Message>Oops somthing wrong</Message>}
        {contacts.map(({ name, number, id }) => {
          return (
            <ContactsItem key={id}>
              <ContactsName>{name}:</ContactsName>
              <ContactsNumber>{number}</ContactsNumber>
              <DeleteBtn aria-label="Delete" onClick={() => onDelete(id)}>
                <DeleteIcon />
              </DeleteBtn>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </ContactsWrapper>
  );
}

Contacts.propTypes = {
  title: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
