import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}
