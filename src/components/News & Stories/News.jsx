import React from "react";
import "./News.css";

const News = () => {
  return (
    <section className="news-section" id="news">
      <div className="news-container">
        {/* Section Heading */}
        <div className="news-heading">
          <div>
            <span className="news-label">NEWS & STORIES</span>

            <h2>
              Stories From
              <br />
              Our Community.
            </h2>
          </div>

          <p>
            Discover updates, activities, community stories, humanitarian work, and
            meaningful initiatives from HRSA.
          </p>
        </div>

        {/* Featured Story */}
        <article className="news-feature">
          <div className="news-feature-image">
            <img
              src="/images/humanitarian/distribution of gift/photo_2.jpg"
              alt="HRSA community activity"
            />
          </div>

          <div className="news-feature-content">
            <span className="news-category">FEATURED STORY</span>

            <h3>Supporting Communities Through Compassion and Action</h3>

            <p>
              Explore stories and activities that highlight humanitarian support, community
              participation, responsible service, and cooperation.
            </p>

            <div className="news-meta">
              <span>HRSA</span>
              <span>•</span>
              <span>News & Stories</span>
            </div>

            <a href="#contact" className="news-button">
              Read Story
              <span>→</span>
            </a>
          </div>
        </article>

        {/* Story Cards */}
        <div className="news-grid">
          <article className="news-card">
            <div className="news-card-image">
              <img
                src="/images/humanitarian/poor -families/photo_5.jpg"
                alt="HRSA humanitarian activity"
              />
            </div>

            <div className="news-card-content">
              <span className="news-card-category">HUMANITARIAN</span>

              <h3>Community Support and Humanitarian Activities</h3>

              <p>Updates from humanitarian response and community support activities.</p>

              <a href="#humanitarian">
                Read Story
                <span>→</span>
              </a>
            </div>
          </article>

          <article className="news-card">
            <div className="news-card-image">
              <img
                src="/images/buddha-statue/photo_5.jpg"
                alt="HRSA religious and community activity"
              />
            </div>

            <div className="news-card-content">
              <span className="news-card-category">COMMUNITY</span>

              <h3>Community Participation and Shared Values</h3>

              <p>
                Stories about compassion, solidarity, mutual respect, and community engagement.
              </p>

              <a href="#religious">
                Read Story
                <span>→</span>
              </a>
            </div>
          </article>

          <article className="news-card">
            <div className="news-card-image">
              <img src="/images/humanitarian/distribution of gift/photo_6.jpg" alt="HRSA project activity" />
            </div>

            <div className="news-card-content">
              <span className="news-card-category">PROJECTS</span>

              <h3>Programs and Projects in Action</h3>

              <p>
                Learn more about programs, projects, partnerships, and activities carried out with communities.
              </p>

              <a href="#programs">
                Read Story
                <span>→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default News;
