import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Item from '../components/Item';
import AudioPlayer from '../components/AudioPlayer';
import BackButton from '../components/BackButton';
import { setTrack } from '../actions';


const CoursePage = ({
  // eslint-disable-next-line no-shadow
  course, subscription, currentTrack, setTrack,
}) => {
  let sessionCards;

  const secondsToMinutes = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    return `${minutes} min ${seconds} sec`;
  };
  // Set and play the track
  const handlePlay = (sessionId, e) => {
    e.preventDefault();
    // On click, Space key or Enter key

    if (e.type === 'click' || e.keyCode === 32 || e.keyCode === 13) {
      setTrack(course._id, sessionId);
    }
  };

  // When course has loaded in
  if (course) {
    sessionCards = Object.keys(course.sessions).map((sessionId, index) => (
      <Item
        index={index + 1}
        title={course.sessions[sessionId].title}
        duration={secondsToMinutes(course.sessions[sessionId].duration)}
        locked={index > 1 && subscription.active === false}
        key={sessionId}
        handlePlay={e => (index > 1 && subscription.active === false ? console.log('hi') : handlePlay(sessionId, e))}
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
      {currentTrack && (<AudioPlayer />)}
    </div>
  );
};


CoursePage.propTypes = {
  course: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  subscription: PropTypes.shape({ active: PropTypes.bool }).isRequired,
  currentTrack: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  setTrack: PropTypes.func.isRequired,
};

CoursePage.defaultProps = {
  currentTrack: false,
};

const mapStateToProps = (state, ownProps) => ({
  course: state.courses[ownProps.match.params.course_id],
  subscription: state.user.subscription,
  currentTrack: state.currentTrack,
});

export default connect(mapStateToProps, { setTrack })(CoursePage);
