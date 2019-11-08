import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SideMenu from '../Common/SideMenu';
import AddressList from './AddressList';
import Shipmentlist from './ShipmentList';
import NewAddress from './NewAddress';
import NewShipment from './NewShipment';
import NotFound from './NotFound';

const DashBoard = () => {
  const { path } = useRouteMatch();
  return (
    <div className="row">
      <SideMenu />
      <div className="col s12 m8 l6 offset-l3 offset-m2">
        <div className="container dashboard" />
        <Switch>
          <Route exact path={path}>
            <h3 className="center-align">DashBoard</h3>
          </Route>
          <Route exact path={`${path}/addresses`}>
            <AddressList />
          </Route>
          <Route exact path={`${path}/shipments`}>
            <Shipmentlist />
          </Route>
          <Route exact path={`${path}/addaddress`}>
            <NewAddress />
          </Route>
          <Route exact path={`${path}/addshipment`}>
            <NewShipment />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default DashBoard;
