import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card2 from '../components/Card2';
import { getCourses } from '../actions';

// eslint-disable-next-line no-shadow
const CoursesPage = ({ getCourses, courses }) => {
  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const courseCards = courses.map(course => (
    <Card2
      title={course.name}
      meta={`${course.sessions.length} sessions`}
      key={course._id}
    />
  ));

  return (
    <div className="wrapper">
      {courseCards}
    </div>
  );
};

CoursesPage.propTypes = {
  getCourses: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  courses: state.courses,
});

export default connect(mapStateToProps, { getCourses })(CoursesPage);
