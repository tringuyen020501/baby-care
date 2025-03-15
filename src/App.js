import React from "react";
import StorySection from "./components/StorySection";
import Footer from "./components/Footer";
import "./App.css";
import BabyCare from "./components/BabyCare";
import SupportButton from "./components/SupportButton";

function App() {
  return (
    <div className="App">
      <BabyCare />
      <StorySection />
      <Footer />
      <SupportButton />
    </div>
  );
}

export default App;
