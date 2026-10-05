import React, { useEffect, useState } from "react";
import "./Humanitarian.css";

const distributionImages = [
  "distribution_17.jpg",
  "distribution-8.jpg",
  "distribution_1.jpg",
  "distribution_14.jpg",
  "distribution_10.jpg",
  "distribution_4.jpg",
  "distribution_18.jpg",
  "distribution_11.jpg",
  "distribution_12.jpg",
  "distribution_2.jpg",
  "distribution_13.jpg",
  "distribution_9.jpg",
];

const familyImages = [
  "household_13.jpg",
  "household_9.jpg",
  "household_7.jpg",
  "household_1.jpg",
  "household_2.jpg",
  "household_3.jpg",
];

const supportCards = [
  {
    icon: "01",
    title: "Distribution of Gifts",
    text: "Providing appropriate gifts, essential items, and practical assistance according to identified needs and available resources.",
  },
  {
    icon: "02",
    title: "Family Support",
    text: "Supporting families facing hardship with care, dignity, compassion, and respect for their individual circumstances.",
  },
  {
    icon: "03",
    title: "Basic Needs",
    text: "Helping with basic household and daily-use needs when support is appropriate and available.",
  },
  {
    icon: "04",
    title: "Vulnerable Households",
    text: "Giving attention to households and people who may be especially vulnerable during difficult circumstances.",
  },
  {
    icon: "05",
    title: "Community Cooperation",
    text: "Working with communities, volunteers, and partners to make humanitarian support more relevant and effective.",
  },
  {
    icon: "06",
    title: "Needs Assessment",
    text: "Listening to communities and considering their needs before planning appropriate humanitarian support.",
  },
];

const approachSteps = [
  ["01", "Listen", "Listen to people and communities to understand their concerns and priorities."],
  ["02", "Assess", "Consider needs, vulnerability, available resources, and existing support."],
  ["03", "Support", "Provide appropriate assistance with dignity, care, and respect."],
  ["04", "Cooperate", "Coordinate with communities, volunteers, and partners where appropriate."],
  ["05", "Follow Up", "Learn from activities and continue improving the quality of support."],
];

const supportedGroups = [
  "Families facing hardship",
  "Vulnerable households",
  "Older people and caregivers",
  "Children and families in need",
  "People affected by emergencies",
  "Communities requiring practical support",
];

