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
    const { data } = {
      data: {
        id: 8,
        origin: {
          city: 'Surulere',
          name: 'chekwas',
          phone: '087372593987',
          state: 'Lagos',
          street: '1 akin street',
          country: 'Nigeria'
        },
        destination: {
          city: 'Enugu',
          name: 'Dennis',
          phone: '345456765',
          state: 'Enugu',
          street: '12 new heaven street',
          country: 'Nigeria'
        },
        courier: {
          id: 2,
          name: 'FedEx',
          logo: null,
          date_created: '2019-10-03T00:00:00.000Z',
          last_updated: '2019-10-09T00:00:00.000Z',
          is_active: true,
          email: 'fedex@sendbox.ng',
          phone: '08123243353',
          otp: 324355,
          created_at: '2019-10-29T12:38:44.418Z',
          updated_at: '2019-10-29T12:39:08.002Z'
        },
        item: {
          quantity: '1',
          description: 'PS4'
        },
        weight: 10,
        user: {
          id: 16,
          username: 'ambrosini',
          email: 'masimoab@mail.com',
          provider: 'local',
          confirmed: true,
          blocked: null,
          role: 2,
          phone: null,
          created_at: '2019-11-01T04:55:58.312Z',
          updated_at: '2019-11-01T04:55:58.323Z'
        },
        created_at: '2019-11-07T21:15:17.105Z',
        updated_at: '2019-11-07T21:15:17.114Z'
      }
    };
    // await axios.post(`${REACT_APP_BASE_URL}shipments/add`, body);
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
