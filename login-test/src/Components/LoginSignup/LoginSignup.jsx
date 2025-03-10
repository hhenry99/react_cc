import React from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/young-businessman-icon.svg";
import email_icon from "../Assets/envelope-line-icon.svg";
import password_icon from "../Assets/key-icon.svg";

const LoginSignup = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>

          <div className="inputs">
            <img src={user_icon} alt="" />
            <input type="text" />
          </div>

          <div className="inputs">
            <img src={email_icon} alt="" />
            <input type="email" />
          </div>

          <div className="inputs">
            <img src={password_icon} alt="" />
            <input type="password" />
          </div>

          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>

          <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
