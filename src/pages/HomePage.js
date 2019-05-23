import React from 'react';

import Item from '../components/Item';

const HomePage = () => (
  <div>
    <div className="header">
      <h1 className="mdc-typography--headline6">Intro Course</h1>
      <p className="mdc-typography--subtitle1">---</p>
    </div>
    <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list mdc-list--dense">
      <Item index="1" title="Day One" duration="8 minutes, 47 seconds" />
      <Item index="2" title="Day Two" duration="8 minutes, 47 seconds" />
      <Item index="3" title="Day Three" duration="8 minutes, 47 seconds" />
      <Item index="4" title="Day Four" duration="8 minutes, 47 seconds" />
      <Item index="5" title="Day Five" duration="8 minutes, 47 seconds" />
    </ul>
  </div>
);

export default HomePage;
