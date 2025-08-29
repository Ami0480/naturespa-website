import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ThankYouBooking() {
  return (
    <div>
      <Header />

      <div className="hero">
        <div className="container">
          <div className="content">
            <h1>Thank You.</h1>
            <p>
              You will get an email shortly. We are looking forward to seeing
              you!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
