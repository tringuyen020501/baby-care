import React, { useState } from "react";
import { signInWithGoogle, auth } from "../components/firebase/firebase";
import ServiceModal from "../components/firebase/ServiceModal";
import ConfirmationModal from "./ConfirmModal";
import "../App.css";
import Navbar from "./Navbar";

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [user, setUser] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    serviceType: "",
    timeOption: "",
  });

  const services = [
    {
      id: 1,
      title: "Giúp việc theo giờ",
      description:
        "Dọn nhà, nấu ăn, rửa bát và đổ rác theo khung giờ linh hoạt",
      type: "hourly",
      image: "https://picsum.photos/400/300?random=1",
    },
    {
      id: 2,
      title: "Giúp việc theo ngày",
      description: "Dịch vụ định kỳ hàng tuần đảm bảo nhà cửa luôn sạch sẽ",
      type: "daily",
      image: "https://picsum.photos/400/300?random=2",
    },
    {
      id: 3,
      title: "Giúp việc theo tháng",
      description: "Tổng vệ sinh chuyên sâu phù hợp cho không gian lớn",
      type: "monthly",
      image: "https://picsum.photos/400/300?random=3",
    },
  ];

  const handleBooking = (serviceType) => {
    setSelectedService(serviceType);
    setShowModal(true);
  };

  const handleConfirm = async (timeOption) => {
    if (!user) {
      try {
        const result = await signInWithGoogle();
        setUser(result.user);
      } catch (error) {
        console.error("Login failed:", error);
        return;
      }
    }

    setBookingDetails({
      serviceType: selectedService,
      timeOption: timeOption,
    });

    setShowModal(false);
    setShowConfirmationModal(true);
  };

  return (
    <div>
      <Navbar color="#BCD5E3" />
      <div className="service-page">
        <h1>Dịch vụ của chúng tôi</h1>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} className="service-image" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button
                onClick={() => handleBooking(service.type)}
                className="booking-button"
              >
                Đặt dịch vụ ngay
              </button>
            </div>
          ))}
        </div>

        {showModal && (
          <ServiceModal
            serviceType={selectedService}
            onClose={() => setShowModal(false)}
            onConfirm={handleConfirm}
          />
        )}

        {showConfirmationModal && (
          <ConfirmationModal
            bookingDetails={bookingDetails}
            user={user}
            onClose={() => setShowConfirmationModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ServicePage;
