import axios from 'axios';
import * as actionTypes from '../actionTypes';
import { getItems } from '../helpers/Storage';

const { REACT_APP_BASE_URL } = process.env;

export const AddAddressRequest = () => ({ type: actionTypes.ADD_ADDRESS_REQUEST });
export const AddAddressSuccess = (data) => ({
  type: actionTypes.ADD_ADDRESS_SUCCESS,
  data: { addresses: data }
});
export const AddAddressFailure = (error) => ({ type: actionTypes.ADD_ADDRESS_FAILURE, error });

export const AddAddressAction = (body) => async (dispatch) => {
  dispatch(AddAddressRequest());
  try {
    axios.defaults.headers.common.Authorization = `Bearer ${getItems('token')}`;
    const { data } = await axios.post(`${REACT_APP_BASE_URL}address/add`, body);
    await dispatch(AddAddressSuccess(data));
  } catch (err) {
    const { message } = err.response ? err.response : err;
    dispatch(AddAddressFailure(message));
  }
};
