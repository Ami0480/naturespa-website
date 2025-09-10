import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ThankYouSubscribe from "./ThankYouSubscribe";
import Booking from "./Booking";
import ThankYouBooking from "./ThankYouBooking";
import About from "./About";
import Menu from "./Menu";
import Product from "./Product";

import "./App.css";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home submitted={submitted} setSubmitted={setSubmitted} />}
        />
        <Route
          path="/booking"
          element={<Booking setSubmitted={setSubmitted} />}
        />
        <Route
          path="/thankyoubooking"
          element={<ThankYouBooking setSubmitted={setSubmitted} />}
        />
        <Route
          path="/thankyousubscribe"
          element={<ThankYouSubscribe setSubmitted={setSubmitted} />}
        />
        <Route path="/about" element={<About setSubmitted={setSubmitted} />} />
        <Route path="/menu" element={<Menu setSubmitted={setSubmitted} />} />
        <Route
          path="/product"
          element={<Product setSubmitted={setSubmitted} />}
        />
      </Routes>
    </Router>
  );
}

function Home({ submitted, setSubmitted }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (submitted) {
    return <ThankYouSubscribe />;
  }

  return (
    <div className="App">
      <Header />
      <div className="hero">
        <video autoPlay muted loop playsInline id="bg-video">
          <source src="/images/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="content">
          <h1>Nature Spa</h1>
          <Link to="/booking" className="button-link mobile-only">
            Book Now
          </Link>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="second-page-image-wrapper">
            <img src="/images/second-page-bg.png" id="second-page-bg" alt="" />
            <img
              src="/images/second-page-bg-desktop.png"
              id="second-page-bg-desktop"
              alt=""
            />

            <div className="second-page-overlay"></div>
            <div className="second-page-content">
              <h2 className="second-page-words">
                <span>Calm</span>
                <span>Rejuvenate</span>
                <span>Bliss</span>
              </h2>
              <p>
                Let your mind unwind, your body regain its energy, and your
                spirit feel light and refreshed, as every moment nurtures your
                inner wellness, restores your vitality, and enhances your
                natural beauty from within.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="treatment">
            <div className="treatment-container">
              <h2>Body Treatment</h2>
              <p>
                Treatments for the body help release tension, improve blood
                flow, and restore energy. They promote healthier skin, support
                flexibility, and ease stress. By caring for your body this way,
                you boost overall wellness and feel more vibrant, balanced, and
                refreshed.
              </p>
              <Link to="/menu" className="button-link desktop-only">
                View Treatment
              </Link>
            </div>
            <div className="treatment-img-container">
              <img
                src="/images/body-treatment.png"
                className="treatment-img first"
                alt=""
              />
              <img
                src="/images/body-treatment-second-one.png"
                className="treatment-img second desktop-only"
                alt=""
              />
            </div>
            <Link to="/booking" className="button-link mobile-only">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="treatment treatment--reverse">
            <div className="treatment-container">
              <h2>Facial Treatment</h2>
              <p>
                Facial treatments help cleanse and nourish the skin, improving
                its texture and natural glow. They support hydration, reduce
                signs of stress, and refresh tired skin. By caring for your face
                this way, you reveal a healthy, radiant complexion and feel
                renewed from the inside out.
              </p>
              <Link to="/menu" className="button-link desktop-only">
                View Treatment
              </Link>
            </div>
            <div className="treatment-img-container">
              <img
                src="/images/facial-treatment.png"
                className="treatment-img facial-first"
                alt=""
              />
              <img
                src="/images/facial-treatment-second-one.png"
                className="treatment-img facial-second desktop-only"
                alt=""
              />
            </div>
            <Link to="/booking" className="button-link mobile-only">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section className="enjoy">
        <div className="container enjoy-container">
          <img
            src="/images/enjoy-bg.png"
            className="enjoy-bg mobile-only"
            alt=""
          />
          <img
            src="/images/enjoy-bg-desktop.png"
            className="enjoy-bg desktop-only"
            alt=""
          />
          <div className="enjoy-overlay"></div>
          <h2 className="enjoy-content">Enjoy your journey</h2>
        </div>
      </section>

      <Footer setSubmitted={setSubmitted} />
    </div>
  );
}
