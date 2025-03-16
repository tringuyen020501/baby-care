import React from "react";
import "../App.css";
import Navbar from "./Navbar";

const SafetyCommitment = () => {
  return (
    <div>
      <Navbar color="#BCD5E3" />
      <div className="safety-container">
        <div className="safety-content">
          <h1>Mẹ thông thái lựa chọn BabyCare</h1>
          <p className="commitment-text">
            Chúng tôi cam kết tất cả các sản phẩm đều được làm từ chất liệu tự
            nhiên và không hóa chất độc hại, đảm bảo cho bé yêu sự an toàn và
            thoải mái nhất.
          </p>

          <div className="commitment-grid">
            <div className="commitment-item">
              <img src="/images/baby1.png" alt="" />
              <h3>0% hóa chất độc hại</h3>
              <p>An toàn tuyệt đối 100% cho bé</p>
            </div>

            <div className="commitment-item">
              <img src="/images/safe.png" alt="" />
              <h3>Kiểm soát trên 100 tiêu chí</h3>
              <p>5 năm liên tiếp đạt OEKO-TEX 100</p>
            </div>
            <div className="commitment-item">
              <img src="/images/water.png" alt="" />
              <h3>Kiểm soát trên 100 tiêu chí</h3>
              <p>Chứng nhận an toàn quốc tế</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyCommitment;
