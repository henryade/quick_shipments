import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthLinks = ({ data }) => (
  <ul className="right">
    {data.map(({ name, url }) => (
      <li key={name}>
        <NavLink to={url}>{name}</NavLink>
      </li>
    ))}
  </ul>
);

AuthLinks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AuthLinks;
