import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = ({ color }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`nav-bar ${isScrolled ? "scrolled" : ""}`}
      style={{ background: color }}
    >
      <div className="nav-left">
        <span className="logo">
          <Link to="/">
            {" "}
            <img src="/images/logo1.png" alt="Logo" />
          </Link>
        </span>
      </div>
      <div className="nav-right">
        <div className="nav-links">
          <span>
            <Link to="/story">Chuyện nhà BabyCare</Link>
          </span>
          <span>
            <Link to="/service">Dịch vụ</Link>
          </span>
          <span>
            <Link to="/safe">Cam kết an toàn</Link>
          </span>
          <span>
            <Link to="/info">Thông tin</Link>
          </span>
          <span>
            <Link to="/blog">Blog</Link>
          </span>
          <span>
            <Link to="/connect">Connect</Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
