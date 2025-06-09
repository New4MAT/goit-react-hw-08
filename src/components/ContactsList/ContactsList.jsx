import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactsList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
