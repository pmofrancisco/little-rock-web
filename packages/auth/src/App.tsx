import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { History, MemoryHistory } from 'history';
import Login from './components/Login';
import Signup from './components/Signup';

type AppProps = {
  history: History | MemoryHistory;
};

export default ({ history }: AppProps) => (
  <Router history={history}>
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/signup" component={Signup} />
    </Switch>
  </Router>
);
