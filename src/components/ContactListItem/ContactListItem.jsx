import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './ContactListItem.module.css';

function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.item}>
      <span className={css.name}>{contact.name}:</span>
      <span className={css.number}>{contact.number}</span>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;
