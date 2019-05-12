import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: true,
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (fakeAuth.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to="/login"
      />
    ))
    }
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
