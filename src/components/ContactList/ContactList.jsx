import React, { useEffect } from 'react';
import css from 'components/ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/contacts.reducer';
import {
  selectContacts,
  selectFilter,
} from 'redux/contacts/contacts.selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContacts();

  return (
    <ul className={css.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, phone }) => {
          return (
            <li key={id} className={css.listItem}>
              <p>{name}</p>
              <span>{phone}</span>
              <button
                type="button"
                className={css.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          );
        })
      ) : (
        <p>Sorry, no contacts :( </p>
      )}
    </ul>
  );
};
