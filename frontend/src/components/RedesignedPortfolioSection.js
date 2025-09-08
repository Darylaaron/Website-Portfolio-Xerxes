import React from "react";
import { portfolioData } from "../data/mockData";
import { ArrowRight, ExternalLink } from "lucide-react";

const RedesignedPortfolioSection = () => {
  const colorGradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500", 
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            🎨 Portfolio Showcase
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Welcome to My Portfolio:
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Where Creativity Takes Center Stage
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore my portfolio to discover a collection of projects that showcase my expertise, creativity, and dedication to delivering exceptional results.
          </p>
        </div>

        {/* Enhanced portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolioData.services.map((service, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                {/* Enhanced service image with overlay */}
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorGradients[index]} opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center z-10`}>
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                        <ExternalLink className="w-8 h-8" />
                      </div>
                      <p className="text-lg font-semibold">View Details</p>
                    </div>
                  </div>
                  
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Enhanced service content */}
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${colorGradients[index]} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {service.title}
                    </h3>
                    
                    <div className={`w-12 h-12 bg-gradient-to-br ${colorGradients[index]} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Enhanced bottom border indicator */}
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${colorGradients[index]} transition-all duration-500 rounded-full`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to bring your vision to life?
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary that will captivate your audience and drive exceptional results.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedesignedPortfolioSection;