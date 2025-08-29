import React, { useState } from "react";

import "./App.css";

export default function Footer({ setSubmitted }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("Please enter your email");
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
    } else {
      setSubmitted(true);
    }
  };

  return (
    <footer>
      <div className="container">
        <img src="/images/logo.svg" className="footer-logo" alt="logo" />
        <div className="footer-information">
          <div>
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Product</p>
          </div>

          <div>
            <p>08-100-200</p>
            <p>10 Perth, St Perth</p>
            <p>naturespa@gmail.com</p>
          </div>

          <div className="icons">
            <a href="https://www.facebook.com">
              <img src="/images/facebook.svg" className="icon" alt="facebook" />
            </a>
            <a href="https://www.instagram.com">
              <img
                src="/images/instagram.svg"
                className="icon"
                alt="instagram"
              />
            </a>
            <a href="https://x.com">
              <img src="/images/x.svg" className="icon" alt="x" />
            </a>
          </div>
        </div>
        <div className="subscribe-email">
          <div className="subscribe">
            <p>Subscribe</p>

            <form className="email-input" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Please enter your email.."
                className="email"
                id="email-input"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button>
                <img src="/images/arrow.svg" className="arrow" id="arrow" />
              </button>
            </form>
          </div>
        </div>

        <p className="copyright">NATURE©2025</p>
      </div>
    </footer>
  );
}
