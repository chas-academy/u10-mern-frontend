import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import image from '../wimage.png';

const Card = () => (
  <div className="card">
    <div className="image">
      <img src={image} alt="" />
    </div>
    <div className="content">
      <div className="title">Day One</div>
      <div className="meta">8 minutes, 58 seconds</div>
    </div>
    <div className="extra">
      <button type="button" className="favorite">
        <FontAwesomeIcon icon={faHeart} />
      </button>
    </div>
  </div>
);

export default Card;
