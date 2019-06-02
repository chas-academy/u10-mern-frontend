import React, { Fragment } from 'react';

import Course from '../components/Course';

const LibraryPage = () => (
  <Fragment>
    <h1 className="mdc-typography--headline4 page-title">Library</h1>
    <ul className="courses">
      <Course title="Basics" duration="18" />
      <Course title="The Logic of Practice" duration="6" />
      <Course title="Mental Training" duration="6" />
      <Course title="Gratitude" duration="12" />
      <Course title="Solving Problems" duration="15" />
      <Course title="Free Will" duration="14" />
    </ul>
  </Fragment>
);

export default LibraryPage;
