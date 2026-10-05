import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Heading */}
        <div className="contact-heading">
          <span className="contact-label">CONTACT HRSA</span>

          <h2>
            Let&apos;s Stay
            <br />
            Connected.
          </h2>

          <p>
            For general inquiries, collaboration opportunities, community
            initiatives, or other information, please contact HRSA.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-info-number">01</span>

              <div>
                <h3>Address</h3>
                <p>
                  HRSA Office
                  <br />
                  Cambodia
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-number">02</span>

              <div>
                <h3>Email</h3>
                <a href="mailto:info@hrsa.org">info@hrsa.org</a>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-number">03</span>

              <div>
                <h3>Phone</h3>
                <a href="tel:+85500000000">+855 88 773 399</a>
                <br />
                <a href="tel:+85500000000">+855 15 773 399</a>
                <br />
                <a href="tel:+85500000000">+855 92 836 190</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Send Message
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
