import React from "react";
import "../App.css";

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="story-container-section">
        <h2 className="section-title">Chuyện nhà BabyCare</h2>

        <div className="content-wrapper">
          <div className="story-image">
            <img
              src="/images/home_banner.png"
              alt="Chuyện nhà BU"
              className="story-img"
            />
          </div>
          <div className="text-content">
            <p className="story-text">
              BabyCare là thương hiệu đầu tiên tại Việt Nam đạt chuẩn quốc tế
              OEKO-TEX 100 cấp độ 1 - cấp độ an toàn nhất dành cho trẻ sơ sinh.
              Từng thiết kế của BU chất chứa mong muốn của một người mẹ với mong
              muốn con mình được bảo vệ từ những điều nhỏ nhất trong những năm
              tháng đầu đời.
            </p>
          </div>

          {/* <div className="more-links">
            <h3>Xem thêm</h3>
            <ul className="link-list">
              <li>NEW ABOUTALS</li>
              <li>Cris-Phois</li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
