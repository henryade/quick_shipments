import axios from 'axios';
import * as actionTypes from '../actionTypes';
import { setItems } from '../helpers/Storage';

const { REACT_APP_BASE_URL } = process.env;

export const SignupRequest = () => ({ type: actionTypes.SIGNUP_REQUEST });
export const SignupSuccess = (data) => (
  { type: actionTypes.SIGNUP_SUCCESS, data }
);
export const SignupFailure = (error) => (
  { type: actionTypes.SIGNUP_FAILURE, error }
);

export const SignupAction = (body) => async (dispatch) => {
  dispatch(SignupRequest());
  try {
    const { data } = await axios
      .post(`${REACT_APP_BASE_URL}auth/local/register`, body);
    setItems({ token: data.jwt, id: data.user.id, name: data.user.username });
    await dispatch(SignupSuccess(data.user));
  } catch (err) {
    let message;
    if (err.response) {
      if ( typeof err.response.data.message === 'string') {
        message = err.response.data.error;
      } else message = err.response.data.message[0].messages[0].message;
    } else message = err.message;

    dispatch(SignupFailure(message));
  }
};
