import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOps';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import css from './ContactsForm.module.css';
import { useState } from 'react';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isExist = contacts.find(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
