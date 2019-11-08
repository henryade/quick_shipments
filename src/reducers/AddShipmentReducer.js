import * as actionTypes from '../actionTypes';

const initialState = {
  data: {
    shipments: [],
    couriers: []
  },
  isLoading: false,
  error: null
};

const AddShipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SHIPMENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.ADD_SHIPMENT_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          shipments: action.data
        },
        isLoading: false
      };
    case actionTypes.ADD_SHIPMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case actionTypes.GET_COURIER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          couriers: action.data
        }
      };
    default:
      return state;
  }
};

export default AddShipmentReducer;
