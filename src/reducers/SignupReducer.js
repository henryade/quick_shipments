import * as actionTypes from '../actionTypes';

const initialState = {
  user: {},
  isLoading: false,
  error: null
};

const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.data,
        isLoading: false
      };
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default SignupReducer;
