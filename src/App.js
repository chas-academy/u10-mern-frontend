import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import Card from './components/Card';
import Login from './pages/Login';

const App = () => (
  <Fragment>
    <div className="wrapper">
      <Card />
      <Card />
      <Card />
    </div>
    <Login />
    <ul className="footer">
      <li>
        <FontAwesomeIcon icon={faMoon} className="icon active" />
        Home
      </li>
      <li>
        <FontAwesomeIcon icon={faMoon} className="icon" />
        Home
      </li>
      <li>
        <FontAwesomeIcon icon={faMoon} className="icon" />
        Home
      </li>
      <li>
        <FontAwesomeIcon icon={faMoon} className="icon" />
        Home
      </li>
    </ul>
  </Fragment>
);

export default App;
