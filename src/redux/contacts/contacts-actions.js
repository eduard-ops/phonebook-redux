import contactsTypes from './contacts-types';

import { nanoid } from 'nanoid';

const addContact = text => ({
  type: contactsTypes.ADD,
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
});

const showContact = name => ({
  type: contactsTypes.SHOW,
  payload: name,
});

const deleteContact = id => ({
  type: contactsTypes.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: contactsTypes.CHANGE_FILTER,
  payload: value,
});

export { addContact, showContact, deleteContact, changeFilter };
