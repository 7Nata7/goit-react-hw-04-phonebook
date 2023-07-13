import css from './App.module.css';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

export const App = () => {
  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const onRemoveContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const onAddContact = (name, number) => {
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      return alert(`${name} OR ${number} exists in contacts.`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = searchQuery => {
    setFilter(searchQuery);
  };

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.main_section}>
      <ContactForm title="Phone Book" onAddContact={onAddContact} />

      <Filter
        title="Find contacts by name"
        onFilterChange={handleFilterChange}
      />

      <ContactList
        title="Contacts"
        contacts={filteredContacts}
        onRemoveContact={onRemoveContact}
      />
    </div>
  );
};
