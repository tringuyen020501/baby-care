import React, { useState } from "react";
import "../../App.css";

const ServiceModal = ({ serviceType, onClose, onConfirm }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const timeOptions = {
    hourly: [
      "08:00 - 10:00",
      "10:00 - 12:00",
      "14:00 - 16:00",
      "18:00 - 22:00",
    ],
    daily: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
    monthly: ["1 Tháng", "2 Tháng", "3 Tháng", "4 Tháng", "5 Tháng", "6 Tháng"],
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Chọn thời gian</h3>
        <div className="time-options">
          {timeOptions[serviceType].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="timeOption"
                value={option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />{" "}
              {option}
            </label>
          ))}
        </div>
        <div className="modal-actions">
          <button onClick={onClose}>Hủy</button>
          <button
            onClick={() => onConfirm(selectedOption)}
            disabled={!selectedOption}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
