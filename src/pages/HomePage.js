import React from 'react';

import Card from '../components/Card';
import AudioPlayer from '../components/AudioPlayer';

const HomePage = () => (
  <div>
    <div>
      <div className="wrapper">
        <Card />
        <Card />
        <Card />
        <AudioPlayer />
      </div>
    </div>
  </div>
);

export default HomePage;
