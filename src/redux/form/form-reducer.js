import actionTypes from './actions-types';

const initialState = { number: '', name: '' };

const reducerForm = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.NUMBER:
      return { ...state, number: payload };
    case actionTypes.RESET:
      return initialState;
    case actionTypes.NAME:
      return { ...state, name: payload };
    default:
      return state;
  }
};

export default reducerForm;
