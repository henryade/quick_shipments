import React from 'react';
import PropTypes from 'prop-types';
import { clearItems } from '../../helpers/Storage';

const LogOut = ({ history }) => {
  clearItems();
  history.push('/signin');
  return <h1>Bye</h1>;
};

LogOut.propTypes = {
  history: PropTypes.object.isRequired,
};

export default LogOut;
