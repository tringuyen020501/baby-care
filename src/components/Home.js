import React from "react";
import BabyCare from "./BabyCare";
import Footer from "./Footer";
import StorySection from "./StorySection";
import MainSwiper from "./MainSwiper";

const Home = () => {
  return (
    <div className="home">
      <BabyCare />
      <StorySection />
      <MainSwiper />
      <Footer />
    </div>
  );
};
export default Home;
