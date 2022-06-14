import { combineReducers } from 'redux';

import contactsTypes from './contacts-types';

const contacts = (
  state = JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  { type, payload }
) => {
  switch (type) {
    case contactsTypes.ADD:
      return [...state, payload];
    case contactsTypes.SHOW:
      return state.filter(({ name }) => name && name.includes(payload));
    case contactsTypes.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case contactsTypes.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
