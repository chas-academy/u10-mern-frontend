import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Item = ({
  index, title, duration, locked, handlePlay,
}) => (
  <Fragment>
    <li
      className={`mdc-list-item ${locked ? 'mdc-list-item--disabled' : ''}`}
      tabIndex={index} // set tabIndex to 0 only on first li, as per MDC web docs on lists
      onKeyDown={handlePlay}
      onClick={handlePlay}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
    >
      {locked
        ? <span className="mdc-list-item__graphic material-icons">lock</span>
        : <span className="mdc-list-item__graphic">{index}</span>
        }
      <span className="mdc-list-item__text">
        <span className="mdc-list-item__primary-text">{title}</span>
        <span className="mdc-list-item__secondary-text">{duration}</span>
      </span>
      {handlePlay
          && <span className="mdc-list-item__meta material-icons">play_circle_filled</span>
        }
    </li>
    <li role="separator" className="mdc-list-divider mdc-list-divider--padded" />
  </Fragment>
);

Item.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  locked: PropTypes.bool,
  handlePlay: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

Item.defaultProps = {
  locked: false,
  handlePlay: false,
};

export default Item;
