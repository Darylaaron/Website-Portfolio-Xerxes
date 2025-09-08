import React, { useState, useRef, useEffect } from "react";
import { graphicsGallery } from "../data/mockData";
import { Eye, X, ZoomIn } from "lucide-react";

const LazyImagePreview = ({ graphic, index, onClick }) => {
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
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden">
        {isInView ? (
          <img
            src={graphic.imageUrl}
            alt={graphic.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onLoad={() => setIsLoaded(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-gray-500 text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-sm">Loading...</p>
            </div>
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ZoomIn className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm font-semibold">View Full Size</p>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-blue-600 rounded-full text-white text-xs font-semibold shadow-lg">
          {graphic.category}
        </div>

        {/* Number badge */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm shadow-lg">
          {index + 1}
        </div>
      </div>
      
      {/* Graphic info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {graphic.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Click to view full size
        </p>
      </div>
    </div>
  );
};

const GraphicsGallery = () => {
  const [selectedGraphic, setSelectedGraphic] = useState(null);
  const [visibleGraphics, setVisibleGraphics] = useState(6); // Show all initially since there are only 6

  const openGraphicModal = (graphic) => {
    setSelectedGraphic(graphic);
  };

  const closeGraphicModal = () => {
    setSelectedGraphic(null);
  };

  const displayedGraphics = graphicsGallery.graphics.slice(0, visibleGraphics);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            {graphicsGallery.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {graphicsGallery.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {graphicsGallery.description}
          </p>
        </div>

        {/* Graphics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedGraphics.map((graphic, index) => (
            <LazyImagePreview
              key={graphic.id}
              graphic={graphic}
              index={index}
              onClick={() => openGraphicModal(graphic)}
            />
          ))}
        </div>

        {/* Graphics Modal */}
        {selectedGraphic && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={closeGraphicModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              {/* Image container */}
              <div className="relative">
                <img
                  src={selectedGraphic.imageUrl}
                  alt={selectedGraphic.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
              
              {/* Image info */}
              <div className="p-6 bg-gray-900">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-xl">
                      {selectedGraphic.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Category: {selectedGraphic.category}
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-blue-600 rounded-full text-white text-sm font-semibold">
                    {selectedGraphic.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GraphicsGallery;