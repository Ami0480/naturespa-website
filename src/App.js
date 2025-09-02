import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
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
        <Route path="/" element={<Home setSubmitted={setSubmitted} />} />
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
        <Route path="/About" element={<About setSubmitted={setSubmitted} />} />
        <Route path="/Menu" element={<Menu setSubmitted={setSubmitted} />} />
        <Route
          path="/Product"
          element={<Product setSubmitted={setSubmitted} />}
        />
      </Routes>
    </Router>
  );
}

function Home({ submitted, setSubmitted }) {
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  if (submitted) {
    return <ThankYouSubscribe />;
  }

  return (
    <div className="App">
      <Header />
      <div className="hero">
        <video autoPlay muted loop id="bg-video">
          <source src="/images/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="content">
          <h1>Nature Spa</h1>
          <button onClick={() => navigate("/booking")}>Book Now</button>
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
              Let your mind unwind, your body regain its energy, and your spirit
              feel light and refreshed, as every moment nurtures your inner
              wellness, restores your vitality, and enhances your natural beauty
              from within.”
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="body-treatment">
            <h2>Body Treatment</h2>
            <p>
              Treatments for the body help release tension, improve blood flow,
              and restore energy. They promote healthier skin, support
              flexibility, and ease stress. By caring for your body this way,
              you boost overall wellness and feel more vibrant, balanced, and
              refreshed.
            </p>
            <img
              src="/images/body-treatment.png"
              className="treatment-img"
              alt="body-treatment"
            />
            <button
              onClick={() => {
                navigate("/booking");
                window.scrollTo(0, 0);
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="facial-treatment">
            <h2>Facial Treatment</h2>
            <p>
              Facial treatments help cleanse and nourish the skin, improving its
              texture and natural glow. They support hydration, reduce signs of
              stress, and refresh tired skin. By caring for your face this way,
              you reveal a healthy, radiant complexion and feel renewed from the
              inside out.
            </p>
            <img
              src="/images/facial-treatment.png"
              className="treatment-img"
              alt="facial-treatment"
            />
            <button
              onClick={() => {
                navigate("/booking");
                window.scrollTo(0, 0);
              }}
            >
              Book Now
            </button>
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

      <Footer setSubmitted={setSubmitted} />
    </div>
  );
}
