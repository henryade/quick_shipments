import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import LogOut from '../helpers/LogOut';
import NotFound from './Pages/NotFound';
import { AuthenticatedRoute, UnAuthenticatedRoute } from '../helpers/Authentication';

const Router = () => (
  <Switch>
    <UnAuthenticatedRoute exact path="/" component={SignUp} />
    <UnAuthenticatedRoute exact path="/signin" component={SignIn} />
    <AuthenticatedRoute exact={false} path="/home" component={DashBoard} />
    <Route exact path="/logout" component={LogOut} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
