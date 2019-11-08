import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthLinks = ({ data }) => (
  <ul className="right">
    {data.map(({
      name, url, click, Component
    }) => (
      <li key={name}>
        {url ? (
          <NavLink to={url}>{name}</NavLink>
        ) : (
          <a aria-current="page" onClick={click} href="#">
            {name}
          </a>
        )}
      </li>
    ))}
  </ul>
);

AuthLinks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default AuthLinks;
