import React, { useState, useRef, useEffect } from "react";
import { educationBackground } from "../data/mockData";
import { GraduationCap, Calendar, Award, BookOpen, Star } from "lucide-react";

const LazyLogoPreview = ({ degree, index, gradient }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const logoRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status) => {
    return status === "Completed" ? 
      "bg-green-500/20 text-green-400 border-green-500/30" : 
      "bg-orange-500/20 text-orange-400 border-orange-500/30";
  };

  return (
    <div 
      ref={logoRef}
      className="group"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 overflow-hidden shadow-2xl">
        {/* University logo section */}
        <div className="p-8 border-b border-white/10">
          <div className={`relative ${degree.aspectRatio === '1:1' ? 'aspect-square' : 'aspect-[7.5:1]'} bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden mb-6 border border-white/20`}>
            {isInView ? (
              <div style={{position:'relative', width:'100%', height:'100%', paddingBottom:'0'}}>
                <iframe 
                  allow="fullscreen" 
                  allowFullScreen 
                  height="100%" 
                  src={degree.logoEmbed} 
                  width="100%" 
                  style={{border:'none', width:'100%', height:'100%', position:'absolute', left:'0px', top:'0px', overflow:'hidden'}}
                  title={`${degree.institution} logo`}
                  onLoad={() => setIsLoaded(true)}
                ></iframe>
              </div>
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <GraduationCap className="w-12 h-12 text-gray-400" />
              </div>
            )}
            
            {/* Overlay effect */}
            <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
            {degree.institution}
          </h3>
        </div>

        {/* Degree information */}
        <div className="p-8 space-y-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className={`px-4 py-2 bg-gradient-to-r ${gradient} text-white text-xs font-semibold rounded-full shadow-lg`}>
              {degree.type}
            </div>
            <div className={`px-4 py-2 rounded-full text-xs font-semibold border backdrop-blur-sm ${getStatusColor(degree.status)}`}>
              {degree.status}
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-white mb-4 leading-tight">
            {degree.degree}
          </h4>
          
          <div className="space-y-3">
            <div className="flex items-center text-gray-300">
              <Calendar className="w-5 h-5 mr-3" />
              <span className="text-sm font-medium">{degree.period}</span>
            </div>
            
            <div className="flex items-center text-gray-300">
              <BookOpen className="w-5 h-5 mr-3" />
              <span className="text-sm">{degree.field}</span>
            </div>
          </div>
          
          {/* Progress bar effect */}
          <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${gradient} transition-all duration-700 rounded-full mt-6`}></div>
        </div>
      </div>
    </div>
  );
};

const RedesignedEducationSection = () => {
  const gradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-20 right-40 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            {educationBackground.badge}
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {educationBackground.description}
          </p>
        </div>

        {/* Enhanced education grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {educationBackground.degrees.map((degree, index) => (
            <LazyLogoPreview
              key={degree.id}
              degree={degree}
              index={index}
              gradient={gradients[index]}
            />
          ))}
        </div>

        {/* Enhanced education summary */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-4xl font-bold text-white mb-6">
              Strong Academic Foundation
            </h3>
            
            <p className="text-gray-300 mb-12 text-xl max-w-4xl mx-auto leading-relaxed">
              With advanced studies in Applied Linguistics and a solid foundation in Secondary Education with English major, 
              this academic background provides exceptional communication skills, content creation expertise, and educational content development capabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                  Master's Level
                </div>
                <div className="text-gray-300 font-semibold">Applied Linguistics</div>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  Bachelor's Degree
                </div>
                <div className="text-gray-300 font-semibold">Secondary Education</div>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">
                  English Major
                </div>
                <div className="text-gray-300 font-semibold">Language Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedesignedEducationSection;