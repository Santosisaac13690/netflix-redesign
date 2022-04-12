import React from "react";
import { Link } from "react-router-dom";
import "../partials/_popuplogin.scss";

const Popuplogin = () => {
  return (
    <div className="modalBackground">
      <div className="neflix-logo-1">
        <Link className="netflix-logo" to="/">
          <img src="netflixLogo.png" alt="Netflix" />
        </Link>
      </div>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <p>X</p>
        </div>
        <div className="modalTitle">
          <h2 className="modal-sign-in"> Sign In </h2>
        </div>
        <form>
          <div className="modalBody">
            <input type="text" id="email" placeholder="Email or phone number" required="required"/>
          </div>
          <div className="modalBody2">
            <input type="text" id="email" placeholder="Password" required="required"/>
          </div>
          <div className="login-button">
            <Link className="sign-in-btn" to="/Profile"><button type="submit"> Sign In </button></Link>
          </div>
        </form>
        <div className="register-bar">
          <input className="remember-me-checkbox" type="checkbox" id="rememberMe" name="rememberMe" value="RememberBox"/>
          <label for="rememberMe">Remember me</label>
          <a className="to-register"> Need help? </a>
        </div>
        <div className="social-media-login">
          <div className="third-party-login third-party-icon">      
            <div className="third-party-login-item">
              <img
                src="FB-f-Logo__blue_57.png"
                alt="facebook-icon"
                className="login-icon"
              />
              <span className="fbBtnText">Login with Facebook</span>
            </div>
            <div className="login-signup-now">
              <span> New to Netflix? </span>
              <a href="">Sign up Now.</a>
            </div>
            <div className="recaptcha-terms-of-use">
              <p>
                <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                <a className="recaptcha-terms-of-use-link-button"> Learn more.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popuplogin;
