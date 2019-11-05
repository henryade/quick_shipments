import React from 'react';
import { Link } from 'react-router-dom';
import { UnAuthorizedLinks, AuthorizedLinks } from '../../helpers/AuthData';
import Authlinks from './AuthLinks';
import { getItems } from '../../helpers/Storage';

const Navbar = () => (
  <nav className="nav-wrapper blue darken-2">
    <div className="container">
      <Link to="/" className="brand-logo">
        Quick Shipments
      </Link>
      <Authlinks
        data={
          getItems('token') === null
            ? UnAuthorizedLinks
            : AuthorizedLinks(getItems('initials'))
        }
      />
    </div>
  </nav>
);

export default Navbar;
