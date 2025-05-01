
import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Hosting our annual corporate gala at Bayview was a decision we'll never regret. The panoramic sea views, impeccable service, and state-of-the-art facilities exceeded all expectations.",
      author: "Ravi Sharma",
      role: "CEO, Tech Innovations Ltd",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    {
      quote: "Our international conference received rave reviews from attendees, largely due to the exceptional venue and support provided by the Bayview team. The sea-facing convention hall created a perfect backdrop.",
      author: "Priya Mehta",
      role: "Event Director, Global Connect",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
      quote: "We chose Bayview for our destination wedding, and it was magical beyond words. The team's attention to detail and the breathtaking setting created memories that will last a lifetime.",
      author: "Arjun & Meera Kapoor",
      role: "Wedding Couple",
      image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?auto=format&fit=crop&w=100&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="section-padding bg-apricot/30">
      <div className="container-custom">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from those who've experienced our venue and services"
          center={true}
        />
        
        <div className="relative max-w-4xl mx-auto mt-12 min-h-[300px]">
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 md:-left-12 h-10 w-10 rounded-full bg-white card-shadow flex items-center justify-center hover:bg-maroon/5 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-maroon" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 md:-right-12 h-10 w-10 rounded-full bg-white card-shadow flex items-center justify-center hover:bg-maroon/5 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-maroon" />
          </button>
          
          {/* Testimonial content */}
          <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow relative">
            <Quote className="h-14 w-14 text-gold/30 absolute top-6 left-6" />
            
            <div className="text-xl md:text-2xl font-serif text-maroon/90 mb-8 relative z-10 pt-8">
              "{testimonials[currentIndex].quote}"
            </div>
            
            <div className="flex items-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].author} 
                className="h-14 w-14 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-medium text-maroon">{testimonials[currentIndex].author}</div>
                <div className="text-maroon/70 text-sm">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-gold/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
