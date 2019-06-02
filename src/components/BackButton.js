import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const BackButton = ({ history }) => (
  <button type="button" className="mdc-fab mdc-fab--mini" aria-label="Favorite" onClick={() => history.goBack()}>
    <span className="mdc-fab__icon material-icons">keyboard_arrow_left</span>
  </button>
);

BackButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default withRouter(BackButton);
