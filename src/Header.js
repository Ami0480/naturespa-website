import React, { useState } from "react";
import "./App.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header>
        <div className="container">
          <div className="navbar">
            <img src="/images/logo.svg" className="logo" alt="logo" />
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
        </div>
      </section>
    </div>
  );
}
