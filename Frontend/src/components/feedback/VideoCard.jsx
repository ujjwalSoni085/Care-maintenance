import React, { useState } from 'react';
import { FiPlay } from 'react-icons/fi';

const VideoCard = ({ video, isActive, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Simple utility to parse youtube URLs and get embed link
  const getEmbedUrl = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1`;
    }
    return url;
  };

  const isYouTube = (url) => {
    return url && (url.includes('youtube.com') || url.includes('youtu.be'));
  };

  const getYoutubeThumbnail = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      // Trying maxresdefault first, fallback to hqdefault could be handled but usually maxresdefault works
      return `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`;
    }
    return '';
  };

  return (
    <div 
      className="relative w-full rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm transition-all duration-300 group cursor-pointer"
      style={{ 
        transform: isHovered && !isActive ? 'translateY(-4px)' : 'none',
        boxShadow: isHovered && !isActive ? '0 12px 24px -8px rgba(0, 0, 0, 0.1)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={!isActive ? onPlay : undefined}
    >
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative pt-[56.25%] w-full bg-slate-900 overflow-hidden">
        {isActive ? (
          <div className="absolute inset-0 w-full h-full">
            {isYouTube(video.url) ? (
              <iframe
                className="w-full h-full"
                src={getEmbedUrl(video.url)}
                title={video.customerName}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                className="w-full h-full object-cover"
                src={video.url}
                controls
                autoPlay
              />
            )}
          </div>
        ) : (
          <div className="absolute inset-0 w-full h-full bg-slate-800">
            <img 
              src={video.thumbnail || (isYouTube(video.url) ? getYoutubeThumbnail(video.url) : '')} 
              alt={`${video.customerName} testimonial`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Dark overlay on hover */}
            <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${isHovered ? 'opacity-40' : 'opacity-20'}`}></div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-blue-600 shadow-lg transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                <FiPlay className="text-2xl ml-1" />
              </div>
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-2 py-1 rounded-md">
              {video.duration}
            </div>
          </div>
        )}
      </div>

      {/* Card Info Details */}
      <div className="p-5">
        <h4 className="font-bold text-slate-800 text-lg mb-1">{video.customerName}</h4>
        <div className="flex flex-wrap items-center text-sm gap-2 text-slate-600">
          <span className="font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{video.service}</span>
          {video.location && (
            <>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>{video.location}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
