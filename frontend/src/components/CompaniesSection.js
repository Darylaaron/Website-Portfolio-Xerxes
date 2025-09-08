import React, { useState, useRef, useEffect } from "react";
import { companiesWorkedWith } from "../data/mockData";
import { Building2, Star } from "lucide-react";

const LazyCompanyLogo = ({ company, index }) => {
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

  return (
    <div 
      ref={logoRef}
      className="group cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
    >
      <div className="relative">
        {isInView ? (
          <>
            <div className="h-24 flex items-center justify-center mb-6">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                onLoad={() => setIsLoaded(true)}
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {company.name}
              </h3>
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-300">
                {company.category}
              </div>
            </div>
          </>
        ) : (
          <div className="h-24 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
            <Building2 className="w-8 h-8 text-gray-400" />
          </div>
        )}
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl"></div>
      </div>
    </div>
  );
};

const CompaniesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            {companiesWorkedWith.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {companiesWorkedWith.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {companiesWorkedWith.description}
          </p>
        </div>

        {/* Companies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {companiesWorkedWith.companies.map((company, index) => (
            <LazyCompanyLogo
              key={company.id}
              company={company}
              index={index}
            />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {companiesWorkedWith.companies.length}+
              </div>
              <div className="text-gray-600 font-medium">Companies Served</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {new Set(companiesWorkedWith.companies.map(c => c.category)).size}
              </div>
              <div className="text-gray-600 font-medium">Industry Sectors</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to join these successful companies?
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Let's collaborate to elevate your brand and achieve exceptional results in digital marketing, just like these trusted partners.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;