import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ProfilePage = ({ user }) => (
  <div>
    <p>{user.name}</p>
  </div>
);

ProfilePage.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProfilePage);
