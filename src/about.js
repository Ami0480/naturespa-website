import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function About({ setSubmitted }) {
  const navigate = useNavigate();

  const clickBook = () => {
    navigate("/booking");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Header />
      <div className="hero">
        <div className="img-overlay"></div>
        <img
          src="images/about-main-bg.png"
          className="about-main-bg"
          alt="about-bg"
        />
        <div className="content">
          <h1>About</h1>
          <button onClick={clickBook}>Book Now</button>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="about-us">
            <h2>About Us</h2>
            <p>
              At our spa, we believe every guest deserves to feel truly cared
              for and appreciated. From the moment you arrive, our team is
              dedicated to creating an atmosphere where you feel valued,
              relaxed, and completely at home. With personalized treatments,
              thoughtful attention to detail, and a welcoming environment, we
              ensure that each visit is not only restorative for the body and
              mind, but also a special experience designed just for you.
            </p>
            <img src="images/about-us.png" className="about-us-img" />
          </div>
        </div>
      </section>
      <Footer setSubmitted={setSubmitted} />
    </div>
  );
}
