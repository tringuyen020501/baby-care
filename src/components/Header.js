import React, { useState, useEffect } from "react";
import "../App.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src="/images/logo.png" />
      </div>

      <nav className={`nav ${isMenuOpen ? "show" : ""}`}>
        <a href="#home">Chuyên nhà BabyCare</a>
        <a href="#products">Dịch vụ</a>
        <a href="#safe">Cam Kết An Toàn</a>
        <a href="#blog">Blog</a>
        <a href="#connect">Connect</a>
      </nav>

      <div className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>
    </header>
  );
};

export default Header;
