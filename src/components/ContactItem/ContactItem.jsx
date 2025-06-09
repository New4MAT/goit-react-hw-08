import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOps';
import { toast } from 'react-hot-toast';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success('Contact deleted successfully'))
      .catch(() => toast.error('Failed to delete contact'));
  };

  return (
    <li className={css.item}>
      <span className={css.name}>
        {name}: {number}
      </span>
      <button className={css.button} onClick={handleDelete}>
        Видалити
      </button>
    </li>
  );
};

export default ContactItem;
