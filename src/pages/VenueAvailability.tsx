
import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { SectionHeading } from '../components/common/SectionHeading';
import { VenueCalendar } from '../components/home/VenueCalendar';
import { Calendar } from 'lucide-react';

const VenueAvailability = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calendar className="h-8 w-8 text-maroon" />
          <SectionHeading 
            title="Venue Availability Calendar" 
            subtitle="Check real-time availability of our function halls and venue spaces"
            center
          />
        </div>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Our interactive calendar displays the current booking status of our venues.
          <span className="block mt-2">
            <span className="inline-block px-2 py-1 bg-red-100 text-red-700 rounded mr-2">🔴 Red events</span> 
            indicate booked dates, while 
            <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded ml-2">🟢 green</span> 
            shows available dates.
          </span>
          <span className="block mt-2 text-sm text-gray-600">
            The calendar is updated in real-time with our booking system.
          </span>
        </p>
        <VenueCalendar />
      </div>
    </MainLayout>
  );
};

export default VenueAvailability;
