import React from "react";
import "../App.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="newsletter-section">
        <h2>Đăng ký nhận tin</h2>
        <div className="newsletter-form">
          <input type="email" placeholder="Nhập email của bạn" />
          <button>Đăng ký</button>
        </div>
      </div>

      <div className="footer-columns">
        <div className="footer-col">
          <h3>Về chúng tôi</h3>
          <ul>
            <li>Hoạt động của BabyCare</li>
            <li>Chứng nhận</li>
            <li>Câu hỏi thường gặp</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Thông tin</h3>
          <ul>
            <li>Danh sách bán hàng</li>
            <li>Chính sách bảo hành</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách thanh toán</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Hỗ trợ</h3>
          <ul>
            <li>Liên hệ</li>
            <li>Tổng đài hỗ trợ</li>
          </ul>
        </div>

        <div className="footer-col contact-info">
          <h3>Liên hệ</h3>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <p>CÔNG TY BABYCARE VIỆT NAM</p>
          </div>
          <div className="contact-item">
            <span>Mã số doanh nghiệp: 0107678704</span>
          </div>
          <div className="contact-item">
            <span>Địa chỉ: Trường đại học FPT</span>
          </div>
          {/* <div className="contact-item">
            <FaPhone className="icon" />
            <span>Hotline: (+84) 96 946 52 99</span>
          </div> */}
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>Email: info_babycare@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>Copyrights © 2025 by Babycare</p>
      </div>
    </footer>
  );
};

export default Footer;
