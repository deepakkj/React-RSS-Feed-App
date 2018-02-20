import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import AppScreen from './../components/AppScreen';
import MainScreen from './../components/MainScreen';
import NotFoundPage from './../components/NotFoundPage';


const AppRouter = () => (
  <BrowserRouter>
  <div>
      <Switch>
          <Route path="/" component={AppScreen} />
          <Route path="/:id" component={MainScreen} exact={true} />
          <Route component={NotFoundPage} />
      </Switch>
  </div>
  </BrowserRouter>
);

export default AppRouter;
