
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { SectionHeading } from '../../components/common/SectionHeading';
import { HallCalendar } from '../../components/home/HallCalendar';
import { Calendar } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const Hall3 = () => {
  const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQGyW-PNxHCDS4FbuicVtBg8yARr__fq_6JKDKIZCTCNqld4HVdW4Mk1Sonhe_CBAUv5-1bhDihqr44/pub?output=csv';
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calendar className="h-8 w-8 text-maroon" />
          <SectionHeading 
            title="Hall 3 Availability" 
            subtitle="Check real-time availability of our Hall 3 venue space"
            center
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            variant="primary" 
            size="lg"
            href="/venue-availability"
          >
            Back to All Venues
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            href="/venue-availability/hall-1"
          >
            Hall 1
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            href="/venue-availability/hall-2"
          >
            Hall 2
          </Button>
        </div>
        
        <p className="text-center mb-8 max-w-2xl mx-auto">
          <span className="block font-medium text-lg mb-2">Hall 3 Specifications:</span>
          <span className="block">Capacity: Up to 100 people</span>
          <span className="block">Perfect for: Intimate gatherings, workshops, and small meetings</span>
          <span className="block mt-4">
            <span className="inline-block px-2 py-1 bg-red-100 text-red-700 rounded mr-2">🔴 Red events</span> 
            indicate booked dates, while 
            <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded ml-2">🟢 green</span> 
            shows available dates.
          </span>
        </p>
        
        <HallCalendar 
          hallName="Hall 3" 
          spreadsheetUrl={spreadsheetUrl} 
        />
      </div>
    </MainLayout>
  );
};

export default Hall3;
