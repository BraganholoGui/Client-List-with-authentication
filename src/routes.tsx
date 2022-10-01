import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch, useHistory, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import history from './appHistory';
import store from './reducers/configStore';

const AppRoutes = () => {
  const [url, setUrl] = useState(false);
  const historyP = useHistory();

  async function loadData() {
    const user = localStorage.getItem("user");
    const location = useLocation();
    if ((user == "null" || !user)) {
      setUrl(false)
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      return;
    } else{
      setUrl(true)
      
    }
  }
  useEffect(() => {
    loadData();
    console.log('teste')
  }, [historyP]);

  return (
    <Provider store={store} data-test="component-app">
      <Router history={history}>
        {
          url ?
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path='/' component={Home} />

          <Redirect path="/" to="/home" />
        </Switch>
        : 
        <Switch>
          <Route path='/' component={Login} />
        </Switch>
        }
      </Router>
    </Provider >
  );
};

export default AppRoutes;
