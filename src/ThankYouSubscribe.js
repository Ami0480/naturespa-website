import React from "react";
import "./App.css";

export default function ThankYouSubscribe() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="navbar">
            <img src="images/logo.svg" className="logo" />
            <img
              src="images/menu.svg"
              className="hamburger"
              id="open-page"
              alt="menu"
            />
          </div>
        </div>
      </header>

      <section className="menu-body" id="new-page">
        <div className="cross-container">
          <img
            src="images/cross.svg"
            className="cross"
            id="close-page"
            alt="close"
          />
        </div>

        <div className="menu-content">
          <button>Home</button>
          <button>About</button>
          <button>Menu</button>
          <button>Product</button>
        </div>
      </section>

      <div className="hero">
        <div className="container">
          <div className="content">
            <h1>Thank You.</h1>
            <p>Subscribe for exclusive spa offers and wellness secrets.</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <img src="images/logo.svg" className="footer-logo" />
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
                <img src="images/facebook.svg" className="icon" />
              </a>
              <a href="https://www.instagram.com">
                <img src="images/instagram.svg" className="icon" />
              </a>
              <a href="https://x.com">
                <img src="images/x.svg" className="icon" />
              </a>
            </div>
          </div>

          <p className="copyright">NATURE©2025</p>
        </div>
      </footer>
    </div>
  );
}
