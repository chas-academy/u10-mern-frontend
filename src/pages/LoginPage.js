import React from 'react';
import './LoginPage.scss';

const LoginPage = () => (
  <div className="flexbox">
    <a href="https://localhost:8080/auth/google">Sign In</a>
    <a href="https://localhost:8080/auth/facebook">Facebook Sign In</a>
    <button type="button" className="facebook-button">
      <span className="facebook-button__icon" />
      <span className="facebook-button__text">Sign in with Facebook</span>
    </button>
    <button type="button" className="google-button">
      <span className="google-button__icon" />
      <span className="google-button__text">Sign in with Google</span>
    </button>
  </div>
);

export default LoginPage;
