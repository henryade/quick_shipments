import * as actionTypes from '../actionTypes';

const initialState = {
  data: {
    shipments: []
  },
  isLoading: false,
  error: null
};

const GetShipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SHIPMENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_SHIPMENT_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    case actionTypes.GET_SHIPMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default GetShipmentReducer;