const Humanitarian = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = () => setLightboxIndex(null);

  const showPrevious = () => {
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + distributionImages.length) % distributionImages.length,
    );
  };

  const showNext = () => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % distributionImages.length,
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (lightboxIndex === null) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="humanitarian-section" id="humanitarian">
      <div className="humanitarian-container">
        <div className="humanitarian-heading">
          <span className="humanitarian-label">HUMANITARIAN SUPPORT</span>

          <h2>
            Supporting People.
            <br />
            Strengthening Communities.
          </h2>

          <p>
            HRSA responds to identified humanitarian needs and supports individuals, families,
            and communities facing hardship, while respecting human dignity and avoiding discrimination.
          </p>
        </div>

        <div className="humanitarian-feature">
          <div className="humanitarian-feature-image">
            <img
              src="/images/humanitarian/distribution of gift/photo_1.jpg"
              alt="Humanitarian support and distribution of gifts"
            />
          </div>

          <div className="humanitarian-feature-content">
            <span className="feature-number">01</span>
            <h3>Distribution of Gifts</h3>
            <p>
              Providing appropriate humanitarian assistance, community support, and practical help
              based on identified needs and available resources.
            </p>
            <a href="#distribution-gifts" className="humanitarian-button">
              Explore Our Work
              <span>→</span>
            </a>
          </div>
        </div>

        <section className="humanitarian-detail" id="distribution-gifts">
          <div className="humanitarian-detail-heading">
            <span className="humanitarian-label">DISTRIBUTION OF GIFTS & FAMILY SUPPORT</span>
            <h3>Care, Dignity, and Practical Support</h3>
            <p>
              HRSA seeks to support people and families with practical humanitarian assistance that
              responds to identified needs. The focus is on compassion, dignity, cooperation, and
              responsible use of available resources.
            </p>
          </div>

          <div className="support-cards">
            {supportCards.map((card) => (
              <article className="support-card" key={card.icon}>
                <span className="support-card-number">{card.icon}</span>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="humanitarian-approach" id="family-support">
          <div className="approach-heading">
            <span className="humanitarian-label">OUR APPROACH</span>
            <h3>From Listening to Meaningful Support</h3>
            <p>
              Humanitarian support is more than distributing items. HRSA aims to understand needs,
              work responsibly with others, and learn from each activity.
            </p>
          </div>

          <div className="approach-steps">
            {approachSteps.map(([number, title, text]) => (
              <article className="approach-step" key={number}>
                <span>{number}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="supported-groups">
          <div className="supported-groups-copy">
            <span className="humanitarian-label">WHO WE SUPPORT</span>
            <h3>Reaching People and Families in Need</h3>
            <p>
              Support is provided according to identified needs and available capacity, with respect
              for human dignity and without discrimination based on race, ethnicity, or religion.
            </p>
          </div>

          <div className="supported-groups-list">
            {supportedGroups.map((group) => (
              <div className="supported-group" key={group}>
                <span>✓</span>
                <p>{group}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="families-section">
          <div className="families-heading">
            <div>
              <span className="humanitarian-label">COMMUNITY SUPPORT</span>
              <h3>Support for Families</h3>
            </div>

            <p>
              Support is guided by community needs and aims to strengthen solidarity, dignity,
              resilience, and cooperation among people.
            </p>
          </div>

          <div className="families-grid">
            {familyImages.map((image) => (
              <div className="family-image" key={image}>
                <img
                  src={`/images/hrsa-content/household/${image}`}
                  alt="HRSA support for families and households"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="distribution-gallery-section">
          <div className="families-heading">
            <div>
              <span className="humanitarian-label">DISTRIBUTION OF GIFTS</span>
              <h3>Community Distribution Activities</h3>
            </div>
            <p>
              A visual collection of humanitarian distribution activities and community support
              work carried out with compassion and respect for the people served.
            </p>
          </div>

          <div className="distribution-gallery-grid">
            {distributionImages.map((image, index) => (
              <button
                type="button"
                className="distribution-gallery-item"
                key={image}
                onClick={() => setLightboxIndex(index)}
                aria-label={`View distribution activity image ${index + 1}`}
              >
                <img
                  src={`/images/hrsa-content/distribution_of_gift/${image}`}
                  alt="HRSA humanitarian distribution activity"
                  loading="lazy"
                />
                <span className="gallery-view">View</span>
              </button>
            ))}
          </div>
        </div>

        <section className="humanitarian-cta">
          <div>
            <span className="humanitarian-label">TOGETHER, WE CAN HELP</span>
            <h3>Support Families with Care and Compassion</h3>
            <p>
              Every contribution, partnership, and act of service can help strengthen communities
              and bring practical support to people in need.
            </p>
          </div>
          <div className="humanitarian-cta-actions">
            <a href="#get-involved" className="humanitarian-button">Get Involved <span>→</span></a>
            <a href="#contact" className="humanitarian-secondary-button">Support Our Work</a>
          </div>
        </section>
      </div>

      {lightboxIndex !== null && (
        <div className="humanitarian-lightbox" role="dialog" aria-modal="true" aria-label="Distribution activity image viewer" onClick={closeLightbox}>
          <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close image viewer">×</button>
          <button type="button" className="lightbox-nav lightbox-prev" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous image">‹</button>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img
              src={`/images/hrsa-content/distribution_of_gift/${distributionImages[lightboxIndex]}`}
              alt={`HRSA distribution activity ${lightboxIndex + 1}`}
            />
            <span>{lightboxIndex + 1} / {distributionImages.length}</span>
          </div>
          <button type="button" className="lightbox-nav lightbox-next" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next image">›</button>
        </div>
      )}
    </section>
  );
};

export default Humanitarian;
