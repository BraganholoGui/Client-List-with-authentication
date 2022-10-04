import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import history from './appHistory';
import store from './reducers/configStore';

const AppRoutes = () => {
  const [url, setUrl] = useState<any | null>(null);

  async function loadData() {
    const user = localStorage.getItem("user");

    if ((user == "null" || !user)) {
      setUrl(localStorage.getItem("user"))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      return;
    } else {
      setUrl(true)

    }
  }
  useEffect(() => {
    loadData();
  }, []);

  return (
    <Provider store={store} data-test="component-app">
      <Router history={history}>
        {/* {
          url ? */}
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
        {/* : 
        <Switch>
          <Route path='/' component={Login} />
        </Switch>
        }  */}
      </Router>
    </Provider >
  );
};

export default AppRoutes;
