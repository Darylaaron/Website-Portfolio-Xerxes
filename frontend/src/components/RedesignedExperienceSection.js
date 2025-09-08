import React, { useState } from "react";
import { professionalExperience } from "../data/mockData";
import { Briefcase, Calendar, CheckCircle, Clock, ChevronDown, ChevronUp, Star } from "lucide-react";

const RedesignedExperienceCard = ({ experience, index, gradient }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusIcon = (status) => {
    return status === "Current" ? 
      <Clock className="w-4 h-4 text-green-400" /> : 
      <CheckCircle className="w-4 h-4 text-blue-400" />;
  };

  const getStatusColor = (status) => {
    return status === "Current" ? 
      "bg-green-500/20 text-green-400 border-green-500/30" : 
      "bg-blue-500/20 text-blue-400 border-blue-500/30";
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 overflow-hidden shadow-xl">
      {/* Header */}
      <div className="p-8 border-b border-white/10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
              {experience.role}
            </h3>
            <div className="flex items-center space-x-3 mb-3">
              <Briefcase className="w-5 h-5 text-gray-300" />
              <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {experience.company}
              </span>
            </div>
            {experience.client && (
              <p className="text-sm text-gray-400 mb-2">
                Client: {experience.client}
              </p>
            )}
            {experience.description && (
              <p className="text-sm text-gray-400 mb-2">
                {experience.description}
              </p>
            )}
          </div>
          
          <div className="flex flex-col items-end space-y-3">
            <div className={`px-4 py-2 rounded-full text-xs font-semibold border backdrop-blur-sm flex items-center space-x-2 ${getStatusColor(experience.status)}`}>
              {getStatusIcon(experience.status)}
              <span>{experience.status}</span>
            </div>
            <div className={`px-4 py-2 rounded-full text-xs font-medium bg-gradient-to-r ${gradient} text-white shadow-lg`}>
              {experience.category}
            </div>
          </div>
        </div>
        
        <div className="flex items-center text-gray-300 mb-6">
          <Calendar className="w-5 h-5 mr-3" />
          <span className="text-sm font-medium">{experience.period}</span>
        </div>
        
        {/* Achievements preview */}
        <div className="space-y-3">
          <div className="flex items-start text-gray-200">
            <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-sm leading-relaxed">{experience.achievements[0]}</span>
          </div>
          {experience.achievements.length > 1 && !isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200 ml-8"
            >
              <span>Show {experience.achievements.length - 1} more achievement{experience.achievements.length > 2 ? 's' : ''}</span>
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
      </div>
      
      {/* Expanded achievements */}
      {isExpanded && (
        <div className="p-8 bg-white/5 backdrop-blur-sm">
          <div className="space-y-4">
            {experience.achievements.slice(1).map((achievement, idx) => (
              <div key={idx} className="flex items-start text-gray-200">
                <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setIsExpanded(false)}
            className="flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium mt-6 transition-colors duration-200 ml-8"
          >
            <span>Show less</span>
            <ChevronUp className="w-4 h-4 ml-2" />
          </button>
        </div>
      )}
      
      {/* Progress bar effect */}
      <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${gradient} transition-all duration-700`}></div>
    </div>
  );
};

const RedesignedExperienceSection = () => {
  const [visibleExperiences, setVisibleExperiences] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(professionalExperience.experiences.map(exp => exp.category))];
  
  const filteredExperiences = selectedCategory === "All" 
    ? professionalExperience.experiences 
    : professionalExperience.experiences.filter(exp => exp.category === selectedCategory);
    
  const displayedExperiences = filteredExperiences.slice(0, visibleExperiences);
  const hasMoreExperiences = filteredExperiences.length > visibleExperiences;

  const loadMoreExperiences = () => {
    setVisibleExperiences(prev => prev + 4);
  };

  const gradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500", 
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
    "from-teal-500 to-blue-500",
    "from-red-500 to-pink-500",
    "from-yellow-500 to-orange-500",
    "from-violet-500 to-purple-500",
    "from-cyan-500 to-blue-500",
    "from-emerald-500 to-green-500",
    "from-rose-500 to-pink-500",
    "from-amber-500 to-orange-500",
    "from-sky-500 to-blue-500"
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
            {professionalExperience.badge}
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Professional
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            {professionalExperience.description}
          </p>
          
          {/* Enhanced category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleExperiences(8);
                }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced experience grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedExperiences.map((experience, index) => (
            <RedesignedExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              gradient={gradients[index % gradients.length]}
            />
          ))}
        </div>

        {/* Enhanced Load More Button */}
        {hasMoreExperiences && (
          <div className="text-center mt-16">
            <button
              onClick={loadMoreExperiences}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Load More Experience ({filteredExperiences.length - visibleExperiences} remaining)
            </button>
          </div>
        )}

        {/* Enhanced summary stats */}
        <div className="mt-20 bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                {professionalExperience.experiences.length}
              </div>
              <div className="text-gray-300 font-semibold">Total Positions</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                {professionalExperience.experiences.filter(exp => exp.status === "Current").length}
              </div>
              <div className="text-gray-300 font-semibold">Current Roles</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                {categories.length - 1}
              </div>
              <div className="text-gray-300 font-semibold">Industry Categories</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                7+
              </div>
              <div className="text-gray-300 font-semibold">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Enhanced call to action */}
        <div className="text-center mt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to achieve similar results?
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              With 7+ years of proven experience across multiple industries, let's collaborate to elevate your digital presence and drive exceptional growth.
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

export default RedesignedExperienceSection;