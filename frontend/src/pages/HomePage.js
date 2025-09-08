import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import VideoGallery from "../components/VideoGallery";
import GraphicsGallery from "../components/GraphicsGallery";
import PortfolioSection from "../components/PortfolioSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <VideoGallery />
      <GraphicsGallery />
      <PortfolioSection />
    </div>
  );
};

export default HomePage;