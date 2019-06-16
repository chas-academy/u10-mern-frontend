import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Course from '../components/Course';
import { getCourses } from '../actions';

// eslint-disable-next-line no-shadow
const LibraryPage = ({ getCourses, courses }) => {
  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const courseCards = Object.keys(courses).map(index => (
    <Course
      to={`/library/${index}`}
      title={courses[index].name}
      duration="3-10"
      key={courses[index]._id}
    />
  ));

  return (
    <Fragment>
      <h1 className="mdc-typography--headline4 page-title">Library</h1>
      <ul className="courses">
        {courseCards}
      </ul>
    </Fragment>
  );
};

LibraryPage.propTypes = {
  getCourses: PropTypes.func.isRequired,
  courses: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  courses: state.courses,
});

export default connect(mapStateToProps, { getCourses })(LibraryPage);
