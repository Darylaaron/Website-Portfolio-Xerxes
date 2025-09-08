import React from "react";
import RedesignedHeader from "../components/RedesignedHeader";
import RedesignedHeroSection from "../components/RedesignedHeroSection";
import RedesignedStatsSection from "../components/RedesignedStatsSection";
import RedesignedVideoGallery from "../components/RedesignedVideoGallery";
import RedesignedGraphicsGallery from "../components/RedesignedGraphicsGallery";
import RedesignedPortfolioSection from "../components/RedesignedPortfolioSection";

const RedesignedHomePage = () => {
  return (
    <div className="min-h-screen">
      <RedesignedHeader />
      <section id="home">
        <RedesignedHeroSection />
      </section>
      <RedesignedStatsSection />
      <section id="videos">
        <RedesignedVideoGallery />
      </section>
      <section id="graphics">
        <RedesignedGraphicsGallery />
      </section>
      <section id="portfolio">
        <RedesignedPortfolioSection />
      </section>
    </div>
  );
};

export default RedesignedHomePage;