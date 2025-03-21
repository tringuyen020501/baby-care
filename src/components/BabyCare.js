// BabyCare.jsx
import React from "react";
import Navbar from "./Navbar";
import "../App.css";

const BabyCare = () => {
  return (
    <div className="container">
      <div className="background-image"></div>
      <Navbar />
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
