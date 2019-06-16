import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import Library from './pages/LibraryPage';
import LoginPage from './pages/LoginPage';
import ProgressPage from './pages/ProgressPage';
import ProfilePage from './pages/ProfilePage';
import TimerPage from './pages/TimerPage';
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
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute path="/profile" component={ProfilePage} />
        <ProtectedRoute path="/timer" component={TimerPage} />
        <ProtectedRoute path="/progress" component={ProgressPage} />
        <ProtectedRoute exact path="/library" component={Library} />
        <ProtectedRoute path="/library/:course_id" component={CoursePage} />
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
