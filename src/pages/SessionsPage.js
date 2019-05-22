import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card2 from '../components/Card2';


// eslint-disable-next-line no-shadow
const Course = ({ sessions }) => {
  const sessionCards = sessions.map(session => (
    <Card2
      title={session.name}
      meta={`${sessions.session.duration} seconds`}
      key={session._id}
    />
  ));

  return (
    <div className="wrapper">
      {sessionCards}
    </div>
  );
};

Course.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  sessions: state.sessions,
});

export default connect(mapStateToProps)(Course);
