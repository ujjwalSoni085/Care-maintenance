import React, { useState } from 'react';
import VideoCard from './VideoCard';
import Container from '../common/Container';

// Placeholder data - replace URLs with actual YouTube or MP4 links
const SAMPLE_VIDEOS = [
  {
    id: 1,
    customerName: 'Amolok Singh',
    service: 'Amc',
    location: 'Sainik Farm',
    duration: '1:24',
    url: 'https://youtu.be/n-iyB5K0S40?si=7adsDV8MhcZ80pCL' 
  },
  {
    id: 2,
    customerName: 'Rekha Soni ',
    service: 'Plumbing',
    location: 'Saket J Block New Delhi',
    duration: '0:45',
    url: 'https://youtu.be/I87M7jwFqYk?si=GmSmm52EzESnAg4O'
  },
  {
    id: 3,
    customerName: 'Mr. & Mrs. Wadhwa',
    service: 'Electrical',
    location: 'X-1 Green Park New Delhi',
    duration: '2:10',
    url: 'https://youtu.be/7dVgDWRCzg8?si=s_L5_iLINr56AHn3'
  },
  {
    id: 4,
    customerName: 'Mrs.Nandani Prasad',
    service: 'Amc',
    location: 'B-1 Geetanjali Enclave New Delhi ',
    duration: '1:24',
    url: 'https://youtu.be/T5Ye95DllzA?si=9MZ1_IH2Vu7tcU5q' 
  },
  {
    id: 5,
    customerName: 'Mr. Pratap Dutta',
    service: 'Carpenting',
    location: '41 Navjeevan Vihar New Delh',
    duration: '0:45',
    url: 'https://youtu.be/WWoOcTpRi6w?si=kwaz_1U74uUAyZP2'
  },
  {
    id: 6,
    customerName: 'Mr. & Mrs. Ganguly',
    service: 'Electrical',
    location: ' J-1954,C.R.Park New Delhi',
    duration: '2:10',
    url: 'https://youtu.be/DsQDj7WePBc?si=0T2r68qH4PNAzcg2'
  }
];

const VideoTestimonials = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handlePlay = (id) => {
    setActiveVideoId(id);
  };

  return (
    <section className="py-16 bg-slate-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 tracking-tight">
            Customer Video Testimonials
          </h2>
          <p className="text-lg text-slate-600">
            Watch real customers share their experience with our maintenance services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_VIDEOS.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isActive={activeVideoId === video.id}
              onPlay={() => handlePlay(video.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default VideoTestimonials;
