import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddressList from './Pages/AddressList';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import LogOut from './Common/LogOut';

const Router = () => (
  <Switch>
    <Route exact path="/" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Route path="/home" component={AddressList} />
    <Route path="/logout" component={LogOut} />
  </Switch>
);

export default Router;
