import React from "react";
import RedesignedHeader from "../components/RedesignedHeader";
import NewRedesignedHeroSection from "../components/NewRedesignedHeroSection";
import NewRedesignedStatsSection from "../components/NewRedesignedStatsSection";
import RedesignedVideoGallery from "../components/RedesignedVideoGallery";
import RedesignedGraphicsGallery from "../components/RedesignedGraphicsGallery";
import RedesignedCompaniesSection from "../components/RedesignedCompaniesSection";
import RedesignedExperienceSection from "../components/RedesignedExperienceSection";
import RedesignedEducationSection from "../components/RedesignedEducationSection";
import RedesignedPortfolioSection from "../components/RedesignedPortfolioSection";

const NewRedesignedHomePage = () => {
  return (
    <div className="min-h-screen">
      <RedesignedHeader />
      <section id="home">
        <NewRedesignedHeroSection />
      </section>
      <NewRedesignedStatsSection />
      <section id="videos">
        <RedesignedVideoGallery />
      </section>
      <section id="graphics">
        <RedesignedGraphicsGallery />
      </section>
      <section id="companies">
        <RedesignedCompaniesSection />
      </section>
      <section id="experience">
        <RedesignedExperienceSection />
      </section>
      <section id="education">
        <RedesignedEducationSection />
      </section>
      <section id="portfolio">
        <RedesignedPortfolioSection />
      </section>
    </div>
  );
};

export default NewRedesignedHomePage;