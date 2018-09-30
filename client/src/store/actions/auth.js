import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
};

export const updateCredit = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: actionTypes.UPDATE_CREDIT, payload: res.data });
};
