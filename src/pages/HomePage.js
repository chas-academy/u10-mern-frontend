import React, { Fragment } from 'react';

import BackButton from '../components/BackButton';
import Item from '../components/Item';

const HomePage = () => (
  <Fragment>
    <BackButton />
    <div className="header">
      <h1 className="mdc-typography--headline5 title">Basics</h1>
      <p className="mdc-typography--subtitle2 subtitle">Live happier and healthier by learning the fundamentals of meditation and mindfulness.</p>
    </div>
    <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list mdc-list--dense">
      <Item index="1" title="Day One" duration="8 minutes, 47 seconds" locked={false} />
      <Item index="2" title="Day Two" duration="8 minutes, 47 seconds" locked={false} />
      <Item index="3" title="Day Three" duration="8 minutes, 47 seconds" locked />
      <Item index="4" title="Day Four" duration="8 minutes, 47 seconds" locked />
      <Item index="5" title="Day Five" duration="8 minutes, 47 seconds" locked />
      <Item index="6" title="Day Six" duration="8 minutes, 47 seconds" locked />
      <Item index="7" title="Day Seven" duration="8 minutes, 47 seconds" locked />
      <Item index="8" title="Day Eight" duration="8 minutes, 47 seconds" locked />
      <Item index="9" title="Day Nine" duration="8 minutes, 47 seconds" locked />
      <Item index="10" title="Day Ten" duration="8 minutes, 47 seconds" locked />
      <Item index="11" title="Day Eleven" duration="8 minutes, 47 seconds" locked />
      <Item index="11" title="Day Twelve" duration="8 minutes, 47 seconds" locked />
      <Item index="11" title="Day Thirteen" duration="8 minutes, 47 seconds" locked />
      <Item index="11" title="Day Fourteen" duration="8 minutes, 47 seconds" locked />
    </ul>
  </Fragment>
);

export default HomePage;
