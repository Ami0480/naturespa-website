import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThankYouSubscribe from "./ThankYouSubscribe";

import "./App.css";

export default function App() {
  const [submitted, setSubmitted] = useState(false);

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

      <Footer setSubmitted={setSubmitted} />
    </div>
  );
}
