import React from "react";
import { Users, TrendingUp, Eye, Award } from "lucide-react";
import { useStaggeredAnimation } from "../hooks/useScrollAnimation";

const NewRedesignedStatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "160K+",
      subtitle: "Followers",
      label: "Social Media",
      color: "from-orange-400 to-red-400",
      bgColor: "from-orange-50 to-red-50",
      textColor: "text-orange-600"
    },
    {
      icon: Eye,
      number: "Millions",
      subtitle: "Views",
      label: "Video Content",
      color: "from-blue-400 to-cyan-400", 
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-600"
    },
    {
      icon: TrendingUp,
      number: "7+",
      subtitle: "Years",
      label: "Experience",
      color: "from-purple-400 to-pink-400",
      bgColor: "from-purple-50 to-pink-50", 
      textColor: "text-purple-600"
    },
    {
      icon: Award,
      number: "Full-Stack",
      subtitle: "Creator",
      label: "Content Expert",
      color: "from-green-400 to-emerald-400",
      bgColor: "from-green-50 to-emerald-50",
      textColor: "text-green-600"
    }
  ];

  const [containerRef, visibleItems] = useStaggeredAnimation(stats.length, {
    threshold: 0.3,
    staggerDelay: 150
  });

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-100/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-100/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-pink-300/50 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section header with fade animation */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-pink-100 border border-orange-200/50 rounded-full">
            <span className="text-orange-700 font-bold text-sm tracking-wide">
              📊 IMPACT METRICS
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Proven
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"> Results</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mx-auto"></div>
        </div>

        {/* Stats grid with staggered animation */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ease-out ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ 
                transitionDelay: visibleItems.has(index) ? '0ms' : `${index * 150}ms` 
              }}
            >
              {/* Clean, bold card design */}
              <div className={`relative p-8 bg-gradient-to-br ${stat.bgColor} rounded-3xl border border-white/50 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2`}>
                {/* Icon with dramatic styling */}
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Numbers and text with clean typography */}
                <div className="text-center space-y-3">
                  <div className="space-y-1">
                    <div className={`text-3xl font-black ${stat.textColor}`}>
                      {stat.number}
                    </div>
                    {stat.subtitle && (
                      <div className={`text-lg font-bold ${stat.textColor}`}>
                        {stat.subtitle}
                      </div>
                    )}
                  </div>
                  
                  <div className="text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
                
                {/* Subtle hover effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="text-center mt-16">
          <div className="inline-block px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-orange-100/50 shadow-sm">
            <p className="text-gray-700 font-semibold">
              <span className="text-orange-600 font-black">Trusted by</span> leading brands across 
              <span className="text-blue-600 font-black"> 12+ industries</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewRedesignedStatsSection;