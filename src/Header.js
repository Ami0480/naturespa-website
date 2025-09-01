import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./App.css";

export default function Header() {
  const navigate = useNavigate();

  const clickLogo = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header>
        <div className="container">
          <div className="navbar">
            <img
              src="/images/logo.svg"
              className="logo"
              alt="logo"
              onClick={clickLogo}
            />
            <img
              src="/images/menu.svg"
              className="hamburger"
              id="open-page"
              alt="open"
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>
      </header>

      <section className={`menu-body ${menuOpen ? "open" : ""} id="new-page"`}>
        <div className="cross-container">
          <img
            src="/images/cross.svg"
            className="cross"
            id="close-page"
            alt="close"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <div className="menu-content">
          <button>Home</button>
          <button>About</button>
          <button>Menu</button>
          <button>Product</button>
          <button
            onClick={() => navigate("/booking")}
            style={{ backgroundColor: "white" }}
            className="nav-button"
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}
