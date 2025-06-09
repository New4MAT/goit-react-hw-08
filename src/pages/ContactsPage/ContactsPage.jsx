import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOps';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import ContactForm from '../../components/ContactsForm/ContactsForm';
import ContactList from '../../components/ContactsList/ContactsList';
import Filter from '../../components/Filter/Filter';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Your Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
