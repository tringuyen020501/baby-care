import React from "react";
import "../App.css";
import { FaArrowRight } from "react-icons/fa";
import BackButton from "./BackButton";

const Blog = () => {
  const blogPosts = [
    {
      title: "NHẬN LÌ XÌ BÉ LÀM GÌ?",
      category: "Cùng mẹ chăm con khoa học",
      content: "Hướng dẫn cách xử lý tiền lì xì của bé một cách hợp lý...",
      img: "/images/baby.png",
    },
    {
      title: "DẠY TRẺ CÁCH ỨNG XỬ KHI NHẬN LÌ XÌ",
      category: "Cùng mẹ chăm con khoa học",
      content: "Phương pháp giáo dục ứng xử văn minh cho trẻ nhỏ...",
      img: "/images/baby2.jpg",
    },
    {
      title: "TRẺ SINH NON VÀ NHỮNG NGUY CƠ TIỀM ẨN",
      category: "Cùng mẹ chăm con khoa học",
      content: "Hiểu và phòng ngừa các rủi ro sức khỏe cho trẻ sinh non...",
      img: "/images/baby3.jpg",
    },
    {
      title: "DANH SÁCH MUA SẮM ĐỒ SƠ SINH ĐẦY ĐỦ VÀ TIẾT KIỆM",
      category: "Cùng mẹ chăm con khoa học",
      content: "Checklist những vật dụng cần thiết cho bé sơ sinh...",
      img: "/images/baby5.jpg",
    },
    {
      title: "GIÚP CON PHÁT TRIỂN",
      category: "Cùng mẹ chăm con khoa học",
      content: "Checklist những vật dụng cần thiết cho bé sơ sinh...",
      img: "/images/baby6.gif",
    },
    {
      title: "BẢO VỆ CON THỜI ĐIỂM GIAO MÙA ",
      category: "Cùng mẹ chăm con khoa học",
      content: "Checklist những vật dụng cần thiết cho bé sơ sinh...",
      img: "/images/baby7.jpg",
    },
  ];

  return (
    <section className="blog-container">
      <BackButton />
      <div className="blog-header">
        <h1>Cùng mẹ chăm con khoa học</h1>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <article className="blog-card" key={index}>
            <div className="blog-image">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="blog-content">
              <span className="blog-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <button className="read-more">
                Xem thêm <FaArrowRight className="arrow-icon" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
