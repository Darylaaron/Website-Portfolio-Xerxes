import React from "react";
import { ChevronDown } from "lucide-react";
import { personalInfo } from "../data/mockData";

const RedesignedHeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Enhanced text content */}
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                ✨ {personalInfo.title}
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Welcome to my
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Digital Oasis!
                </span>
              </h1>
            </div>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                {personalInfo.bio}
              </p>
              
              <p className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                {personalInfo.detailedBio}
              </p>
            </div>

            {/* Skills highlight */}
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-3">
                Specializing in:
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {personalInfo.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                View My Work
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Right side - Enhanced profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Floating name card with glassmorphism */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl z-10 border border-white/20 group-hover:scale-105 transition-all duration-300">
                <div className="text-right text-white">
                  <div className="text-xl font-bold">XERXES</div>
                  <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SEAN RUBIO</div>
                  <div className="text-sm text-gray-300 mt-2">{personalInfo.title}</div>
                </div>
              </div>
              
              {/* Enhanced profile image with multiple shadows and effects */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl group-hover:scale-105 transition-all duration-500 border-2 border-white/20">
                  <img 
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/7qkXkFOVnZOBv79XcTfo/media/663e675d02dbb03cbbdd5d44.png"
                    alt="Xerxes Sean Rubio - Digital Creative Director"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default RedesignedHeroSection;