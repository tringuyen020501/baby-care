import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [loaded, setLoaded] = useState(false);

  const images = [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
    "https://picsum.photos/400/300?random=4",
    "https://picsum.photos/400/300?random=5",
    "https://picsum.photos/400/300?random=6",
    "https://picsum.photos/400/300?random=7",
    "https://picsum.photos/400/300?random=8",
    "https://picsum.photos/400/300?random=9",
    "https://picsum.photos/400/300?random=10",
    "https://picsum.photos/400/300?random=11",
    "https://picsum.photos/400/300?random=12",
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setZoomLevel(1);
  };

  const handleZoom = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setZoomLevel((prev) => Math.min(Math.max(prev * delta, 0.5), 3));
  };
  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Navbar color="#BCD5E3" />
      <div className="gallery-container">
        <div className="image-grid">
          {images.map((img, index) => (
            <div
              key={index}
              className={`image-item ${loaded ? "loaded" : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => handleImageClick(img)}
            >
              <img src={img} alt={`Gallery item ${index}`} />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="overlay" onClick={() => setSelectedImage(null)}>
            <div
              className="enlarged-container"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged"
                className="enlarged-image"
                style={{ transform: `scale(${zoomLevel})` }}
                onWheel={handleZoom}
              />
              <div className="zoom-controls">
                <button
                  onClick={() =>
                    setZoomLevel((prev) => Math.min(prev + 0.1, 3))
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    setZoomLevel((prev) => Math.max(prev - 0.1, 0.5))
                  }
                >
                  -
                </button>
              </div>
              <button className="close-button" onClick={handleClose}>
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
