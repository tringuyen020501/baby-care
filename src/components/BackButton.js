import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "../App.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate("/")}>
      <IoArrowBack />
    </button>
  );
};

export default BackButton;
