import React from 'react';
import PropTypes from 'prop-types';

import placeholderImage from '../assets/images/wimage.png';

const Card2 = ({
  img, imgAlt, title, meta,
}) => (
  <div className="card">
    <div className="image">
      {img ? (
        <img src={img} alt={imgAlt} />
      )
        : (
          <img src={placeholderImage} alt="placeholder" />
        )
        }
    </div>
    <div className="content">
      <div className="title">{title}</div>
      {meta
          && <div className="meta">{meta}</div>
        }
    </div>
  </div>
);

Card2.propTypes = {
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
};

Card2.defaultProps = {
  img: null,
  imgAlt: null,
  meta: null,
};

export default Card2;
