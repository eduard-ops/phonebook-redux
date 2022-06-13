import s from './Contacts.module.css';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import * as info from '../../redux/contacts/contacts-actions';

function Contacts({ item, clickDelete }) {
  return (
    <ul className={s.list}>
      {item.map(({ id, text: { name, number } }) => {
        return (
          <li key={id} className={s.item}>
            <p>{name}:</p>
            <span className={s.tel}>{number}</span>
            <button
              type="button"
              className={s.button}
              onClick={() => clickDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function showContacts(allContacts, filter) {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(
    ({ text: { name } }) => name && name.includes(normalizedFilter)
  );
}

const mapStateToProps = state => {
  const { contacts, filter } = state.contacts;
  const visibleContacts = showContacts(contacts, filter);

  return { item: visibleContacts };
};

const mapDispatchToProps = dispatch => ({
  clickDelete: id => dispatch(info.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

Contacts.propTypes = {
  clickDelete: PropTypes.func,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
