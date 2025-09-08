import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import VideoShowcase from "../components/VideoShowcase";
import PortfolioSection from "../components/PortfolioSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <VideoShowcase />
      <PortfolioSection />
    </div>
  );
};

export default HomePage;