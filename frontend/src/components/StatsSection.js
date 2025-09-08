import React from "react";
import { Smile, Star, Globe, Zap } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Smile,
      number: "20+ Million Views",
      label: "Accumulated"
    },
    {
      icon: Star,
      number: "150,000 followers",
      label: ""
    },
    {
      icon: Globe,
      number: "8 years experience",
      label: ""
    },
    {
      icon: Zap,
      number: "Master of AI",
      label: ""
    }
  ];

  return (
    <section className="bg-gray-600 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Icon circle */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <stat.icon className="w-8 h-8 text-gray-700" />
              </div>
              
              {/* Stats text */}
              <div className="text-white">
                <div className="text-lg font-semibold mb-1">
                  {stat.number}
                </div>
                {stat.label && (
                  <div className="text-sm text-gray-300">
                    {stat.label}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;