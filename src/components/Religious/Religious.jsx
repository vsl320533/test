import React, { useEffect, useState } from "react";
import "./Religious.css";

const communityImages = [
  "buddha.jpg",
  "buddha_1.jpg",
  "buddha_2.jpg",
  "buddha_3.jpg",
  "buddha_4.jpg",
  "buddha_5.jpg",
];

const supportAreas = [
  { title: "Compassion & Giving", text: "Encouraging acts of kindness, generosity, and care for people and communities in need." },
  { title: "Spiritual Well-being", text: "Supporting peaceful and meaningful activities that contribute to spiritual and emotional well-being." },
  { title: "Community Activities", text: "Creating opportunities for people to come together, help one another, and strengthen community bonds." },
  { title: "Shared Values", text: "Promoting respect, responsibility, dignity, peace, and mutual understanding." },
  { title: "Respect for Diversity", text: "Respecting different beliefs, traditions, cultures, and ways of practicing faith." },
  { title: "Peaceful Coexistence", text: "Encouraging dialogue, cooperation, and peaceful relationships within communities." },
];

const values = [
  "Compassion and kindness",
  "Respect for human dignity",
  "Mutual help and responsibility",
  "Peaceful coexistence",
  "Respect for diverse beliefs and traditions",
  "Community participation",
];

const Religious = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (lightboxIndex === null) return;
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") setLightboxIndex((current) => (current + 1) % communityImages.length);
      if (event.key === "ArrowLeft") setLightboxIndex((current) => (current - 1 + communityImages.length) % communityImages.length);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="religious-section" id="religious">
      <div className="religious-container">
        <div className="religious-heading">
          <span className="religious-label">RELIGIOUS SUPPORT</span>
          <h2>Supporting Faith.<br />Strengthening Community.</h2>
          <p>HRSA supports religious and spiritual activities that encourage compassion, respect, mutual help, peaceful coexistence, and meaningful community participation.</p>
        </div>

        <div className="religious-feature">
          <div className="religious-feature-image">
            <img src="/images/buddha-statue/photo_1.jpg" alt="Religious and community activity" />
          </div>
          <div className="religious-feature-content">
            <span className="religious-number">01</span>
            <h3>Religious & Community Activities</h3>
            <p>Supporting activities that nurture compassion, ethical values, mutual respect, spiritual well-being, community connection, and peaceful cooperation while respecting diverse beliefs and traditions.</p>
            <a href="#religious-community" className="religious-button">Explore Support <span>→</span></a>
          </div>
        </div>

        <div className="religious-gallery">
          <img src="/images/buddha-statue/photo_2.jpg" alt="Community religious activity" />
          <img src="/images/buddha-statue/photo_3.jpg" alt="Community participation" />
          <img src="/images/buddha-statue/photo_4.jpg" alt="Religious support activity" />
        </div>

        <div className="religious-detail" id="religious-community">
          <div className="religious-detail-heading">
            <span className="religious-label">COMMUNITY ACTIVITIES</span>
            <h3>Faith, Compassion, and Community Support</h3>
            <p>HRSA encourages practical and meaningful activities that connect spiritual values with care for people, community responsibility, and peaceful cooperation.</p>
          </div>

          <div className="religious-support-grid">
            {supportAreas.map((item, index) => (
              <article className="religious-support-card" key={item.title}>
                <span className="religious-card-number">0{index + 1}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="religious-values" id="shared-values">
          <div className="religious-values-copy">
            <span className="religious-label">SHARED VALUES</span>
            <h3>Values That Bring People Together</h3>
            <p>Religious and spiritual support should contribute to a caring, respectful, and peaceful community. HRSA seeks to keep these activities inclusive and focused on human well-being.</p>
          </div>
          <div className="religious-values-list">
            {values.map((value, index) => (
              <div className="religious-value-item" key={value}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="religious-new-gallery-section">
          <div className="religious-gallery-heading">
            <span className="religious-label">COMMUNITY & VALUES</span>
            <h3>Religious and Community Activities</h3>
            <p>Activities that reflect compassion, shared responsibility, spiritual values, and community support.</p>
          </div>
          <div className="religious-new-gallery">
            {communityImages.map((image, index) => (
              <button
                className="religious-new-gallery-item"
                key={image}
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`View community image ${index + 1}`}
              >
                <img src={`/images/hrsa-content/buddha/${image}`} alt="HRSA religious and community activity" loading="lazy" />
                <span className="religious-gallery-view">View</span>
              </button>
            ))}
          </div>
        </div>

        <div className="religious-note">
          <span className="religious-label">INCLUSION & RESPECT</span>
          <h3>Respecting Every Person and Community</h3>
          <p>HRSA promotes support without discrimination based on race, ethnicity, religion, or background. Religious and community activities are intended to strengthen compassion, dignity, mutual respect, and peaceful coexistence.</p>
        </div>

        <div className="religious-cta">
          <div>
            <span className="religious-label">TOGETHER</span>
            <h3>Build Communities Through Compassion</h3>
            <p>There are many ways to support meaningful community activities and help create a more caring society.</p>
          </div>
          <div className="religious-cta-actions">
            <a href="#get-involved" className="religious-cta-primary">Get Involved</a>
            <a href="#contact" className="religious-cta-secondary">Contact HRSA</a>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="religious-lightbox" role="dialog" aria-modal="true" aria-label="Community image viewer" onClick={() => setLightboxIndex(null)}>
          <button className="religious-lightbox-close" type="button" onClick={() => setLightboxIndex(null)} aria-label="Close image viewer">×</button>
          <button className="religious-lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); setLightboxIndex((current) => (current - 1 + communityImages.length) % communityImages.length); }} aria-label="Previous image">‹</button>
          <img src={`/images/hrsa-content/buddha/${communityImages[lightboxIndex]}`} alt="HRSA religious and community activity" onClick={(event) => event.stopPropagation()} />
          <button className="religious-lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); setLightboxIndex((current) => (current + 1) % communityImages.length); }} aria-label="Next image">›</button>
          <div className="religious-lightbox-counter">{lightboxIndex + 1} / {communityImages.length}</div>
        </div>
      )}
    </section>
  );
};

export default Religious;
