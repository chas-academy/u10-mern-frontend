import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Item from '../components/Item';
import BackButton from '../components/BackButton';


// eslint-disable-next-line no-shadow
const CoursePage = ({ course, subscription }) => {
  let sessionCards;

  // When course has loaded in
  if (course) {
    sessionCards = Object.keys(course.sessions).map((sessionId, index) => (
      <Item
        index={index + 1}
        title={course.sessions[sessionId].title}
        duration={`${course.sessions[sessionId].duration} seconds`}
        locked={index > 1 && subscription.active === false}
        key={sessionId}
      />
    ));
  }

  return (
    <div>
      <BackButton />
      <div className="header">
        <h1 className="mdc-typography--headline5 title">Basics</h1>
        <p className="mdc-typography--subtitle2 subtitle">Live happier and healthier by learning the fundamentals of meditation and mindfulness.</p>
      </div>
      <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list mdc-list--dense">
        {sessionCards}
      </ul>
    </div>
  );
};


CoursePage.propTypes = {
  course: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  subscription: PropTypes.shape({ active: PropTypes.bool }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  course: state.courses[ownProps.match.params.course_id],
  subscription: state.user.subscription,
});

export default connect(mapStateToProps)(CoursePage);
