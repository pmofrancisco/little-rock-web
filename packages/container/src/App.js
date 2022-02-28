import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/Header';

const AuthLazy = lazy(() => import('./components/AuthApp'));
const AboutUsLazy = lazy(() => import('./components/AboutUsApp'));
const HomeLazy = lazy(() => import('./components/HomeApp'));
const browserHistory = createBrowserHistory();

export default () => {
  return (
    <Router history={browserHistory}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/auth" component={AuthLazy} />
          <Route path="/about-us" component={AboutUsLazy} />
          <Route path="/" component={HomeLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
};
