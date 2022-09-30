import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import history from './appHistory';
// import Layout from './components/layout';
import store from './reducers/configStore';

const AppRoutes = () => {
  return (
    <Provider store={store} data-test="component-app">
      <Router history={history}>
        {/* <Layout> */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Redirect path="/" to="/home" />
        </Switch>
        {/* </Layout> */}
      </Router>
    </Provider >
  );
};

export default AppRoutes;
