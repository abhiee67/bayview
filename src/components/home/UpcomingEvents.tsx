
import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../ui/Button';
import { Calendar } from 'lucide-react';

export const UpcomingEvents: React.FC = () => {
  const events = [
    {
      title: 'Tech Summit 2025',
      date: 'June 15-17, 2025',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80',
      description: 'Annual technology conference featuring industry leaders and innovators.',
      link: '/events/tech-summit',
    },
    {
      title: 'Wedding Expo',
      date: 'July 5, 2025',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
      description: 'Showcase of wedding vendors, venues, and services all in one place.',
      link: '/events/wedding-expo',
    },
    {
      title: 'Medical Conference',
      date: 'July 22-24, 2025',
      image: 'https://images.unsplash.com/photo-1576089073624-b5a6fb85407d?auto=format&fit=crop&w=600&q=80',
      description: 'International conference on medical advancements and healthcare.',
      link: '/events/medical-conference',
    },
    {
      title: 'Food & Wine Festival',
      date: 'August 8-10, 2025',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80',
      description: 'Celebration of local and international cuisine with wine pairings.',
      link: '/events/food-festival',
    },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          title="Upcoming Events"
          subtitle="Join us for these exciting events at Bayview"
          center={true}
        />
        
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="min-w-[280px] sm:min-w-[340px] flex-shrink-0 snap-center"
              >
                <div className="bg-white rounded-2xl overflow-hidden card-shadow h-full hover-lift">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-4 w-4 text-gold mr-2" />
                      <span className="text-sm text-maroon/70">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-serif font-medium mb-2">{event.title}</h3>
                    <p className="text-maroon/70 mb-4 line-clamp-2">{event.description}</p>
                    <Button href={event.link} variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button href="/events" variant="primary">
            See All Events
          </Button>
        </div>
      </div>
    </section>
  );
};
