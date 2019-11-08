import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UnAuthorizedLinks, AuthorizedLinks } from '../../helpers/AuthData';
import Authlinks from './AuthLinks';
import { getItems } from '../../helpers/Storage';

const NavBar = () => {
  const data = getItems('token') === null ? UnAuthorizedLinks : AuthorizedLinks;
  return (
    <nav className="nav-wrapper blue darken-2">
      <div className="nav-container">
        <Link to="/" className="brand-logo">
          Quick Shipments
        </Link>
        <Authlinks data={data} />
      </div>
    </nav>
  );
};

export default NavBar;
