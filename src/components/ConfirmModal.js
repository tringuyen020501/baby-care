import React from "react";
import "../App.css";

const ConfirmModal = ({ bookingDetails, user, onClose }) => {
  const { serviceType, timeOption } = bookingDetails;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Xác nhận đặt lịch thành công</h3>
        <div className="confirmation-details">
          <p>
            <strong>Dịch vụ:</strong> {serviceType}
          </p>
          <p>
            <strong>Thời gian:</strong> {timeOption}
          </p>
          <p>
            <strong>Người đặt:</strong> {user.email}
          </p>
        </div>
        <button onClick={onClose} className="close-button">
          X
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
