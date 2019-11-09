import axios from 'axios';
import * as actionTypes from '../actionTypes';
import { getItems } from '../helpers/Storage';

const { REACT_APP_BASE_URL } = process.env;

export const GetShipmentRequest = () => (
  { type: actionTypes.GET_SHIPMENT_REQUEST }
);
export const GetShipmentSuccess = (data) => (
  { type: actionTypes.GET_SHIPMENT_SUCCESS, data: { shipments: data } }
);
export const GetShipmentFailure = (error) => (
  { type: actionTypes.GET_SHIPMENT_FAILURE, error }
);

export const GetShipmentAction = () => async (dispatch) => {
  dispatch(GetShipmentRequest());
  try {
    axios.defaults.headers.common.Authorization = `Bearer ${getItems('token')}`;
    const { data } = await axios.get(`${REACT_APP_BASE_URL}shipments?user=${getItems('id')}`);
    await dispatch(GetShipmentSuccess(data));
  } catch (err) {
    const { message } = err.response
      ? err.response : err;
    dispatch(GetShipmentFailure(message));
  }
};
