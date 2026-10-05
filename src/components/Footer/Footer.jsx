import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <img
              src="/images/logo/hrsa-logo.png"
              alt="HRSA - Humanitarian and Religious Support Association"
            />
          </a>

          <p className="footer-description">
            Serving humanity, supporting communities, and promoting compassion
            through meaningful humanitarian and community initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Explore</h3>

          <a href="#about">About HRSA</a>
          <a href="#humanitarian">Humanitarian Support</a>
          <a href="#religious">Religious Support</a>
          <a href="#programs">Programs & Projects</a>
        </div>

        {/* More Links */}
        <div className="footer-column">
          <h3>Connect</h3>

          <a href="#news">News & Stories</a>
          <a href="#get-involved">Get Involved</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact</h3>

          <p>
            HRSA Office
            <br />
            Cambodia
          </p>

          <a href="mailto:info@hrsa.org">info@hrsa.org</a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {new Date().getFullYear()} Humanitarian and Religious Support
            Association. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#contact">Contact</a>
            <a href="/">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
