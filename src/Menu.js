import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const bodyTreatments = [
  {
    name: "Full Body Relaxation Massage",
    duration: "60minutes",
    price: "$140",
  },
  {
    name: "Full Body Deep Tissue Massage",
    duration: "60minutes",
    price: "$140",
  },
  { name: "Full Body Pregnancy Massage", duration: "75minutes", price: "$170" },
  { name: "Lymphatic Drainage Massage", duration: "60minutes", price: "$180" },
  { name: "Body Scrub", duration: "60minutes", price: "$120" },
  { name: "Body Detox and Wrap", duration: "120minutes", price: "$280" },
  { name: "Full Body Mask", duration: "150minutes", price: "$320" },
  { name: "Head to Toe Massage", duration: "120minutes", price: "$210" },
];

const facialTreatments = [
  { name: "Calm Facial", duration: "60minutes", price: "$210" },
  { name: "Rejuvinate Facial", duration: "60minutes", price: "$210" },
  { name: "Refresh Facial", duration: "60minutes", price: "$210" },
  { name: "LED Light Therapy", duration: "30minutes", price: "$120" },
  { name: "Facial Scrub", duration: "30minutes", price: "$100" },
  { name: "Facial Scrub and Mask", duration: "60minutes", price: "$320" },
  {
    name: "Hydro Microdermabrasion Facial",
    duration: "60minutes",
    price: "$210",
  },
  { name: "Facial Peeling", duration: "60minutes", price: "$240" },
];

export default function Menu() {
  return (
    <div>
      <Header />
      <div className="hero-menu">
        <div className="content-menu">
          <h1>Menu</h1>
          <div className="container">
            <div className="body-menu">
              <h3>Body Treatment</h3>
              {bodyTreatments.map((service, index) => (
                <div className="service" key={index}>
                  <span>{service.name}</span>
                  <span>{service.duration}</span>
                  <span>{service.price}</span>
                </div>
              ))}
            </div>

            <div className="body-menu">
              <h3>Facial Treatment</h3>
              {facialTreatments.map((service, index) => (
                <div className="service" key={index}>
                  <span>{service.name}</span>
                  <span>{service.duration}</span>
                  <span>{service.price}</span>
                </div>
              ))}
            </div>
          </div>
          <button>Book Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
