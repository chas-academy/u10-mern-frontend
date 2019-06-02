import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PortfolioPage = ({ user }) => (
  <div>
    <p>{user.name}</p>
  </div>
);

PortfolioPage.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(PortfolioPage);
