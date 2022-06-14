import s from './Form.module.css';

import PropTypes from 'prop-types';

import { useState } from 'react';

export default function Form({ onSubmit, resetForm, checkName }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'number':
        setNumber(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        break;
    }
  };

  const handleSubmut = e => {
    e.preventDefault();
    const isValidate = checkName(name);
    setName('');
    setNumber('');
    if (isValidate) return;
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };
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
          onChange={handleChange}
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
          onChange={handleChange}
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

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
