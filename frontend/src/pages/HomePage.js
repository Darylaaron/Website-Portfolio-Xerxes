import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import VideoGallery from "../components/VideoGallery";
import GraphicsGallery from "../components/GraphicsGallery";
import CompaniesSection from "../components/CompaniesSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import PortfolioSection from "../components/PortfolioSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <VideoGallery />
      <GraphicsGallery />
      <CompaniesSection />
      <ExperienceSection />
      <EducationSection />
      <PortfolioSection />
    </div>
  );
};

export default HomePage;