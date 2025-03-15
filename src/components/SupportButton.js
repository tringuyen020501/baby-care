import React, { useState } from "react";
import "../App.css";
import { FaCommentDots, FaPhone, FaTimes } from "react-icons/fa";

const SupportButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="floating-container">
      {/* Messenger và Call buttons */}
      <div className={`support-buttons ${isExpanded ? "expanded" : ""}`}>
        <button className="support-button messenger">
          <FaCommentDots />
          <span className="tooltip">Messenger</span>
        </button>
        <button className="support-button call">
          <FaPhone />
          <span className="tooltip">Hotline</span>
        </button>
      </div>

      {/* Main floating button */}
      <button
        className="main-floating-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <FaTimes /> : "Support"}
      </button>
    </div>
  );
};

export default SupportButton;
