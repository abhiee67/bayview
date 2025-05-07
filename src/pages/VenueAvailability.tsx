
import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { SectionHeading } from '../components/common/SectionHeading';
import { VenueCalendar } from '../components/home/VenueCalendar';

const VenueAvailability = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <SectionHeading 
          title="Venue Availability Calendar" 
          subtitle="Check real-time availability of our function halls and venue spaces"
          center
        />
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Our interactive calendar displays the current booking status of our venues.
          Red events indicate booked dates, while green shows available dates.
          The calendar is updated in real-time with our booking system.
        </p>
        <VenueCalendar />
      </div>
    </MainLayout>
  );
};

export default VenueAvailability;
