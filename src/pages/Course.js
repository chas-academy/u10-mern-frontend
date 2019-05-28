import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Item from '../components/Item';


// eslint-disable-next-line no-shadow
const Course = (props) => {
  const { course } = props;

  let sessionCards;

  // When course has loaded in
  if (course) {
    sessionCards = Object.keys(course.sessions).map((sessionId, index) => (
      <Item
        index={index + 1}
        title={course.sessions[sessionId].title}
        duration={`${course.sessions[sessionId].duration} seconds`}
        key={sessionId}
      />
    ));
  }

  return (
    <div>
      <button type="button" className="mdc-fab mdc-fab--mini" aria-label="Favorite">
        <span className="mdc-fab__icon material-icons">keyboard_arrow_left</span>
      </button>
      <div className="header">
        <h1 className="mdc-typography--headline6">{course.name}</h1>
        <p className="mdc-typography--subtitle2">Live happier and healthier by learning the fundamentals of meditation and mindfulness.</p>
      </div>
      <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list mdc-list--dense">
        {sessionCards}
      </ul>
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
