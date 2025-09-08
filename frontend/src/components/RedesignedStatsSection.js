import React from "react";
import { Smile, Star, Globe, Zap } from "lucide-react";

const RedesignedStatsSection = () => {
  const stats = [
    {
      icon: Smile,
      number: "20M+",
      subtitle: "Views",
      label: "Accumulated",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Star,
      number: "150K",
      subtitle: "followers",
      label: "",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Globe,
      number: "8",
      subtitle: "Years",
      label: "Experience",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Zap,
      number: "AI",
      subtitle: "Master",
      label: "",
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              {/* Enhanced icon with gradient background */}
              <div className="relative mx-auto mb-6">
                <div className={`w-24 h-24 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Floating ring animation */}
                <div className={`absolute inset-0 w-24 h-24 mx-auto rounded-full border-2 border-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`}></div>
              </div>
              
              {/* Enhanced stats text with glassmorphism card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                <div className="text-white space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </span>
                    {stat.subtitle && (
                      <span className="text-lg font-semibold text-gray-300">
                        {stat.subtitle}
                      </span>
                    )}
                  </div>
                  {stat.label && (
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Hover effect indicator */}
              <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${stat.color} mx-auto mt-4 transition-all duration-500 rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RedesignedStatsSection;