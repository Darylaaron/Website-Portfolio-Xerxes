import React, { useState } from "react";
import { videoGallery } from "../data/mockData";
import { Play, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const RedesignedVideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % videoGallery.categories.length);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + videoGallery.categories.length) % videoGallery.categories.length);
  };

  const currentCategory = videoGallery.categories[activeCategory];

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
    "from-violet-500 to-purple-500"
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
        {/* Enhanced gallery header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            🎥 Complete Video Portfolio
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Video
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive showcase of video content spanning viral social media posts to professional client campaigns that drive real business results.
          </p>
        </div>

        {/* Enhanced Category Navigation */}
        <div className="flex items-center justify-center mb-16">
          <button
            onClick={prevCategory}
            className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 mr-8 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="flex space-x-6">
            {videoGallery.categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg ${
                  index === activeCategory
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-105'
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <button
            onClick={nextCategory}
            className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 ml-8 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Current Category Section */}
        <div className="mb-20">
          {/* Enhanced category header */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
              {currentCategory.badge}
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {currentCategory.title}
              </span>
            </h3>
            
            <p className="text-xl text-purple-300 mb-4 font-semibold">
              {currentCategory.subtitle}
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {currentCategory.description}
            </p>
          </div>

          {/* Enhanced video grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentCategory.videos.map((video, index) => (
              <div 
                key={video.id}
                className="group cursor-pointer"
                onClick={() => openVideoModal(video)}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  {/* Enhanced video preview */}
                  <div className="relative bg-black aspect-[9/16] overflow-hidden">
                    <iframe
                      src={video.vimeoUrl}
                      className="w-full h-full object-cover pointer-events-none"
                      title={video.title}
                      allow="autoplay; fullscreen; picture-in-picture"
                    ></iframe>
                    
                    {/* Enhanced play overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className={`w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>
                    
                    {/* Enhanced video number badge */}
                    <div className={`absolute top-4 left-4 w-10 h-10 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Enhanced video info */}
                  <div className="p-6 space-y-4">
                    <h4 className="text-lg font-bold text-white line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {video.title}
                    </h4>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-400">
                        Click to watch
                      </p>
                      <div className={`w-8 h-8 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Progress bar effect */}
                    <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${gradients[index]} transition-all duration-500 rounded-full`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-lg bg-gray-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              {/* Enhanced close button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              {/* Video container */}
              <div className="aspect-[9/16]">
                <iframe
                  src={selectedVideo.vimeoUrl}
                  className="w-full h-full"
                  title={selectedVideo.title}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
              
              {/* Enhanced video title */}
              <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-white/10">
                <h3 className="text-white font-bold text-lg">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {currentCategory.title} Collection
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced call to action */}
        <div className="text-center mt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to create compelling video content?
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              From viral social media content to professional client campaigns, let's create videos that captivate and convert.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              Start Your Video Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedesignedVideoGallery;