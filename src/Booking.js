import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Booking({ setSubmitted }) {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    timestamp: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    treatment: "",
    therapist: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyFqV9jO92AaUbREHdYfsTADTBkyhMz571dgnT4nu8p-R7EygsK4gMtUelVfzvn4A3HQw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("Booking sent to Google Sheets:", formData);
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
    }

    if (setSubmitted) {
      setSubmitted(true);
      navigate("/thankyoubooking");
    }
  };

  return (
    <div>
      <Header />

      <section>
        <div className="container">
          <div className="content-menu">
            <h1>Book an appointment</h1>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="information">
                <p>First name</p>
                <input
                  type="text"
                  className="information-input"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="information">
                <p>Last name</p>
                <input
                  type="text"
                  className="information-input"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="information">
                <p>Mobile</p>
                <input
                  type="tel"
                  className="information-input"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="information">
                <p>Email</p>
                <input
                  type="email"
                  className="information-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="information">
                <p>What treatment would you like?</p>
                <select
                  className="information-input"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  required
                >
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
                <select
                  className="information-input"
                  name="therapist"
                  value={formData.therapist}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a therapist..</option>
                  <option value="any">Any therapist</option>
                  <option value="sarah">Sarah</option>
                  <option value="amy">Amy</option>
                  <option value="chloe">Chloe</option>
                  <option value="michael">Michael</option>
                  <option value="emma">Emma</option>
                </select>
              </div>

              <div className="information">
                <p>When would you like to visit?</p>
                <input
                  type="date"
                  className="information-input"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="button-link">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="enjoy">
        <div className="container">
          <img src="images/relax-refresh-renew.png" id="enjoy-bg" alt="" />
          <div className="rrr-overlay"></div>
          <h2 className="rrr-content">Relax, Refresh, Renew</h2>
        </div>
      </section>

      <Footer setSubmitted={setSubmitted} />
    </div>
  );
}
