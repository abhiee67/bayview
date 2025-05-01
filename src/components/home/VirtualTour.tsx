
import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Play } from 'lucide-react';

export const VirtualTour: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-padding bg-maroon text-cream">
      <div className="container-custom">
        <SectionHeading
          title="Experience Bayview"
          subtitle="Take a virtual tour of our world-class facilities"
          center={true}
          className="text-cream"
          subtitleClassName="text-cream/80"
        />
        
        <div className="mt-12 relative rounded-2xl overflow-hidden aspect-video shadow-xl">
          {!isPlaying ? (
            <>
              <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1500&q=80" 
                alt="Virtual Tour Preview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-maroon/40 flex items-center justify-center">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="h-20 w-20 rounded-full bg-cream/90 flex items-center justify-center hover:bg-cream transition-colors"
                >
                  <Play className="h-10 w-10 text-maroon ml-1" />
                </button>
              </div>
            </>
          ) : (
            <iframe
              title="Bayview Convention Centre Virtual Tour"
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Replace with actual video URL
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};
