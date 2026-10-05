import React from "react";
import "./GetInvolved.css";

const GetInvolved = () => {
  return (
    <section className="get-involved-section" id="get-involved">
      <div className="get-involved-container">
        {/* Section Heading */}
        <div className="get-involved-heading">
          <span className="get-involved-label">GET INVOLVED</span>

          <h2>
            Together, We Can
            <br />
            Make a Difference.
          </h2>

          <p>
            Everyone can contribute to stronger communities. You can volunteer, support a
            program, share skills, cooperate as a partner, or help connect people with meaningful service.
          </p>
        </div>

        {/* Involvement Cards */}
        <div className="involvement-grid">
          {/* Volunteer */}
          <article className="involvement-card">
            <span className="involvement-number">01</span>

            <div className="involvement-content">
              <h3>Volunteer</h3>

              <p>
                Share your time, skills, and experience to support humanitarian, religious, and
                community activities.
              </p>

              <a href="#contact">
                Get Involved
                <span>→</span>
              </a>
            </div>
          </article>

          {/* Support */}
          <article className="involvement-card">
            <span className="involvement-number">02</span>

            <div className="involvement-content">
              <h3>Support Our Work</h3>

              <p>
                Support programs that respond to community needs and contribute to responsible
                humanitarian and social action.
              </p>

              <a href="#contact">
                Support HRSA
                <span>→</span>
              </a>
            </div>
          </article>

          {/* Partnership */}
          <article className="involvement-card">
            <span className="involvement-number">03</span>

            <div className="involvement-content">
              <h3>Partner With Us</h3>

              <p>
                Explore opportunities to cooperate, coordinate, share knowledge, and support
                community initiatives in a responsible and transparent way.
              </p>

              <a href="#contact">
                Contact Us
                <span>→</span>
              </a>
            </div>
          </article>
        </div>

        {/* Closing Message */}
        <div className="get-involved-bottom">
          <div className="get-involved-line"></div>

          <p>
            Every contribution can help strengthen communities. HRSA welcomes cooperation
            that respects human dignity, transparency, inclusion, and the needs of the people served.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
