import axios from 'axios';
import * as actionTypes from '../actionTypes';
import { setItems } from '../helpers/Storage';

const { REACT_APP_BASE_URL } = process.env;

export const SigninRequest = () => ({ type: actionTypes.SIGNIN_REQUEST });
export const SigninSuccess = (data) => (
  { type: actionTypes.SIGNIN_SUCCESS, data }
);
export const SigninFailure = (error) => (
  { type: actionTypes.SIGNIN_FAILURE, error }
);

export const SigninAction = (identifier, password) => async (dispatch) => {
  dispatch(SigninRequest());
  try {
    const { data } = await axios.post(`${REACT_APP_BASE_URL}auth/local`,
      { identifier, password }
    );
    setItems({ token: data.jwt, email: data.user.email });
    await dispatch(SigninSuccess(data.user));
  } catch (err) {
    const { message } = err.response.data.message[0].messages[0];
    dispatch(SigninFailure(message));
  }
};
