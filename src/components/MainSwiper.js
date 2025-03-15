import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../App.css";

const MainSwiper = () => {
  const testimonials = [
    {
      id: 1,
      title: "We love BabyCare",
      subtitle: "DO BabyCare LA TUYỆT NHẤT",
      content: `Hồi con dưới 1 tuổi, mình hầu như chỉ cho bé mặc body của BabyCare. 
                Những bộ body liền thân thiết kế thông minh và coi trọng sự thoải mái 
                cho trẻ nhất trong cả 5 năm kinh nghiệm làm mẹ của mình.`,
      author: "MC Minh Trang",
      location: "Ba Đình, Hà Nội",
      label: "NEW ARRIVALS",
      image: "/images/baby.png",
    },
    {
      id: 2,
      title: "We love BabyCare",
      subtitle: "CHẤT LƯỢNG VƯỢT TRỘI",
      content: `Sản phẩm của BabyCare thực sự khiến tôi yên tâm về chất lượng...`,
      author: "Mẹ Bông",
      location: "Cầu Giấy, Hà Nội",
      label: "BEST SELLER",
      image: "/images/main1.png",
    },
    {
      id: 4,
      title: "We love BabyCare",
      subtitle: "CHẤT LƯỢNG VƯỢT TRỘI",
      content: `Sản phẩm của BabyCare thực sự khiến tôi yên tâm về chất lượng...`,
      author: "Mẹ Bông",
      location: "Cầu Giấy, Hà Nội",
      label: "BEST SELLER",
      image: "/images/main3.jpg",
    },
  ];

  return (
    <div className="testimonial-swiper">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="slide-content">
              <div className="image-container">
                <img
                  src={testimonial.image}
                  alt={testimonial.title}
                  className="slide-image"
                />
              </div>

              <div className="text-content">
                <h2 className="main-title-swipper">{testimonial.title}</h2>
                <h3 className="subtitle">{testimonial.subtitle}</h3>
                <p className="testimonial-text">{testimonial.content}</p>

                <div className="author-info">
                  <span className="author">{testimonial.author}</span>
                  <span className="location">{testimonial.location}</span>
                </div>

                {/* <div className="label-container">
                  <span className="new-label">{testimonial.label}</span>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div className="swiper-button-prev custom-nav"></div>
        <div className="swiper-button-next custom-nav"></div>
      </Swiper>
    </div>
  );
};

export default MainSwiper;
