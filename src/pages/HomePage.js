import React, { useEffect } from 'react';
import Card from '../components/Card';

const HomePage = () => {
  useEffect(() => {
    console.log('hi');
  });

  return (
    <div>
      <div>
        <div className="wrapper">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
