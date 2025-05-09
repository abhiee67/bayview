
import React from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('section-1');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=2000&q=80" 
          alt="Bayview Convention Centre" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-maroon/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in flex flex-col items-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-cream mb-4">
            Host Grand Moments by the Sea
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl">
            Experience luxury and elegance at Vizag's premier 5-star convention venue
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/plan-your-event" size="lg">
              Explore Venues
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Book Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <div className="w-8 h-12 rounded-full border-2 border-cream/50 flex items-start justify-center">
          <div className="w-2 h-3 bg-cream/50 rounded-full mt-2"></div>
        </div>
      </button>
    </section>
  );
};
