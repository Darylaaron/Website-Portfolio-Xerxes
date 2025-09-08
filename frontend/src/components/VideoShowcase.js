import React, { useState } from "react";
import { bestVideos } from "../data/mockData";
import { Play, X } from "lucide-react";

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
            🎬 Featured Content
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Best Video Content
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcase of scroll-stopping videos that have generated millions of views across social media platforms. 
            Each video demonstrates expertise in storytelling, editing, and audience engagement.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestVideos.map((video, index) => (
            <div 
              key={video.id}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => openVideoModal(video)}
            >
              {/* Video preview container */}
              <div className="relative bg-black aspect-[9/16] overflow-hidden">
                <iframe
                  src={video.vimeoUrl}
                  className="w-full h-full object-cover pointer-events-none"
                  title={video.title}
                  allow="autoplay; fullscreen; picture-in-picture"
                ></iframe>
                
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-gray-900 ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Video info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Click to watch full video
                </p>
              </div>
            </div>
          ))}
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
              <div className="aspect-[9/16]">
                <iframe
                  src={selectedVideo.vimeoUrl}
                  className="w-full h-full"
                  title={selectedVideo.title}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
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

export default VideoShowcase;