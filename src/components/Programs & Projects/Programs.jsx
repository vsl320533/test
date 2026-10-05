import React from "react";
import "./Programs.css";

const Programs = () => {
  return (
    <section className="programs-section" id="programs">
      <div className="programs-container">
        {/* Section Heading */}
        <div className="programs-heading">
          <span className="programs-label">PROGRAMS & PROJECTS</span>

          <h2>
            Turning Compassion
            <br />
            Into Action.
          </h2>

          <p>
            HRSA's programs and projects are designed around identified needs, responsible
            humanitarian action, community participation, cooperation, and meaningful support.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid">
          {/* Program 01 */}
          <article className="program-card">
            <div className="program-card-number">01</div>

            <div className="program-card-content">
              <h3>Humanitarian Assistance</h3>

              <p>
                Responding to humanitarian needs through appropriate assistance, distribution of
                essential support, and community-based action.
              </p>

              <a href="#humanitarian">
                Learn More
                <span>→</span>
              </a>
            </div>
          </article>

          {/* Program 02 */}
          <article className="program-card">
            <div className="program-card-number">02</div>

            <div className="program-card-content">
              <h3>Religious Support</h3>

              <p>
                Supporting religious and spiritual activities that encourage compassion, respect,
                mutual help, peaceful coexistence, and community connection.
              </p>

              <a href="#religious">
                Learn More
                <span>→</span>
              </a>
            </div>
          </article>

          {/* Program 03 */}
          <article className="program-card">
            <div className="program-card-number">03</div>

            <div className="program-card-content">
              <h3>Community Development</h3>

              <p>
                Strengthening local participation, cooperation, capacity, and community resilience
                through practical initiatives and partnerships.
              </p>

              <a href="#get-involved">
                Learn More
                <span>→</span>
              </a>
            </div>
          </article>
        </div>

        {/* Supporting Activities Gallery */}
        <div className="supporting-activities">
          <div className="supporting-activities-heading">
            <span className="programs-label">SUPPORTING ACTIVITIES</span>
            <h3>Health and Household Support</h3>
            <p>
              Additional activities that support health, household well-being, and practical community needs.
            </p>
          </div>

          <div className="supporting-activities-grid">
            <div className="supporting-activity-card">
              <img src="/images/hrsa-content/health/health.jpg" alt="Community health support" loading="lazy" />
              <div><span>04</span><h4>Health Support</h4></div>
            </div>
            <div className="supporting-activity-card">
              <img src="/images/hrsa-content/household/household.jpg" alt="Household support" loading="lazy" />
              <div><span>05</span><h4>Household Support</h4></div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="programs-bottom">
          <div className="programs-line"></div>

          <p>
            Listen to needs → Assess → Support → Cooperate → Learn and improve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
