import React, { useEffect, useState } from "react";
import "../App.css";

const BabyCare = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="container">
      <div className="background-image"></div>
      <nav className={`nav-bar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-left">
          <span className="logo">
            <img src="/images/logo1.png" />
          </span>
        </div>

        <div className="nav-right">
          <div className="nav-links">
            <span>Chuyên nhà BabyCare</span>
            <span>Dịch vụ</span>
            <span>Cam Kết An Toàn</span>
            <span>Blog</span>
            <span>Connect</span>
          </div>
        </div>
      </nav>
      <div className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="vision-section">
          <h1>Vision</h1>
          <h2>collection</h2>
          <span>NEW</span>
          <span>ABRIALD</span>
        </div>
      </div>
    </div>
  );
};

export default BabyCare;
