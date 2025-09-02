import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ThankYouSubscribe({ setSubmitted }) {
  return (
    <div>
      <Header />

      <div className="hero">
        <div className="container">
          <div className="content">
            <h1>Thank You.</h1>
            <p>Subscribe for exclusive spa offers and wellness secrets.</p>
          </div>
        </div>
      </div>

      <Footer setSubmitted={setSubmitted} />
    </div>
  );
}
