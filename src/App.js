import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import LibraryPage from './pages/LibraryPage';
import TimerPage from './pages/TimerPage';
import ProgressPage from './pages/ProgressPage';
import LoginPage from './pages/LoginPage';
import Tabs from './components/Tabs';
import { authenticate } from './actions';

// eslint-disable-next-line no-shadow
const App = ({ authenticate }) => {
  useEffect(() => {
    authenticate();
  });

  return (
    <Router>
      <div className="layout">
        <Route exact path="/" component={HomePage} />
        <ProtectedRoute path="/portfolio" component={PortfolioPage} />
        <Route path="/library" component={LibraryPage} />
        <ProtectedRoute path="/timer" component={TimerPage} />
        <ProtectedRoute path="/progress" component={ProgressPage} />
        <Route path="/login" component={LoginPage} />
      </div>
      <Tabs />
    </Router>
  );
};

App.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default connect(null, { authenticate })(App);
