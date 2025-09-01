import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Product() {
  return (
    <div>
      <Header />
      <div className="hero">
        <div className="img-overlay"></div>
        <img
          src="images/product-main-bg.png"
          className="about-main-bg"
          alt="about-bg"
        />
        <div className="content">
          <h1>Product</h1>
          <button>Book Now</button>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="about-us">
            <h2>Our product</h2>
            <p>
              Our products are carefully crafted using only organic and natural
              ingredients, ensuring they remain completely free from harmful
              chemicals, synthetic substances, and artificial additives. By
              staying true to nature, we provide safe, sustainable, and
              authentic solutions that not only support your well-being but also
              respect the environment. Each product reflects our commitment to
              purity, transparency, and uncompromising quality.
            </p>
            <img src="images/product.png" className="about-us-img" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
