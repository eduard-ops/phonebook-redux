import actionTypes from './actions-types';

export const name = value => ({
  type: actionTypes.NAME,
  payload: value,
});

export const number = value => ({
  type: actionTypes.NUMBER,
  payload: value,
});

export const reset = () => ({
  type: actionTypes.RESET,
  payload: null,
});
