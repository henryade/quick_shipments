import { combineReducers } from 'redux';
import SigninReducer from './SigninReducer';
import SignupReducer from './SignupReducer';
import GetAddressReducer from './GetAddressReducer';
import GetShipmentReducer from './GetShipmentReducer';
import AddAddressReducer from './AddAddressReducer';
import AddShipmentReducer from './AddShipmentReducer';

export default combineReducers({
  SigninReducer,
  SignupReducer,
  GetAddressReducer,
  GetShipmentReducer,
  AddAddressReducer,
  AddShipmentReducer
});
