import React, { useState } from "react";
import { professionalExperience } from "../data/mockData";
import { Briefcase, Calendar, CheckCircle, Clock, ChevronDown, ChevronUp } from "lucide-react";

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (category) => {
    const colors = {
      "Digital Marketing": "bg-blue-100 text-blue-800",
      "Social Media": "bg-green-100 text-green-800",
      "SEO & Lead Generation": "bg-purple-100 text-purple-800",
      "Healthcare Content": "bg-red-100 text-red-800",
      "Event Marketing": "bg-yellow-100 text-yellow-800",
      "UGC & Multi-Brand": "bg-indigo-100 text-indigo-800",
      "Marketing Automation": "bg-orange-100 text-orange-800",
      "Real Estate": "bg-teal-100 text-teal-800",
      "Agency Work": "bg-pink-100 text-pink-800",
      "B2B SaaS": "bg-cyan-100 text-cyan-800",
      "Course Marketing": "bg-lime-100 text-lime-800",
      "Personal Brand": "bg-violet-100 text-violet-800",
      "Brand Partnerships": "bg-rose-100 text-rose-800",
      "Education": "bg-emerald-100 text-emerald-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const getStatusIcon = (status) => {
    return status === "Current" ? 
      <Clock className="w-4 h-4 text-green-600" /> : 
      <CheckCircle className="w-4 h-4 text-blue-600" />;
  };

  const getStatusColor = (status) => {
    return status === "Current" ? 
      "bg-green-100 text-green-800 border-green-200" : 
      "bg-blue-100 text-blue-800 border-blue-200";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {experience.role}
            </h3>
            <div className="flex items-center space-x-2 mb-2">
              <Briefcase className="w-4 h-4 text-gray-500" />
              <span className="text-lg font-semibold text-gray-800">
                {experience.company}
              </span>
            </div>
            {experience.client && (
              <p className="text-sm text-gray-600 mb-2">
                Client: {experience.client}
              </p>
            )}
            {experience.description && (
              <p className="text-sm text-gray-600 mb-2">
                {experience.description}
              </p>
            )}
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            <div className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center space-x-1 ${getStatusColor(experience.status)}`}>
              {getStatusIcon(experience.status)}
              <span>{experience.status}</span>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(experience.category)}`}>
              {experience.category}
            </div>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">{experience.period}</span>
        </div>
        
        {/* Achievements preview */}
        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-sm">{experience.achievements[0]}</span>
          </div>
          {experience.achievements.length > 1 && !isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
            >
              <span>Show {experience.achievements.length - 1} more achievement{experience.achievements.length > 2 ? 's' : ''}</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          )}
        </div>
      </div>
      
      {/* Expanded achievements */}
      {isExpanded && (
        <div className="p-6 bg-gray-50">
          <div className="space-y-3">
            {experience.achievements.slice(1).map((achievement, idx) => (
              <div key={idx} className="flex items-start text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{achievement}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setIsExpanded(false)}
            className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium mt-4 transition-colors duration-200"
          >
            <span>Show less</span>
            <ChevronUp className="w-4 h-4 ml-1" />
          </button>
        </div>
      )}
    </div>
  );
};

const ExperienceSection = () => {
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            {professionalExperience.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {professionalExperience.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            {professionalExperience.description}
          </p>
          
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleExperiences(8);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Experience grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedExperiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreExperiences && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreExperiences}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Load More Experience ({filteredExperiences.length - visibleExperiences} remaining)
            </button>
          </div>
        )}

        {/* Summary stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {professionalExperience.experiences.length}
              </div>
              <div className="text-gray-600 font-medium">Total Positions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {professionalExperience.experiences.filter(exp => exp.status === "Current").length}
              </div>
              <div className="text-gray-600 font-medium">Current Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-600 font-medium">Industry Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">7+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;