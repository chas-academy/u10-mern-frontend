import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faMoon } from '@fortawesome/free-regular-svg-icons/index';

const Tabs = () => (
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
);

export default Tabs;
