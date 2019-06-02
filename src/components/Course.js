import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import placeholder from '../assets/images/placeholder.png';

const Course = ({ title, duration }) => (
  <Fragment>
    <li className="course">
      <img src={placeholder} alt="" />
      <h2 className="mdc-typography--headline6">{title}</h2>
      <p className="mdc-typography--overline">
        {duration}
        {' '}
        min
      </p>
    </li>
  </Fragment>
);

Course.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default Course;
