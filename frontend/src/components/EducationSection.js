import React, { useState, useRef, useEffect } from "react";
import { educationBackground } from "../data/mockData";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const LazyLogoPreview = ({ degree, index }) => {
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

  const getTypeColor = (type) => {
    return type === "Master's Degree" ? 
      "bg-purple-100 text-purple-800" : 
      "bg-blue-100 text-blue-800";
  };

  const getStatusColor = (status) => {
    return status === "Completed" ? 
      "bg-green-100 text-green-800 border-green-200" : 
      "bg-orange-100 text-orange-800 border-orange-200";
  };

  return (
    <div 
      ref={logoRef}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
    >
      {/* University logo */}
      <div className="p-6 border-b border-gray-100">
        <div className={`relative ${degree.aspectRatio === '1:1' ? 'aspect-square' : 'aspect-[7.5:1]'} bg-gray-50 rounded-xl overflow-hidden mb-4`}>
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
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <GraduationCap className="w-12 h-12 text-gray-400" />
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {degree.institution}
        </h3>
      </div>

      {/* Degree information */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-3">
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(degree.type)}`}>
                {degree.type}
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(degree.status)}`}>
                {degree.status}
              </div>
            </div>
            
            <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
              {degree.degree}
            </h4>
            
            <div className="flex items-center text-gray-600 mb-3">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">{degree.period}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="text-sm">{degree.field}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            {educationBackground.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {educationBackground.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {educationBackground.description}
          </p>
        </div>

        {/* Education grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {educationBackground.degrees.map((degree, index) => (
            <LazyLogoPreview
              key={degree.id}
              degree={degree}
              index={index}
            />
          ))}
        </div>

        {/* Education summary */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12 border border-green-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Strong Academic Foundation
            </h3>
            
            <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto leading-relaxed">
              With advanced studies in Applied Linguistics and a solid foundation in Secondary Education with English major, 
              this academic background provides exceptional communication skills, content creation expertise, and educational content development capabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  Master's Level
                </div>
                <div className="text-gray-600 font-medium">Applied Linguistics</div>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  Bachelor's Degree
                </div>
                <div className="text-gray-600 font-medium">Secondary Education</div>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  English Major
                </div>
                <div className="text-gray-600 font-medium">Language Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;