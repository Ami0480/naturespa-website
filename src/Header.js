import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./App.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <div className="navbar">
            <Link to="/">
              <img src="/images/logo.svg" className="logo" alt="" />
            </Link>
            <img
              src="/images/menu.svg"
              className="hamburger"
              id="open-page"
              alt=""
              onClick={() => setMenuOpen(true)}
            />
            <div className="navbar-desktop desktop-only">
              <Link to="/" className="button-link">
                Home
              </Link>
              <Link to="/about" className="button-link">
                About
              </Link>
              <Link to="/menu" className="button-link">
                Menu
              </Link>
              <Link to="/product" className="button-link">
                Product
              </Link>
              <Link to="/booking" className="button-link">
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <section
          className={`menu-body ${menuOpen ? "open" : ""} `}
          id="new-page"
        >
          <div className="cross-container">
            <img
              src="/images/cross.svg"
              className="cross"
              id="close-page"
              alt=""
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <div className="navbar-desktop mobile-only">
            <Link to="/" className="button-link-open">
              Home
            </Link>
            <Link to="/about" className="button-link-open">
              About
            </Link>
            <Link to="/menu" className="button-link-open">
              Menu
            </Link>
            <Link to="/product" className="button-link-open">
              Product
            </Link>
            <Link to="/booking" className="button-link-open-booking">
              Book Now
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
}
