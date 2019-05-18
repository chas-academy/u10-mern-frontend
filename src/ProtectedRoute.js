import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { authenticate } from './actions';

const ProtectedRoute = ({
  // eslint-disable-next-line no-shadow
  authenticate, match, location, history, ...rest
}) => {
  useEffect(() => {
    authenticate(() => history.push('/login'));
  });

  return (
    <Route {...rest} />
  );
};

ProtectedRoute.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  authenticate: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { authenticate })(ProtectedRoute));
