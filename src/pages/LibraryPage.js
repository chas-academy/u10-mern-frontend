import React, { Fragment } from 'react';

import Course from '../components/Course';

const LibraryPage = () => (
  <Fragment>
    <h1 className="mdc-typography--headline4 page-title">Library</h1>
    <ul className="courses">
      <Course title="Basics" duration="3-6" />
      <Course title="The Logic of Practice" duration="2-8" />
      <Course title="Mental Training" duration="4-12" />
      <Course title="Gratitude" duration="1-4" />
      <Course title="Solving Problems" duration="3-10" />
      <Course title="Free Will" duration="10-20" />
    </ul>
  </Fragment>
);

export default LibraryPage;
