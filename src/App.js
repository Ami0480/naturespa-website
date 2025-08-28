import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="navbar">
            <img src="/images/logo.svg" className="logo" alt="logo" />
            <img
              src="/images/menu.svg"
              className="hamburger"
              id="open-page"
              alt="open"
            />
          </div>
        </div>
      </header>

      <section className="menu-body" id="new-page">
        <div className="cross-container">
          <img
            src="/images/cross.svg"
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
        <video autoPlay muted loop id="bg-video">
          <source src="/images/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="content">
          <h1>Nature Spa</h1>
          <button>Book Now</button>
        </div>
      </div>

      <section>
        <div className="container">
          <img
            src="/images/second-page-bg.png"
            id="second-page-bg"
            alt="second-bg"
          />
          <div className="second-page-overlay"></div>
          <div className="second-page-content">
            <h2 className="second-page-words">
              <span>Calm</span>
              <span>Rejuvenate</span>
              <span>Bliss</span>
            </h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. But I must explain to you how all this
              mistaken idea of denouncing pleasure.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="body-treatment">
            <h2>Body Treatment</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img
              src="/images/body-treatment.png"
              className="treatment-img"
              alt="body-treatment"
            />
            <button>Book Now</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="facial-treatment">
            <h2>Facial Treatment</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img
              src="/images/facial-treatment.png"
              className="treatment-img"
              alt="facial-treatment"
            />
            <button>Book Now</button>
          </div>
        </div>
      </section>

      <section className="enjoy">
        <div className="container">
          <img src="/images/enjoy-bg.png" id="enjoy-bg" alt="enjoy-bg" />
          <div className="enjoy-overlay"></div>
          <h2 className="enjoy-content">Enjoy your journey</h2>
        </div>
      </section>

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
                <img
                  src="/images/facebook.svg"
                  className="icon"
                  alt="facebook"
                />
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

              <form className="email-input">
                <input
                  type="email"
                  placeholder="Please enter your email.."
                  className="email"
                  id="email-input"
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
    </div>
  );
}
