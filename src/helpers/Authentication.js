/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { getItems, clearItems } from './Storage';

export const isAuthenticated = () => !!getItems('token');

export const removeAuthentication = () => {
  clearItems();
  window.location = '/signin';
};

const enforceAuthentication = () => {
  window.location = '/home';
};

export const AuthenticatedRoute = ({
  component: Component,
  exact,
  path,
}) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      removeAuthentication()
    ))}
  />
);

export const UnAuthenticatedRoute = ({
  component: Component,
  exact,
  path,
}) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (!isAuthenticated() ? (
      <Component {...props} />
    ) : (
      enforceAuthentication()
    ))}
  />
);

UnAuthenticatedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired
};


AuthenticatedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired
};
