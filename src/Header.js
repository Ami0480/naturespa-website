import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./App.css";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const clickLogo = () => {
    navigate("/");
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="navbar">
            <img
              src="/images/logo.svg"
              className="logo"
              alt=""
              onClick={clickLogo}
            />
            <img
              src="/images/menu.svg"
              className="hamburger"
              id="open-page"
              alt=""
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>
      </header>

      <section className={`menu-body ${menuOpen ? "open" : ""} `} id="new-page">
        <div className="cross-container">
          <img
            src="/images/cross.svg"
            className="cross"
            id="close-page"
            alt=""
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <div className="menu-content">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/menu")}>Menu</button>
          <button onClick={() => navigate("/product")}>Product</button>
          <button onClick={() => navigate("/booking")} className="nav-button">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}
