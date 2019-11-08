import React from 'react';
import { Link } from 'react-router-dom';
import { SideNav, SideNavItem, Button } from 'react-materialize';
import { getItems } from '../../helpers/Storage';

const SideMenu = () => (
  <div>
    <SideNav trigger={<button className="hambugger btn-link" type="button"><i className="fas fa-bars" /></button>} options={{ closeOnClick: true, draggable: true }}>
      <SideNavItem
        userView
        user={{
          background:
              'https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80',
          name: `Welcome ${getItems('name')}`
        }}
      />
      <li>
        <Link className="side-links" to="/home/shipments">
          <i className="fa fa-shipping-fast" />
            Shipments
        </Link>
      </li>
      <li>
        <Link className="side-links" to="/home/addresses">
          <i className="fa fa-map-marker-alt" />
            Addresses
        </Link>
      </li>
      <SideNavItem divider />
      <SideNavItem subheader>Add New Details</SideNavItem>
      <li>
        <Link className="side-links" to="/home/addaddress">
            Add Address
        </Link>
      </li>
      <li>
        <Link className="side-links" to="/home/addshipment">
            Add Shipment
        </Link>
      </li>
    </SideNav>
  </div>
);

export default SideMenu;
