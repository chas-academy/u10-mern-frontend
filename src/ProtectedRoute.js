import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component, isAuthenticating, isAuthenticated, ...rest
}) => (isAuthenticating
  ? null
  : (
    <Route
      {...rest}
      render={props => (isAuthenticated
        ? <Component {...props} />
        : <Redirect to="/login" />
      )
      }
    />
  )
);

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthenticating: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticating: state.isAuthenticating,
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(ProtectedRoute);
