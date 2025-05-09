
import React, { useState, useEffect } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Hero } from '../components/home/Hero';
import { USPs } from '../components/home/USPs';
import { AboutPreview } from '../components/home/AboutPreview';
import { UpcomingEvents } from '../components/home/UpcomingEvents';
import { VirtualTour } from '../components/home/VirtualTour';
import { Testimonials } from '../components/home/Testimonials';
import { CallToAction } from '../components/home/CallToAction';
import { SectionHeading } from '../components/common/SectionHeading';
import { Calendar } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Index = () => {
  const [selectedHall, setSelectedHall] = useState<string>('hall1');
  const [activeSection, setActiveSection] = useState(0);
  
  // URLs for the Google Sheets data
  const hallUrls = {
    hall1: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6qHV8Zi2vWlVb_Ahp6TmkGcfPkR6-P4l5fEH-FFSBGyXsgkcsm3TUuWtxGkgQyi2rt0uaBRvueE81/pub?output=csv',
    hall2: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSOpxMCT7rijAd-K7hjx1-0vAOBJCwKziG3TcKYPGakArmVhoAMUi8jsvkvm97twIk86roWhEqsgmVF/pub?output=csv',
    hall3: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQGyW-PNxHCDS4FbuicVtBg8yARr__fq_6JKDKIZCTCNqld4HVdW4Mk1Sonhe_CBAUv5-1bhDihqr44/pub?output=csv'
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = parseInt(id.split('-')[1]);
          setActiveSection(index);
        }
      });
    }, { threshold: 0.6 });

    document.querySelectorAll('.full-page-section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.full-page-section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
      <div id="section-0" className="full-page-section snap-start h-screen">
        <Hero />
      </div>
      
      <div id="section-1" className="full-page-section snap-start h-screen flex items-center">
        <USPs />
      </div>
      
      <div id="section-2" className="full-page-section snap-start h-screen flex items-center">
        <section className="py-16 bg-cream/30 w-full">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Calendar className="h-8 w-8 text-maroon" />
              <SectionHeading 
                title="Venue Availability" 
                subtitle="Check our real-time booking calendar"
                center
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                onClick={() => setSelectedHall('hall1')}
                variant={selectedHall === 'hall1' ? "primary" : "secondary"}
                size="lg"
              >
                Hall 1
              </Button>
              <Button 
                onClick={() => setSelectedHall('hall2')}
                variant={selectedHall === 'hall2' ? "primary" : "secondary"}
                size="lg"
              >
                Hall 2
              </Button>
              <Button 
                onClick={() => setSelectedHall('hall3')}
                variant={selectedHall === 'hall3' ? "primary" : "secondary"}
                size="lg"
              >
                Hall 3
              </Button>
            </div>
            
            <p className="text-center mb-8 max-w-2xl mx-auto">
              <span className="inline-block px-2 py-1 bg-red-100 text-red-700 rounded mr-2">🔴 Red events</span> 
              indicate booked dates, while 
              <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded ml-2">🟢 green</span> 
              shows available dates.
            </p>
            
            <div className="calendar-container h-[500px] overflow-y-auto">
              {selectedHall === 'hall1' && (
                <div id="hall1-calendar">
                  <HallCalendar hallName="Hall 1" spreadsheetUrl={hallUrls.hall1} />
                </div>
              )}
              {selectedHall === 'hall2' && (
                <div id="hall2-calendar">
                  <HallCalendar hallName="Hall 2" spreadsheetUrl={hallUrls.hall2} />
                </div>
              )}
              {selectedHall === 'hall3' && (
                <div id="hall3-calendar">
                  <HallCalendar hallName="Hall 3" spreadsheetUrl={hallUrls.hall3} />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      
      <div id="section-3" className="full-page-section snap-start h-screen flex items-center">
        <AboutPreview />
      </div>
      
      <div id="section-4" className="full-page-section snap-start h-screen flex items-center">
        <UpcomingEvents />
      </div>
      
      <div id="section-5" className="full-page-section snap-start h-screen flex items-center">
        <VirtualTour />
      </div>
      
      <div id="section-6" className="full-page-section snap-start h-screen flex items-center">
        <Testimonials />
      </div>
      
      <div id="section-7" className="full-page-section snap-start h-screen flex items-center">
        <CallToAction />
      </div>

      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeSection === i ? 'bg-gold w-4 h-4' : 'bg-maroon/30'
              }`}
              aria-label={`Go to section ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

// Import at the end to avoid circular dependencies
import { HallCalendar } from '../components/home/HallCalendar';
