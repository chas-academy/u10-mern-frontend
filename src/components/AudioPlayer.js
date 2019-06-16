import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


// import track from '../assets/audio/example.mp3';

const AudioPlayer = ({ currentTrack }) => (
  // eslint-disable-next-line jsx-a11y/media-has-caption
  <audio controls src={currentTrack} controlsList="nodownload" />
);

AudioPlayer.propTypes = {
  currentTrack: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

AudioPlayer.defaultProps = {
  currentTrack: false,
};

// Map state to props
const mapStateToProps = state => ({
  currentTrack: state.currentTrack,
});

export default connect(mapStateToProps)(AudioPlayer);
