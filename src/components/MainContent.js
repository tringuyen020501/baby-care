import React from "react";
import "../App.css";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="hero-section">
        <img src="/images/main.png" alt="baby-care" className="hero-image" />
        <div className="hero-text">
          <span className="new-label">NEW</span>
          <h1>VISION</h1>
          <h2>COLLECTION</h2>
          <p>ABRIALD</p>
          <button className="cta-button">Xem ngay</button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
