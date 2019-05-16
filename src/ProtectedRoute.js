import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { authenticate } from './actions';

const ProtectedRoute = ({
  // eslint-disable-next-line no-shadow
  component: Component, authenticate, isAuthenticated, ...rest
}) => {
  useEffect(() => {
    authenticate();
  });

  return (
    <Route
      {...rest}
      render={props => (isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      ))
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  authenticate: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

const mapDispatchToProps = {
  authenticate,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
