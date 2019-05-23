import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card2 from '../components/Card2';


// eslint-disable-next-line no-shadow
const Course = (props) => {
  const { course } = props;

  const sessionCards = [];

  // When course has loaded in
  if (course) {
    Object.keys(course.sessions).forEach(sessionId => sessionCards.push(
      <Card2
        title={course.sessions[sessionId].title}
        meta={`${course.sessions[sessionId].duration} seconds`}
        key={sessionId}
      />,
    ));
    console.log(course, props);
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
