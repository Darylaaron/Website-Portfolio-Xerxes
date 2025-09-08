import React from "react";
import { personalInfo } from "../data/mockData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ChevronRight, Sparkles } from "lucide-react";

const NewRedesignedHeroSection = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 });
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.3, delay: 300 });
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.2, delay: 200 });
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.2, delay: 500 });

  return (
    <section 
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Warm geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-300/50 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-300/50 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-pink-300/50 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left side - Text content with scroll animation */}
          <div 
            ref={textRef}
            className={`space-y-8 transition-all duration-1000 ease-out ${
              textVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Warm badge */}
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-100 to-pink-100 border border-orange-200/50 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-orange-700 font-semibold text-sm tracking-wide">
                {personalInfo.title}
              </span>
            </div>
            
            {/* Bold dramatic heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
                Welcome to my
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Digital Oasis
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"></div>
            </div>
            
            {/* Warm, approachable description */}
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-xl">
              <p className="font-medium">
                {personalInfo.bio}
              </p>
              
              <p className="text-gray-600">
                {personalInfo.detailedBio}
              </p>
            </div>

            {/* Skills highlight with warm styling */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-orange-100/50 shadow-sm">
              <p className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-3">
                Specializing in:
              </p>
              <p className="text-gray-700 leading-relaxed">
                {personalInfo.subtitle}
              </p>
            </div>
          </div>
          
          {/* Right side - Professional image with dramatic styling */}
          <div 
            ref={imageRef}
            className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out ${
              imageVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <div className="relative group">
              {/* Dramatic shadow and gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-blue-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-700 scale-110"></div>
              
              {/* Main image container */}
              <div className="relative">
                {/* Professional name card - minimalist approach */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-orange-100/50 z-10">
                  <div className="text-left">
                    <div className="text-2xl font-black text-gray-900 mb-1">XERXES</div>
                    <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">SEAN RUBIO</div>
                    <div className="text-sm font-semibold text-gray-600">{personalInfo.title}</div>
                  </div>
                </div>
                
                {/* Image with clean, bold framing */}
                <div className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-all duration-700">
                  <img 
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/7qkXkFOVnZOBv79XcTfo/media/663e675d02dbb03cbbdd5d44.png"
                    alt="Xerxes Sean Rubio - Digital Creative Director"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with scroll animation */}
      <div 
        ref={ctaRef}
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
          ctaVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Primary CTA */}
          <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
            <span>View My Work</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          {/* Secondary CTA */}
          <button className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full font-semibold border-2 border-orange-200 hover:border-orange-300 hover:bg-white transition-all duration-300 shadow-md">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewRedesignedHeroSection;