import s from './Filter.module.css';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { changeFilter } from 'redux/contacts/contacts-actions';

function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find Contacts by name
      <input value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
