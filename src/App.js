import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import StorySection from "./components/StorySection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <StorySection />
      <Footer />
    </div>
  );
}

export default App;
