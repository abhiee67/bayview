
import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

export const VenuesLayouts: React.FC = () => {
  const venues = [
    {
      id: 'bay-grand',
      name: 'Bay Grand Ballroom',
      capacity: '800-2000 guests',
      size: '20,000 sq ft',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
      description: 'Our flagship venue with panoramic sea views through floor-to-ceiling windows, perfect for large conferences, galas, and exhibitions.',
      layouts: [
        { name: 'Theatre', capacity: '2000' },
        { name: 'Classroom', capacity: '1400' },
        { name: 'Banquet', capacity: '1200' },
        { name: 'Reception', capacity: '1800' },
        { name: 'U-Shape', capacity: 'N/A' },
      ]
    },
    {
      id: 'ocean-view',
      name: 'Ocean View Hall',
      capacity: '200-500 guests',
      size: '8,000 sq ft',
      image: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&w=1200&q=80',
      description: 'A versatile mid-sized venue with a private terrace overlooking the bay, ideal for corporate events and medium-sized gatherings.',
      layouts: [
        { name: 'Theatre', capacity: '500' },
        { name: 'Classroom', capacity: '350' },
        { name: 'Banquet', capacity: '300' },
        { name: 'Reception', capacity: '450' },
        { name: 'U-Shape', capacity: '100' },
      ]
    },
    {
      id: 'horizon-suite',
      name: 'Horizon Suite',
      capacity: '50-150 guests',
      size: '3,000 sq ft',
      image: 'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?auto=format&fit=crop&w=1200&q=80',
      description: 'An intimate setting with elegant décor, perfect for board meetings, workshops, and exclusive social gatherings.',
      layouts: [
        { name: 'Theatre', capacity: '150' },
        { name: 'Classroom', capacity: '100' },
        { name: 'Banquet', capacity: '80' },
        { name: 'Reception', capacity: '120' },
        { name: 'U-Shape', capacity: '40' },
      ]
    },
    {
      id: 'beach-pavilion',
      name: 'Beach Pavilion',
      capacity: '100-300 guests',
      size: '5,000 sq ft',
      image: 'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=1200&q=80',
      description: 'A semi-open air venue just steps from the beach, ideal for receptions, themed parties, and unique corporate events.',
      layouts: [
        { name: 'Theatre', capacity: '300' },
        { name: 'Classroom', capacity: 'N/A' },
        { name: 'Banquet', capacity: '200' },
        { name: 'Reception', capacity: '300' },
        { name: 'U-Shape', capacity: 'N/A' },
      ]
    }
  ];

  const [selectedVenue, setSelectedVenue] = useState(venues[0].id);

  const currentVenue = venues.find(venue => venue.id === selectedVenue);

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          title="Our Venues & Layouts"
          subtitle="Discover the perfect space for your next event"
          center={true}
        />
        
        <div className="flex flex-wrap gap-2 justify-center mt-8 mb-10">
          {venues.map((venue) => (
            <button
              key={venue.id}
              onClick={() => setSelectedVenue(venue.id)}
              className={cn(
                'px-5 py-2 rounded-full transition-all text-sm md:text-base',
                selectedVenue === venue.id 
                  ? 'bg-maroon text-cream shadow-md' 
                  : 'bg-white text-maroon hover:bg-apricot/50'
              )}
            >
              {venue.name}
            </button>
          ))}
        </div>
        
        {currentVenue && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden card-shadow">
                <img 
                  src={currentVenue.image} 
                  alt={currentVenue.name} 
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-serif text-maroon">{currentVenue.name}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 my-3 text-maroon/80">
                  <div>Capacity: {currentVenue.capacity}</div>
                  <div>Size: {currentVenue.size}</div>
                </div>
                <p className="text-maroon/70">{currentVenue.description}</p>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-2xl p-6 card-shadow">
                <h4 className="text-xl font-serif text-maroon mb-4">Seating Layouts</h4>
                <div className="space-y-3">
                  {currentVenue.layouts.map((layout, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between py-2 border-b border-apricot/30 last:border-0"
                    >
                      <span className="font-medium">{layout.name}</span>
                      <span className="text-maroon/70">{layout.capacity}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button href="/contact" variant="secondary" className="w-full">
                    Book This Venue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
};
