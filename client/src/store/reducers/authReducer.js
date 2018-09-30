import * as actionTypes from '../actions/actionTypes';

const initialState = {
  authenticate: null,
  credit: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      console.log(action.payload);
      return {
        ...state,
        authenticate: action.payload || false,
        credit: action.payload.credits
      };
    case actionTypes.UPDATE_CREDIT:
      return {
        ...state,
        credit: action.payload.credits
      };
    default:
      return state;
  }
};

export default reducer;
