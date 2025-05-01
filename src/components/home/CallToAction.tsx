
import React from 'react';
import { Button } from '../ui/Button';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=2000&q=80" 
          alt="Bayview Beach" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-maroon/70"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-cream mb-6">
          Ready to Host Your Event?
        </h2>
        <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
          Let us help you create an unforgettable experience. Get in touch with our team today.
        </p>
        <Button href="/contact" size="lg" variant="secondary">
          Get a Quote
        </Button>
      </div>
    </section>
  );
};
