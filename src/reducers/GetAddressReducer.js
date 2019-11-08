import * as actionTypes from '../actionTypes';

const initialState = {
  data: {
    addresses: []
  },
  isLoading: false,
  error: null
};

const GetAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ADDRESS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_ADDRESS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    case actionTypes.GET_ADDRESS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default GetAddressReducer;
