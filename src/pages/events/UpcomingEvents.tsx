
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Calendar } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const UpcomingEvents = () => {
  const events = [
    {
      title: "International Business Conference",
      date: "June 15-17, 2025",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3",
      category: "Conference",
      description: "Join industry leaders and innovators for this three-day conference focused on global business trends and opportunities.",
      venue: "Grand Ballroom",
      ticketUrl: "#"
    },
    {
      title: "Annual Tech Summit",
      date: "July 8-9, 2025",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3",
      category: "Summit",
      description: "Explore the latest in technology innovation with keynote speakers from leading tech companies around the world.",
      venue: "Conference Center",
      ticketUrl: "#"
    },
    {
      title: "Summer Wedding Expo",
      date: "July 18, 2025",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
      category: "Exhibition",
      description: "Discover the latest wedding trends, meet top vendors, and find inspiration for your perfect day.",
      venue: "Beach Lawn & Celebration Hall",
      ticketUrl: "#"
    },
    {
      title: "Coastal Cuisine Festival",
      date: "August 5-7, 2025",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3",
      category: "Food Festival",
      description: "Celebrate the flavors of coastal Andhra with chef demonstrations, tastings, and special dinners.",
      venue: "Garden Terrace",
      ticketUrl: "#"
    },
    {
      title: "Corporate Leadership Forum",
      date: "August 22, 2025",
      image: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3",
      category: "Corporate",
      description: "A premier networking event for C-suite executives featuring workshops and panel discussions.",
      venue: "Bay View Room",
      ticketUrl: "#"
    },
    {
      title: "Classical Music Concert",
      date: "September 3, 2025",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3",
      category: "Concert",
      description: "An evening of classical music performed by the renowned Symphony Orchestra.",
      venue: "Grand Ballroom",
      ticketUrl: "#"
    },
  ];

  const eventCategories = ["All", "Conference", "Summit", "Exhibition", "Food Festival", "Corporate", "Concert"];
  
  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Upcoming Events</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/events" className="hover:text-cream">Events</a>
              <span>/</span>
              <span className="text-cream">Upcoming Events</span>
            </div>
          </div>
        </div>
        
        {/* Events Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">See What's Happening Next</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              Bayview Convention Centre hosts a variety of events throughout the year, from conferences and exhibitions to cultural performances and social gatherings. Browse our upcoming events calendar to see what's happening soon.
            </p>
            
            {/* Filter Categories */}
            <div className="flex flex-wrap gap-3 mb-10">
              {eventCategories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full ${category === 'All' ? 'bg-maroon text-cream' : 'bg-white text-maroon hover:bg-apricot/50 transition-colors'}`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-apricot text-maroon text-sm font-medium mb-3">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-semibold text-maroon mb-2">{event.title}</h3>
                    <div className="flex items-center gap-1 text-gold mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <p className="text-maroon/70 mb-4">{event.description}</p>
                    <div className="flex items-center gap-1 text-maroon/70 text-sm mb-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.venue}</span>
                    </div>
                    <Button variant="secondary" href={event.ticketUrl} className="w-full">
                      Book Tickets
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default UpcomingEvents;
