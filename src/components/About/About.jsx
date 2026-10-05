import React from "react";
import "./About.css";
import ImageSlider from "../ImageSlider";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Text Content */}
        <div className="about-content">
          <span className="about-label">ABOUT HRSA</span>

          <h2>
            Humanitarian and Religious
            <br />
            Support Association
          </h2>

          <p className="about-intro">
            HRSA is a humanitarian and religious support association focused on serving people,
            strengthening communities, and promoting compassion, dignity, mutual respect, and solidarity.
          </p>

          <p>
            HRSA listens to community needs and seeks appropriate ways to respond through
            humanitarian assistance, community support, religious and spiritual activities,
            cooperation with partners, and responsible service. Its work is guided by
            accountability, transparency, respect for human dignity, and non-discrimination.
          </p>

          <a href="#mission" className="about-button">
            Learn More
          </a>
        </div>

        {/* President Image */}
        <div className="about-image">
          <div className="image-frame">
            <img src="/images/president/president.jpg" alt="HRSA President" />
          </div>

          <div className="image-caption">
            <span>HRSA</span>
            <strong>Humanitarian and Religious Support Association</strong>
          </div>
          <div className="hrsa-team-preview">
            <img src="/images/hrsa-content/hrsa_team/team.jpg" alt="HRSA team" loading="lazy" />
            <img src="/images/hrsa-content/hrsa_team/team_1.jpg" alt="HRSA team activity" loading="lazy" />
          </div>

          <ImageSlider />
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <div className="about-values" id="mission">
        <div className="value-item">
          <span className="value-number">01</span>

          <h3>Mission</h3>

          <p>
            To respond to humanitarian and community needs with compassion, dignity,
            appropriate assistance, cooperation, and responsible service.
          </p>
        </div>

        <div className="value-item">
          <span className="value-number">02</span>

          <h3>Vision</h3>

          <p>
            To contribute to caring, peaceful, and resilient communities where people are
            supported, respected, and encouraged to help one another.
          </p>
        </div>

        <div className="value-item">
          <span className="value-number">03</span>

          <h3>Core Values</h3>

          <p>
            Compassion, human dignity, respect, solidarity, service, inclusion,
            accountability, transparency, and community participation.
          </p>
        </div>
      </div>

      <div className="about-neutrality" aria-label="HRSA neutrality statement">
        <strong>For People &amp; Communities</strong>
        <p>HRSA is dedicated to humanitarian and community service and does not represent or promote any political party or personal political agenda.</p>
      </div>
    </section>
  );
};

export default About;
