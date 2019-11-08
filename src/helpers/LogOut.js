import { clearItems } from './Storage';

const LogOut = () => {
  clearItems();
  window.location = '/signin';
};

export default LogOut;
