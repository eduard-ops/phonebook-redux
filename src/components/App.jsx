import Form from './Form';

import Contacts from './ContactsList/Contacts';

import Container from './Container';

import Filter from './Filter';

import { nanoid } from 'nanoid';

import { useState, useEffect } from 'react';

function App(params) {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };
    setContacts(prevState => [contact, ...prevState]);
  };

  const verificationContact = name => {
    const isVerificate = contacts.find(contact => contact.name === name);

    isVerificate && alert(`${name} is already in contacts`);

    return isVerificate;
  };

  const changeFilter = e => {
    const current = e.currentTarget.value;
    setFilter(current);
  };

  function showContacts() {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(
      ({ name }) => name && name.includes(normalizedFilter)
    );

    return visibleContacts;
  }

  const deleteContacts = contactsId => {
    setContacts(contacts.filter(({ id }) => id !== contactsId));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form
        onSubmit={formSubmitHandler}
        verificateContact={verificationContact}
      />
      <h2>Contacts</h2>
      <Filter filterItem={filter} change={changeFilter} />
      <Contacts item={showContacts()} clickDelete={deleteContacts} />
    </Container>
  );
}

export default App;
