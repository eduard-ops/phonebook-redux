import Form from './Form';

import Contacts from './ContactsList/Contacts';

import Container from './Container';

import Filter from './Filter';

import { connect } from 'react-redux';

import { addContact } from 'redux/contacts/contacts-actions';

function App({ onSubmit, contacts }) {
  const checkName = name => {
    const isValidate = contacts.find(item => item.text.name === name);
    isValidate && alert(`${name} is already in contacts`);
    return isValidate;
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={onSubmit} checkName={checkName} />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.contacts,
  name: state.form,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(addContact(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
