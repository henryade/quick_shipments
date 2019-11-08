import * as actionTypes from '../actionTypes';

const initialState = {
  data: {
    addresses: []
  },
  isLoading: false,
  error: null
};

const AddAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ADDRESS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    case actionTypes.ADD_ADDRESS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default AddAddressReducer;
