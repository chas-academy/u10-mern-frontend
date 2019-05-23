import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { authenticate } from './actions';

// eslint-disable-next-line no-shadow
const App = ({ authenticate }) => {
  useEffect(() => {
    authenticate();
  });

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default connect(null, { authenticate })(App);
