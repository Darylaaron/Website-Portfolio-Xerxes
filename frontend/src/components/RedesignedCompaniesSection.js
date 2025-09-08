import React, { useState, useRef, useEffect } from "react";
import { companiesWorkedWith } from "../data/mockData";
import { Building2, Star, Award, Users } from "lucide-react";

const LazyCompanyLogo = ({ company, index, gradient }) => {
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
      className="group cursor-pointer"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="relative">
          {isInView ? (
            <>
              <div className="h-24 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110 brightness-90 group-hover:brightness-110 relative z-10"
                  onLoad={() => setIsLoaded(true)}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {company.name}
                </h3>
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${gradient} text-white text-xs font-semibold rounded-full shadow-lg`}>
                  {company.category}
                </div>
              </div>
            </>
          ) : (
            <div className="h-24 bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-gray-400" />
            </div>
          )}
          
          {/* Enhanced hover effect */}
          <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-3xl`}></div>
          
          {/* Progress bar effect */}
          <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${gradient} transition-all duration-700 rounded-full`}></div>
        </div>
      </div>
    </div>
  );
};

const RedesignedCompaniesSection = () => {
  const gradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500", 
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
    "from-teal-500 to-blue-500",
    "from-red-500 to-pink-500"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-20 right-40 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            {companiesWorkedWith.badge}
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            I'VE WORKED WITH
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              THE BEST COMPANIES
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {companiesWorkedWith.description}
          </p>
        </div>

        {/* Enhanced companies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {companiesWorkedWith.companies.map((company, index) => (
            <LazyCompanyLogo
              key={company.id}
              company={company}
              index={index}
              gradient={gradients[index]}
            />
          ))}
        </div>

        {/* Enhanced trust indicators */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                {companiesWorkedWith.companies.length}+
              </div>
              <div className="text-gray-300 font-semibold text-lg">Companies Served</div>
            </div>
            
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">100%</div>
              <div className="text-gray-300 font-semibold text-lg">Client Satisfaction</div>
            </div>
            
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-3">
                {new Set(companiesWorkedWith.companies.map(c => c.category)).size}
              </div>
              <div className="text-gray-300 font-semibold text-lg">Industry Sectors</div>
            </div>
          </div>
        </div>

        {/* Enhanced call to action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to join these successful companies?
              </h3>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                Let's collaborate to elevate your brand and achieve exceptional results in digital marketing, just like these trusted partners who have experienced remarkable growth.
              </p>
              <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedesignedCompaniesSection;