import React from "react";
import "../App.css";
import { GiClothes, GiPresent, GiHeartPlus } from "react-icons/gi";

const Connect = () => {
  return (
    <section className="activities-container">
      <h1 className="main-title">CÁC HOẠT ĐỘNG KHÁC</h1>

      <div className="activity-content">
        <div className="description-section">
          <p>
            Bên cạnh những hoạt động chính trên, Babycare còn dành nguồn lực để
            hỗ trợ các em nhỏ có hoàn cảnh khó khăn như: chương trình{" "}
            <strong>“Góp nhặt yêu thương - Đông ấm Miền Trung”</strong> hỗ trợ
            khắc phục hậu quả lũ lụt tại Miền Trung; trao quà tặng cho các bé sơ
            sinh có mẹ không may mắc COVID-19 tại trung tâm H.O.P.E...
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <GiClothes className="stat-icon" />
            <h3>600 BỘ</h3>
            <p>Quần áo sơ sinh Babycare</p>
          </div>

          <div className="stat-card">
            <GiPresent className="stat-icon" />
            <h3>100 SUẤT</h3>
            <p>Quà cho gia đình khó khăn</p>
          </div>
        </div>

        <div className="highlight-section">
          <GiHeartPlus className="heart-icon" />
          <h2>TẠO NHỊP YÊU THƯƠNG</h2>
          <p className="author">FPT</p>
        </div>

        <button className="cta-button">
          KẾT NỐI NGAY <GiHeartPlus className="button-icon" />
        </button>
      </div>
    </section>
  );
};

export default Connect;
