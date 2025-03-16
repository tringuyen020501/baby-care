import React from "react";
import "../App.css";
import { FaHeart } from "react-icons/fa";
import { MdHistoryToggleOff } from "react-icons/md";
import { FaHeartPulse } from "react-icons/fa6";
import Navbar from "./Navbar";

const Story = () => {
  return (
    <div>
      <Navbar color="#BCD5E3" />
      <section className="story-container">
        <div className="story-header">
          <h1>Chuyện nhà BabyCare</h1>
        </div>
        <div className="story-timeline">
          <div className="story-card">
            <div className="story-icon">
              <FaHeart />
            </div>
            <div className="story-content">
              <h2>Áp ở từ niềm đam mê thuở nhỏ...</h2>
              <p>
                Từng mân mê những mảnh vải, từng ngủ quên trong cửi vải thô của
                mẹ...
              </p>
            </div>
          </div>
          <div className="story-card">
            <div className="story-icon">
              <MdHistoryToggleOff />
            </div>
            <div className="story-content">
              <h2>Nuôi dưỡng khi làm mẹ trẻ con...</h2>
              <p>
                Xung quanh tôi lúc đó là những thông tin về tình trạng nhiễm
                độc...
              </p>
            </div>
          </div>

          <div className="story-card">
            <div className="story-icon">
              <FaHeartPulse />
            </div>
            <div className="story-content">
              <h2>Cả "vũ trụ" ủng hộ tôi làm điều tốt nhất cho con!</h2>
              <p>Công việc của tôi lúc đó cho phép tôi hàng ngày tiếp cận...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
