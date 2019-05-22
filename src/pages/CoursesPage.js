import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from '../components/Card';
import { getCourses } from '../actions';

// eslint-disable-next-line no-shadow
const CoursesPage = ({ getCourses }) => {
  useEffect(() => {
    getCourses();
  });
  return (
    <div className="wrapper">
      <Card />
    </div>
  );
};

CoursesPage.propTypes = {
  getCourses: PropTypes.func.isRequired,
};

export default connect(null, { getCourses })(CoursesPage);
