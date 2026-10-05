import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-label">HUMANITARIAN & RELIGIOUS SUPPORT</span>

        <h1>
          Serving Humanity.
          <br />
          Supporting Communities.
        </h1>

        <p>
          HRSA supports people and communities through humanitarian assistance,
          religious and spiritual support, community cooperation, and compassionate service.
        </p>

        <div className="hero-actions">
          <a href="#about" className="hero-btn primary">
            Learn More
          </a>

          <a href="#get-involved" className="hero-btn secondary">
            Get Involved
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
};

export default Hero;
