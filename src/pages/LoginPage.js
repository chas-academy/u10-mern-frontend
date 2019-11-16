import React from 'react';

import ninjaAnimation from '../assets/images/ninja.gif';

const LoginPage = () => (
  <div className="login-page">
    <img src={ninjaAnimation} alt="" className="ninja-animation" />
    <h1 className="mdc-typography--headline4 logo">Mern</h1>
    <div className="socials">
      <a href={`${process.env.REACT_APP_BACKEND_URL}/auth/facebook`}>
        <button type="button" className="social-button">
          <span className="facebook-button__icon" />
          <span className="social-button__text">Sign in with Facebook</span>
        </button>
      </a>
      <a href={`${process.env.REACT_APP_BACKEND_URL}/auth/google`}>
        <button type="button" className="social-button">
          <span className="google-button__icon" />
          <span className="social-button__text">Sign in with Google</span>
        </button>
      </a>
    </div>
  </div>
);

export default LoginPage;
