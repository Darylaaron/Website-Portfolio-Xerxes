import React from "react";
import { portfolioData } from "../data/mockData";

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Welcome to My Portfolio: Where Creativity Takes Center Stage
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore my portfolio to discover a collection of projects that showcase my expertise, creativity, and dedication to delivering exceptional results.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.services.map((service, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Service image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              {/* Service content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;