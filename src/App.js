import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const App = () => (
  <Router>
    <Switch>
      <ProtectedRoute exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </Router>
);

export default App;
