import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import reducerForm from './form/form-reducer';

import contactsReducer from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  form: reducerForm,
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
