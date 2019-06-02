import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Item from '../components/Item';
import { getCourses } from '../actions';

// eslint-disable-next-line no-shadow
const Library = ({ getCourses, courses }) => {
  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const courseCards = Object.keys(courses).map((key, index) => (
    <Link to={`/library/${key}`} key={key} style={{ textDecoration: 'none' }}>
      <Item
        index={index + 1}
        title={courses[key].name}
        duration={`${Object.keys(courses[key].sessions).length} sessions`}
        key={courses[key]._id}
      />
    </Link>
  ));

  return (
    <div>
      <button type="button" className="mdc-fab mdc-fab--mini" aria-label="Favorite">
        <span className="mdc-fab__icon material-icons">keyboard_arrow_left</span>
      </button>
      <div className="header">
        <h1 className="mdc-typography--headline6">Courses</h1>
        <p className="mdc-typography--subtitle2">Live happier and healthier by learning the fundamentals of meditation and mindfulness.</p>
      </div>
      <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list mdc-list--dense">
        {courseCards}
      </ul>
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
