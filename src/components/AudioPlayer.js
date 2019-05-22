import React from 'react';
import track from '../assets/audio/example.mp3';

const AudioPlayer = () => (
  // eslint-disable-next-line jsx-a11y/media-has-caption
  <audio controls src={track} controlsList="nodownload" />
);

export default AudioPlayer;
