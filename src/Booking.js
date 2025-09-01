import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Booking() {
  return (
    <div>
      <Header />

      <section>
        <div className="container">
          <div className="content-menu">
            <h1>Book an appointment</h1>
            <form className="booking-form">
              <div className="information">
                <p>First name</p>
                <input type="text" className="information-input" />
              </div>
              <div className="information">
                <p>Last name</p>
                <input type="text" className="information-input" />
              </div>
              <div className="information">
                <p>Mobile</p>
                <input type="tel" className="information-input" />
              </div>
              <div className="information">
                <p>Email</p>
                <input type="email" className="information-input" />
              </div>
              <div className="information">
                <p>What treatment would you like?</p>

                <select className="information-input">
                  <option value="">Select a treatment..</option>
                  <option value="relaxation">
                    Full Body Relaxation Massage - 60min ($140)
                  </option>
                  <option value="deep">
                    Full Body Deep Tissue Massage - 60min ($140)
                  </option>
                  <option value="pregnancy">
                    Full Body Pregnancy Massage - 75min ($170)
                  </option>
                  <option value="lymphatic">
                    Lymphatic Drainage Massage - 60min ($180)
                  </option>
                  <option value="Scrub">Body Scrub - 60min ($120)</option>
                  <option value="Detox">
                    Body Detox and Wrap - 120min ($280)
                  </option>
                  <option value="Mask">Full Body Mask- 150min ($320)</option>
                  <option value="Head-toe">
                    Head to Toe Massage- 120min ($210)
                  </option>

                  <option value="Calm">Calm Facial- 60min ($210)</option>
                  <option value="Rejuvinate">
                    Rejuvinate Facial - 60min ($210)
                  </option>
                  <option value="Refresh">Refresh Facial- 60min ($210)</option>
                  <option value="LED">LED Light Therapy - 30min ($120)</option>
                  <option value="F-scrub">Facial Scrub- 30min ($120)</option>
                  <option value="F-mask">
                    Facial Scrub and Mask- 60min ($320)
                  </option>
                  <option value="Microdermabrasion">
                    Hydro Microdermabrasion Facial - 60min ($210)
                  </option>
                  <option value="Peeling">Facial Peeling- 60min ($240)</option>
                </select>
              </div>

              <div className="information">
                <p>Preferred therapist</p>
                <select className="information-input">
                  <option value="">Select a therapist..</option>
                  <option value="any">Any therapist</option>
                  <option value="sarah">Sarah</option>
                  <option value="michael">Amy</option>
                  <option value="michael">Chloe</option>
                  <option value="michael">Michael</option>
                  <option value="emma">Emma</option>
                </select>
              </div>

              <div className="information">
                <p>When would you like to visit?</p>
                <div className="information-form">
                  <input
                    type="date"
                    className="information-input"
                    placeholder="Select a date.."
                  />
                </div>
              </div>

              <button type="submit" className="booking-button">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="enjoy">
        <div className="container">
          <img src="images/relax-refresh-renew.png" id="enjoy-bg" />
          <div className="rrr-overlay"></div>
          <h2 className="rrr-content">Relax, Refresh, Renew</h2>
        </div>
      </section>

      <Footer />
    </div>
  );
}
