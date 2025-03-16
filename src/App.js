import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StorySection from "./components/StorySection";
import Footer from "./components/Footer";
import SafetyCommitment from "./components/SafetyCommitment";
import Home from "./components/Home";
import SupportButton from "./components/SupportButton";
import "./App.css";
import Story from "./components/Story";
import Blog from "./components/Blog";
import Connect from "./components/Connect";
import ServicePage from "./components/ServicePage";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/safe" element={<SafetyCommitment />} />
          <Route path="/story" element={<Story />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/info" element={<Gallery />} />
        </Routes>
      </Router>
      <SupportButton />
    </div>
  );
}

export default App;
