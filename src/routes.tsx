import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import history from './appHistory';
import store from './reducers/configStore';

const AppRoutes = () => {

  return (
    <Provider store={store} data-test="component-app">
      <Router history={history}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path='/' component={Home} />

          <Redirect path="/" to="/home" />
        </Switch>
      </Router>
    </Provider >
  );
};

export default AppRoutes;
