import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import history from '../appHistory';
import store from '../reducers/configStore';
import { useAuth } from '../contexts/auth';
import PublicRoutes from './puclibRoutes';
import PrivateRoutes from './privateRoutes';

const AppRoutes = () => {
  const { signed } = useAuth();
  return signed ? <PublicRoutes /> : <PrivateRoutes />;
};

export default AppRoutes;
