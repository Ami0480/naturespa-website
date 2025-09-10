import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./App.css";

export default function Footer({ setSubmitted }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [email, setEmail] = useState("");

  <Link to="/" className="button-link"></Link>;

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("Please enter your email");
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
    } else {
      setSubmitted(true);
      <Link to="/thankyousubscribe" className="button-link"></Link>;
      setEmail("");
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-logo-text">
            <Link to="/">
              <img src="/images/logo.svg" className="footer-logo" alt="" />
            </Link>
            <div className="footer-text desktop-only">Nature Spa</div>
          </div>

          <div className="footer-informations">
            <div className="footer-information">
              <div className="footer-link">
                <Link to="/" className="button-link-footer">
                  Home
                </Link>
                <Link to="/about" className="button-link-footer">
                  About
                </Link>
                <Link to="/menu" className="button-link-footer">
                  Menu
                </Link>
                <Link to="/product" className="button-link-footer">
                  Product
                </Link>
              </div>

              <div className="footer-contacts">
                <div className="footer-contact">
                  <p>08-100-200</p>
                  <p>10 Perth, St Perth</p>
                  <p>
                    <a href="mailto:naturespa@gmail.com" className="spa-email">
                      naturespa@gmail.com
                    </a>
                  </p>
                </div>
                <div className="icons">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/facebook.svg" className="icon" alt="" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/instagram.svg" className="icon" alt="" />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noreferrer">
                    <img src="/images/x.svg" className="icon" alt="" />
                  </a>
                </div>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">
                    <img
                      src="/images/arrow.svg"
                      className="arrow"
                      id="arrow"
                      alt=""
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <p className="copyright">NATURE©2025</p>
      </div>
    </footer>
  );
}
