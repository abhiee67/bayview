
import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Hero } from '../components/home/Hero';
import { USPs } from '../components/home/USPs';
import { AboutPreview } from '../components/home/AboutPreview';
import { UpcomingEvents } from '../components/home/UpcomingEvents';
import { VirtualTour } from '../components/home/VirtualTour';
import { Testimonials } from '../components/home/Testimonials';
import { CallToAction } from '../components/home/CallToAction';
import { VenueCalendar } from '../components/home/VenueCalendar';
import { SectionHeading } from '../components/common/SectionHeading';
import { Calendar } from 'lucide-react';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <USPs />
      
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Calendar className="h-8 w-8 text-maroon" />
            <SectionHeading 
              title="Venue Availability" 
              subtitle="Check our real-time booking calendar"
              center
            />
          </div>
          <p className="text-center mb-8 max-w-2xl mx-auto">
            <span className="inline-block px-2 py-1 bg-red-100 text-red-700 rounded mr-2">🔴 Red events</span> 
            indicate booked dates, while 
            <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded ml-2">🟢 green</span> 
            shows available dates.
          </p>
          <VenueCalendar />
        </div>
      </section>
      
      <AboutPreview />
      <UpcomingEvents />
      <VirtualTour />
      <Testimonials />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
