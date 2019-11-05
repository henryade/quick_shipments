import * as actionTypes from '../actionTypes';

const initialState = {
  user: {},
  isLoading: false,
  error: null
};

const SigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_REQUEST:
      return {
        state,
        isLoading: true
      };
    case actionTypes.SIGNIN_SUCCESS:
      return {
        state,
        user: action.data,
        isLoading: false
      };
    case actionTypes.SIGNIN_FAILURE:
      return {
        state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default SigninReducer;
