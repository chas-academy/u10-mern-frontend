import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import Library from './pages/Library';
import Course from './pages/Course';
import LoginPage from './pages/LoginPage';
import { authenticate, getCourses } from './actions';


// eslint-disable-next-line no-shadow
const App = ({ authenticate, getCourses }) => {
  useEffect(() => {
    authenticate();
    getCourses();
  });

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute exact path="/library" component={Library} />
        <ProtectedRoute path="/library/:course_id" component={Course} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  authenticate: PropTypes.func.isRequired,
  getCourses: PropTypes.func.isRequired,
};

export default connect(null, { authenticate, getCourses })(App);
