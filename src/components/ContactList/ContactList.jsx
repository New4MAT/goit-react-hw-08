import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contactsSlice';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);

  return (
    <ul className={css.list}>
      {!loading &&
        contacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
    </ul>
  );
}

export default ContactList;
