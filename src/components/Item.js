import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Item = ({ index, title, duration }) => (
  <Fragment>
    <li className="mdc-list-item demo">
      <span className="mdc-list-item__graphic">{index}</span>
      <span className="mdc-list-item__text">
        <span className="mdc-list-item__primary-text">{title}</span>
        <span className="mdc-list-item__secondary-text">{duration}</span>
      </span>
      <span className="mdc-list-item__meta material-icons">play_circle_filled</span>
    </li>
    <li role="separator" className="mdc-list-divider mdc-list-divider--padded" />
  </Fragment>
);

Item.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default Item;
