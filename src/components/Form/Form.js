import s from './Form.module.css';

import { connect } from 'react-redux';

import * as info from '../../redux/form/actions-form';

import PropTypes from 'prop-types';

function Form({
  name,
  number,
  onSubmit,
  changeName,
  changeNumber,
  resetForm,
  checkName,
}) {
  const handleSubmut = e => {
    e.preventDefault();
    const isValidate = checkName(name);
    resetForm();
    if (isValidate) return;
    onSubmit({ name, number });
    resetForm();
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: e => dispatch(info.name(e.target.value)),
    changeNumber: e => dispatch(info.number(e.target.value)),
    resetForm: () => dispatch(info.reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
