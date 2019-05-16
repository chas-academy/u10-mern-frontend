import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const App = () => (
  <Fragment>
    <ul className="footer">
      <li>
        <NavLink exact to="/">
          <FontAwesomeIcon icon={faMoon} className="icon" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login">
          <FontAwesomeIcon icon={faMoon} className="icon" />
          Home
        </NavLink>
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
