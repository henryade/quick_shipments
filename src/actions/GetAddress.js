import axios from 'axios';
import * as actionTypes from '../actionTypes';
import { getItems } from '../helpers/Storage';

const { REACT_APP_BASE_URL } = process.env;

export const GetAddressRequest = () => (
  { type: actionTypes.GET_ADDRESS_REQUEST }
);
export const GetAddressSuccess = (data) => (
  { type: actionTypes.GET_ADDRESS_SUCCESS, data: { addresses: data } }
);
export const GetAddressFailure = (error) => (
  { type: actionTypes.GET_ADDRESS_FAILURE, error }
);

export const GetAddressAction = () => async (dispatch) => {
  dispatch(GetAddressRequest());
  try {
    axios.defaults.headers.common.Authorization = `Bearer ${getItems('token')}`;
    const { data } = await axios.get(`${REACT_APP_BASE_URL}addresses?user=16`);
    await dispatch(GetAddressSuccess(data));
  } catch (err) {
    const { message } = err.response
      ? err.response : err;
    dispatch(GetAddressFailure(message));
  }
};
