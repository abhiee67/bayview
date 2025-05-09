
import React, { useState } from 'react';
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
  
  // URLs for the Google Sheets data
  const hallUrls = {
    hall1: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6qHV8Zi2vWlVb_Ahp6TmkGcfPkR6-P4l5fEH-FFSBGyXsgkcsm3TUuWtxGkgQyi2rt0uaBRvueE81/pub?output=csv',
    hall2: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSOpxMCT7rijAd-K7hjx1-0vAOBJCwKziG3TcKYPGakArmVhoAMUi8jsvkvm97twIk86roWhEqsgmVF/pub?output=csv',
    hall3: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQGyW-PNxHCDS4FbuicVtBg8yARr__fq_6JKDKIZCTCNqld4HVdW4Mk1Sonhe_CBAUv5-1bhDihqr44/pub?output=csv'
  };

  return (
    <MainLayout fullPage>
      <section className="snap-section">
        <Hero />
      </section>
      
      <section id="section-1" className="snap-section">
        <div className="h-full flex items-center">
          <USPs />
        </div>
      </section>
      
      <section id="section-2" className="snap-section bg-cream/30">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
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
          
          <div className="calendar-container h-[400px] overflow-y-auto">
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
      
      <section id="section-3" className="snap-section">
        <div className="h-full flex items-center">
          <AboutPreview />
        </div>
      </section>
      
      <section id="section-4" className="snap-section">
        <div className="h-full flex items-center">
          <UpcomingEvents />
        </div>
      </section>
      
      <section id="section-5" className="snap-section">
        <div className="h-full flex items-center">
          <VirtualTour />
        </div>
      </section>
      
      <section id="section-6" className="snap-section">
        <div className="h-full flex items-center">
          <Testimonials />
        </div>
      </section>
      
      <section id="section-7" className="snap-section">
        <div className="h-full flex items-center">
          <CallToAction />
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;

// Import at the end to avoid circular dependencies
import { HallCalendar } from '../components/home/HallCalendar';
