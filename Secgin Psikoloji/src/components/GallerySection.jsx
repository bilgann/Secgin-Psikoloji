import React, { useEffect, useRef, useState } from "react";

import img1 from "../assets/images/IMG_2321.jpg";
import img2 from "../assets/images/IMG_2323.jpg";
import img3 from "../assets/images/IMG_6593.jpg";
import img4 from "../assets/images/IMG_2323.jpg"; 

const images = [img1, img2, img3, img4]; 

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="gallery-section">
      <div className="section-header">
        <h2>Galeri</h2>
        <div className="header-line"></div>
      </div>

      <div className="carousel-wrapper">
        <button
          className="carousel-btn left-btn"
          aria-label="Previous"
          onClick={prev}
        >
          <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.460094 8.38196C-0.153607 9.00021 -0.153607 10.0042 0.460094 10.6225L8.31548 18.5361C8.92919 19.1543 9.92584 19.1543 10.5395 18.5361C11.1532 17.9178 11.1532 16.9138 10.5395 16.2955L3.79373 9.49975L10.5351 2.70397C11.1488 2.08572 11.1488 1.08218 10.5351 0.46393C9.92142 -0.154318 8.92477 -0.154318 8.31106 0.46393L0.455675 8.37751L0.460586 8.38245L0.460094 8.38196Z" fill="#7272AB"/>
          </svg>
        </button>

        <div className="gallery-track">
          <div className="gallery-image">
            <img
              src={images[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
            />
          </div>
        </div>

        <button
          className="carousel-btn right-btn"
          aria-label="Next"
          onClick={next}
        >
          <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.54 8.38196C11.1537 9.00021 11.1537 10.0042 10.54 10.6225L2.68458 18.5361C2.07088 19.1543 1.07422 19.1543 0.460521 18.5361C-0.153181 17.9178 -0.153181 16.9138 0.460521 16.2955L7.20634 9.49975L0.46494 2.70397C-0.148763 2.08572 -0.148763 1.08218 0.46494 0.46393C1.07864 -0.154318 2.07529 -0.154318 2.689 0.46393L10.5444 8.37751L10.5395 8.38245L10.54 8.38196Z" fill="#7272AB"/>
          </svg>
        </button>
      </div>
    </section>
  );
}