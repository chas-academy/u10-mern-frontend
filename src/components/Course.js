import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import placeholder from '../assets/images/placeholder.png';

const Course = ({ title, duration, to }) => (
  <Fragment>
    <li className="course">
      <Link to={to}>
        <img src={placeholder} alt="" />
        <h2 className="mdc-typography--headline6">{title}</h2>
        <p className="mdc-typography--overline">
          {duration}
          {' '}
        min
        </p>
      </Link>
    </li>
  </Fragment>
);

Course.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Course;
