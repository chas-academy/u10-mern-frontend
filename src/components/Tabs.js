import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

const Tabs = ({ location }) => (
  location.pathname !== '/login' && (
  <nav>
    <ul className="tabs">
      <li className="tab">
        <NavLink exact to="/">
          <span className="material-icons">home</span>
        Home
        </NavLink>
      </li>
      <li className="tab">
        <NavLink to="/library">
          <span className="material-icons">spa</span>
        Library
        </NavLink>
      </li>
      <li className="tab">
        <NavLink to="/timer">
          <span className="material-icons">timer</span>
          Timer
        </NavLink>
      </li>
      <li className="tab">
        <NavLink to="/progress">
          <span className="material-icons">trending_up</span>
        Progress
        </NavLink>
      </li>
    </ul>
  </nav>
  )
);

Tabs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};

export default withRouter(Tabs);
