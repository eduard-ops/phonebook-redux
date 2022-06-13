import s from './Form.module.css';
import { useEffect } from 'react';

import { connect } from 'react-redux';

import * as info from '../../redux/form/actions-form';

import { addContact } from 'redux/contacts/contacts-actions';

import PropTypes from 'prop-types';

function Form({
  name,
  number,
  onSubmit,
  changeName,
  changeNumber,
  contacts,
  resetForm,
}) {
  const handleSubmut = e => {
    e.preventDefault();
    const isValidate = contacts.find(item => item.text.name === name);
    isValidate && alert(`${name} is already in contacts`);
    resetForm();
    if (isValidate) return;

    onSubmit({ name, number });
    resetForm();
  };
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  return (
    <form onSubmit={handleSubmut} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={changeName}
        />
      </label>

      <label className={s.label}>
        Телефон
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={changeNumber}
          value={number}
        />
      </label>

      <button className={s.button} type="submit">
        {' '}
        Add contact
      </button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    name: state.form.name,
    number: state.form.number,
    contacts: state.contacts.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: e => dispatch(info.name(e.target.value)),
    changeNumber: e => dispatch(info.number(e.target.value)),
    onSubmit: text => dispatch(addContact(text)),
    resetForm: () => dispatch(info.reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
