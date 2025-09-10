import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Product({ setSubmitted }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  <Link to="/booking" className="button-link">
    Book Now
  </Link>;

  return (
    <div>
      <Header />
      <div className="hero">
        <div className="img-overlay"></div>
        <img
          src="images/product-main-bg.png"
          className="about-main-bg"
          alt=""
        />
        <div className="content">
          <h1>Product</h1>
          <Link to="/booking" className="button-link">
            Book Now
          </Link>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="about-us">
            <div className="about">
              <h2>Our product</h2>
              <p>
                Our products are carefully crafted using only organic and
                natural ingredients, ensuring they remain completely free from
                harmful chemicals, synthetic substances, and artificial
                additives. By staying true to nature, we provide safe,
                sustainable, and authentic solutions that not only support your
                well-being but also respect the environment. Each product
                reflects our commitment to purity, transparency, and
                uncompromising quality.
              </p>
            </div>

            <div className="about-us-img-container">
              <img
                src="images/product.png"
                className="about-us-img first"
                alt=""
              />
              <img
                src="images/product-img-second-one.png"
                className="about-us-img second"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Footer setSubmitted={setSubmitted} />
    </div>
  );
}
