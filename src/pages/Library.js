import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card2 from '../components/Card2';
import { getCourses } from '../actions';

// eslint-disable-next-line no-shadow
const Library = ({ getCourses, courses }) => {
  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const courseCards = [];

  Object.keys(courses).forEach((key) => {
    courseCards.push(
      <Card2
        title={courses[key].name}
        meta={`${Object.keys(courses[key].sessions).length} sessions`}
        key={courses[key]._id}
      />,
    );
  });


  return (
    <div className="wrapper">
      {courseCards}
    </div>
  );
};

Library.propTypes = {
  getCourses: PropTypes.func.isRequired,
  courses: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  courses: state.courses,
});

export default connect(mapStateToProps, { getCourses })(Library);
