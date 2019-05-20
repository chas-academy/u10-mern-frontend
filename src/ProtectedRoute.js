import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component, isAuthenticated, ...rest
}) => (
  <Route
    {...rest}
    render={props => (isAuthenticated
      ? <Component {...props} />
      : <Redirect to="/login" />
    )
    }
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(ProtectedRoute);
