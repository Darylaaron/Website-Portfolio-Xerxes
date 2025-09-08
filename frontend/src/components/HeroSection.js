import React from "react";
import { personalInfo } from "../data/mockData";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {personalInfo.title}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to my
              <br />
              <span className="text-gray-800">Digital Oasis!</span>
            </h1>
          </div>
          
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              {personalInfo.bio}
            </p>
            
            <p>
              {personalInfo.detailedBio}
            </p>
          </div>

          {/* Skills highlight */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Specializing in:
            </p>
            <p className="text-gray-600">
              {personalInfo.subtitle}
            </p>
          </div>
        </div>
        
        {/* Right side - Profile image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg z-10">
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">XERXES</div>
                <div className="text-xl font-bold text-gray-900">SEAN RUBIO</div>
                <div className="text-sm text-gray-600 mt-1">Digital Creative Director</div>
              </div>
            </div>
            <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NTczMjc2ODZ8MA&ixlib=rb-4.1.0&q=85"
                alt="Xerxes Sean Rubio - Digital Creative Director"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;