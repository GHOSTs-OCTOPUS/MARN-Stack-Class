import React from "react";
import HeaderImage from "../../src/assets/images/undraw_referral_ihsd.svg";
export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <div className="hero-text">
            <h1>Enter Site Title</h1>
            <p>Enter Site Slogan</p>
          </div>

          <div className="hero-image">
            <img
              src={HeaderImage}
              alt="Header"
              style={{ height: "12%", width: "30%", "margin-left": "60%" }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
