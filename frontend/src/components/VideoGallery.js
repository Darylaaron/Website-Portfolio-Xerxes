import React, { useState, useRef, useEffect } from "react";
import { videoGallery } from "../data/mockData";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const LazyVideoPreview = ({ video, index, onClick }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef();

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

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={videoRef}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      onClick={onClick}
    >
      {/* Video preview container */}
      <div className={`relative bg-black overflow-hidden ${video.aspectRatio === '1:1' ? 'aspect-square' : 'aspect-[9/16]'}`}>
        {isInView ? (
          <>
            {video.type === 'streamable' ? (
              <div style={{position:'relative', width:'100%', height:'100%', paddingBottom:'0'}}>
                <iframe 
                  allow="fullscreen" 
                  allowFullScreen 
                  height="100%" 
                  src={video.embedUrl} 
                  width="100%" 
                  style={{border:'none', width:'100%', height:'100%', position:'absolute', left:'0px', top:'0px', overflow:'hidden', pointerEvents:'none'}}
                  title={video.title}
                  onLoad={() => setIsLoaded(true)}
                ></iframe>
              </div>
            ) : (
              <iframe
                src={video.embedUrl}
                className="w-full h-full object-cover pointer-events-none"
                title={video.title}
                allow="autoplay; fullscreen; picture-in-picture"
                onLoad={() => setIsLoaded(true)}
              ></iframe>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <p className="text-sm">Loading...</p>
            </div>
          </div>
        )}
        
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Play className="w-8 h-8 text-gray-900 ml-1" />
          </div>
        </div>

        {/* Video number badge */}
        <div className="absolute top-3 left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
          {index + 1}
        </div>
      </div>
      
      {/* Video info */}
      <div className="p-4">
        <h4 className="text-md font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {video.title}
        </h4>
        <p className="text-sm text-gray-500 mt-2">
          Click to watch
        </p>
      </div>
    </div>
  );
};

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [visibleVideos, setVisibleVideos] = useState(8); // Limit initial videos

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % videoGallery.categories.length);
    setVisibleVideos(8); // Reset when changing categories
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + videoGallery.categories.length) % videoGallery.categories.length);
    setVisibleVideos(8); // Reset when changing categories
  };

  const loadMoreVideos = () => {
    setVisibleVideos(prev => prev + 4);
  };

  const currentCategory = videoGallery.categories[activeCategory];
  const displayedVideos = currentCategory.videos.slice(0, visibleVideos);
  const hasMoreVideos = currentCategory.videos.length > visibleVideos;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Gallery header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            🎥 Video Gallery
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Video Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive showcase of video content ranging from viral social media posts to professional client campaigns.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex items-center justify-center mb-12">
          <button
            onClick={prevCategory}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 mr-6"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex space-x-4">
            {videoGallery.categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  index === activeCategory
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <button
            onClick={nextCategory}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 ml-6"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Current Category Section */}
        <div className="mb-16">
          {/* Category header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              {currentCategory.badge}
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentCategory.title}
            </h3>
            <p className="text-xl text-gray-600 mb-2 font-semibold">
              {currentCategory.subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {currentCategory.description}
            </p>
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentCategory.videos.map((video, index) => (
              <LazyVideoPreview
                key={video.id}
                video={video}
                index={index}
                onClick={() => openVideoModal(video)}
              />
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-lg bg-black rounded-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              {/* Video container */}
              <div className={`${selectedVideo.aspectRatio === '1:1' ? 'aspect-square' : 'aspect-[9/16]'}`}>
                {selectedVideo.type === 'streamable' ? (
                  <div style={{position:'relative', width:'100%', height:'100%', paddingBottom:'0'}}>
                    <iframe 
                      allow="fullscreen" 
                      allowFullScreen 
                      height="100%" 
                      src={selectedVideo.embedUrl} 
                      width="100%" 
                      style={{border:'none', width:'100%', height:'100%', position:'absolute', left:'0px', top:'0px', overflow:'hidden'}}
                      title={selectedVideo.title}
                    ></iframe>
                  </div>
                ) : (
                  <iframe
                    src={selectedVideo.embedUrl}
                    className="w-full h-full"
                    title={selectedVideo.title}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                )}
              </div>
              
              {/* Video title */}
              <div className="p-4 bg-gray-900">
                <h3 className="text-white font-semibold">
                  {selectedVideo.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoGallery;