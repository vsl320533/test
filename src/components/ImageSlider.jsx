import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

const sliderImages = [
  "/images/hrsa-content/distribution_of_gift/distribution-8.jpg",
  ...Array.from({ length: 17 }, (_, i) => `/images/hrsa-content/distribution_of_gift/distribution_${i < 7 ? i + 1 : i + 2}.jpg`),
  ...Array.from({ length: 22 }, (_, i) => `/images/hrsa-content/household/household${i === 0 ? "" : `_${i}`}.jpg`),
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const previous = () => {
    setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <section className="hrsa-image-slider" aria-label="HRSA activities image gallery">
      <div className="slider-main">
        <img
          src={sliderImages[current]}
          alt={`HRSA activity ${current + 1}`}
          loading="lazy"
        />

        <button className="slider-control slider-prev" onClick={previous} aria-label="Previous image">
          ‹
        </button>
        <button className="slider-control slider-next" onClick={next} aria-label="Next image">
          ›
        </button>

        <div className="slider-counter">
          {current + 1} / {sliderImages.length}
        </div>
      </div>

      <div className="slider-dots" aria-label="Choose an image">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
