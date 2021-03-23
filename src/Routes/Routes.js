import React from 'react';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import NotFound from '../Pages/NotFound/NotFound';
import Login from '../Pages/Login/Login'
import PrivateRoute from "./PrivateRoute";
import Private from './Private';

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/private" component={Private} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
}
