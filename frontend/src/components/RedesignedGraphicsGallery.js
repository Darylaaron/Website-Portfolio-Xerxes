import React, { useState, useRef, useEffect } from "react";
import { graphicsGallery } from "../data/mockData";
import { Eye, X, ZoomIn, ExternalLink } from "lucide-react";

const LazyImagePreview = ({ graphic, index, onClick, gradient }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef();

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

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={imageRef}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="relative aspect-square overflow-hidden">
          {isInView ? (
            <img
              src={graphic.imageUrl}
              alt={graphic.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onLoad={() => setIsLoaded(true)}
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="text-white text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm">Loading...</p>
              </div>
            </div>
          )}
          
          {/* Enhanced hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="text-center text-white">
              <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}>
                <ZoomIn className="w-10 h-10 text-white" />
              </div>
              <p className="text-lg font-semibold">View Full Size</p>
            </div>
          </div>

          {/* Enhanced category badge */}
          <div className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${gradient} rounded-full text-white text-sm font-semibold shadow-lg`}>
            {graphic.category}
          </div>

          {/* Enhanced number badge */}
          <div className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
            {index + 1}
          </div>
        </div>
        
        {/* Enhanced graphic info */}
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
            {graphic.title}
          </h3>
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">
              Click to view full size
            </p>
            <div className={`w-8 h-8 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}>
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
          </div>
          
          {/* Progress bar effect */}
          <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${gradient} transition-all duration-500 rounded-full`}></div>
        </div>
      </div>
    </div>
  );
};

const RedesignedGraphicsGallery = () => {
  const [selectedGraphic, setSelectedGraphic] = useState(null);

  const openGraphicModal = (graphic) => {
    setSelectedGraphic(graphic);
  };

  const closeGraphicModal = () => {
    setSelectedGraphic(null);
  };

  const gradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500", 
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500"
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
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            {graphicsGallery.badge}
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Sample
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Graphics
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {graphicsGallery.description}
          </p>
        </div>

        {/* Enhanced graphics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {graphicsGallery.graphics.map((graphic, index) => (
            <LazyImagePreview
              key={graphic.id}
              graphic={graphic}
              index={index}
              gradient={gradients[index]}
              onClick={() => openGraphicModal(graphic)}
            />
          ))}
        </div>

        {/* Enhanced Graphics Modal */}
        {selectedGraphic && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative max-w-5xl w-full bg-gray-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              {/* Enhanced close button */}
              <button
                onClick={closeGraphicModal}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              {/* Image container */}
              <div className="relative">
                <img
                  src={selectedGraphic.imageUrl}
                  alt={selectedGraphic.title}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>
              
              {/* Enhanced image info */}
              <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-2">
                      {selectedGraphic.title}
                    </h3>
                    <p className="text-gray-400 text-lg">
                      Category: {selectedGraphic.category}
                    </p>
                  </div>
                  <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg shadow-lg">
                    {selectedGraphic.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced call to action */}
        <div className="text-center mt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need professional graphic design?
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              From branding and marketing materials to social media graphics and digital designs, let's create visuals that captivate your audience.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              Start Your Design Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedesignedGraphicsGallery;