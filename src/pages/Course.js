import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card2 from '../components/Card2';


// eslint-disable-next-line no-shadow
const Course = (props) => {
  const { course } = props;

  let sessionCards;

  // When course has loaded in
  if (course) {
    sessionCards = Object.keys(course.sessions).map(sessionId => (
      <Card2
        title={course.sessions[sessionId].title}
        meta={`${course.sessions[sessionId].duration} seconds`}
        key={sessionId}
      />
    ));
  }

  return (
    <div className="wrapper">
      {sessionCards}
    </div>
  );
};


Course.propTypes = {
  course: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  course: state.courses[ownProps.match.params.course_id],
});

export default connect(mapStateToProps)(Course);
