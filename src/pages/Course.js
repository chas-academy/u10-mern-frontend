import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Item from '../components/Item';
import AudioPlayer from '../components/AudioPlayer';
import { setTrack } from '../actions';

const Course = ({
  // eslint-disable-next-line no-shadow
  course, subscription, currentTrack, setTrack,
}) => {
  let sessionCards;

  // Set and play the track
  const handlePlay = (sessionId, e) => {
    e.preventDefault();

    setTrack(course._id, sessionId);
  };

  // When course has loaded in
  if (course) {
    sessionCards = Object.keys(course.sessions).map((sessionId, index) => (
      <Item
        index={index + 1}
        title={course.sessions[sessionId].title}
        duration={`${course.sessions[sessionId].duration} seconds`}
        key={sessionId}
        locked={index > 1 && subscription.active === false}
        handlePlay={e => handlePlay(sessionId, e)}
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
      {currentTrack && (<AudioPlayer />)}
    </div>
  );
};


Course.propTypes = {
  course: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  subscription: PropTypes.shape({ active: PropTypes.bool }).isRequired,
  currentTrack: PropTypes.oneOf([PropTypes.string, PropTypes.bool]),
  setTrack: PropTypes.func.isRequired,
};

Course.defaultProps = {
  currentTrack: false,
};

const mapStateToProps = (state, ownProps) => ({
  course: state.courses[ownProps.match.params.course_id],
  subscription: state.user.subscription,
  currentTrack: state.currentTrack,
});

export default connect(mapStateToProps, { setTrack })(Course);
