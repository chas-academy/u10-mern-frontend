import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import Library from './pages/Library';
import Course from './pages/Course';
import LoginPage from './pages/LoginPage';
// import LibraryPage from './pages/LibraryPage';
import ProgressPage from './pages/ProgressPage';
import Tabs from './components/Tabs';
import { authenticate, getCourses } from './actions';


// eslint-disable-next-line no-shadow
const App = ({ authenticate, getCourses }) => {
  useEffect(() => {
    authenticate();
    getCourses();
  });

  return (
    <Router>
      <div className="layout">
        <ProtectedRoute exact path="/" component={HomePage} />
        {/* <ProtectedRoute path="/library" component={LibraryPage} /> */}
        <ProtectedRoute path="/progress" component={ProgressPage} />
        <ProtectedRoute exact path="/library" component={Library} />
        <ProtectedRoute path="/library/:course_id" component={Course} />
        <Route path="/login" component={LoginPage} />
      </div>
      <Tabs />
    </Router>
  );
};

App.propTypes = {
  authenticate: PropTypes.func.isRequired,
  getCourses: PropTypes.func.isRequired,
};

export default connect(null, { authenticate, getCourses })(App);
