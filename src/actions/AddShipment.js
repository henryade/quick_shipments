import axios from 'axios';
import * as actionTypes from '../actionTypes';
import { getItems } from '../helpers/Storage';

const { REACT_APP_BASE_URL } = process.env;
axios.defaults.headers.common.Authorization = `Bearer ${getItems('token')}`;

export const AddShipmentRequest = () => ({ type: actionTypes.ADD_SHIPMENT_REQUEST });
export const AddShipmentSuccess = (data) => ({
  type: actionTypes.ADD_SHIPMENT_SUCCESS,
  data
});
export const GetCourierSuccess = (data) => ({
  type: actionTypes.GET_COURIER_SUCCESS,
  data
});

export const GetRequestFailure = (error) => ({ type: actionTypes.GET_REQUEST_FAILURE, error });
export const AddShipmentFailure = (error) => ({ type: actionTypes.ADD_SHIPMENT_FAILURE, error });

export const AddShipmentAction = (body) => async (dispatch) => {
  dispatch(AddShipmentRequest());
  try {
    const { data } = await axios.post(`${REACT_APP_BASE_URL}shipments/add`, body);
    await dispatch(AddShipmentSuccess(data));
  } catch (err) {
    const { message } = err.response ? err.response : err;
    dispatch(AddShipmentFailure(message));
  }
};

export const GetCourierAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${REACT_APP_BASE_URL}couriers`);
    await dispatch(GetCourierSuccess(data.map(({ name, id }) => ({ name, id }))));
  } catch (err) {
    const response = err.response ? err.response : err;
    dispatch(GetRequestFailure(response));
  }
};
