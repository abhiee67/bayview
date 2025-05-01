
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Film } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const PastEvents = () => {
  const events = [
    {
      title: "Global Finance Summit",
      date: "April 2024",
      image: "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixlib=rb-4.0.3",
      category: "Conference",
      description: "A landmark gathering of financial experts that discussed emerging trends and future challenges in global finance.",
      attendees: "500+ delegates from 25 countries",
      galleryUrl: "#"
    },
    {
      title: "Andhra Pradesh Tourism Awards",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3",
      category: "Awards",
      description: "Annual ceremony recognizing excellence in tourism across Andhra Pradesh with performances by local artists.",
      attendees: "300+ industry professionals",
      galleryUrl: "#"
    },
    {
      title: "Kavya & Aditya's Wedding",
      date: "February 2024",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3",
      category: "Wedding",
      description: "A breathtaking beachfront wedding that combined traditional customs with contemporary elements.",
      attendees: "400 guests",
      quote: "The most magical day of our lives, made perfect by the Bayview team.",
      galleryUrl: "#"
    },
    {
      title: "Vizag Tech Expo",
      date: "January 2024",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3",
      category: "Exhibition",
      description: "Showcasing technological innovations from startups and established companies across South India.",
      attendees: "1500+ visitors",
      galleryUrl: "#"
    },
    {
      title: "New Year's Eve Gala",
      date: "December 2023",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3",
      category: "Celebration",
      description: "An elegant evening of dining, dancing, and celebration to welcome the new year with ocean views as backdrop.",
      attendees: "750+ guests",
      galleryUrl: "#"
    },
    {
      title: "Coastal Culinary Festival",
      date: "November 2023",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3",
      category: "Food Festival",
      description: "A weekend celebration of regional cuisine featuring demos by celebrity chefs and tasting stations.",
      attendees: "2000+ visitors",
      galleryUrl: "#"
    },
  ];

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Past Events</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/events" className="hover:text-cream">Events</a>
              <span>/</span>
              <span className="text-cream">Past Events</span>
            </div>
          </div>
        </div>
        
        {/* Past Events Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <Film className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Celebrated Moments from the Past</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              Explore our archive of successful events that have taken place at Bayview Convention Centre. From grand weddings to international conferences, these events showcase the versatility and excellence of our venue.
            </p>
            
            {/* Events Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-apricot text-maroon text-sm font-medium">
                        {event.category}
                      </span>
                      <span className="text-maroon/60 text-sm">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-maroon mb-2">{event.title}</h3>
                    <p className="text-maroon/70 mb-3">{event.description}</p>
                    <p className="text-sm text-maroon/60 mb-4">
                      <strong>Attendance:</strong> {event.attendees}
                    </p>
                    {event.quote && (
                      <blockquote className="italic text-maroon/70 border-l-4 border-gold pl-3 my-4">
                        "{event.quote}"
                      </blockquote>
                    )}
                    <Button variant="outline" size="sm" href={event.galleryUrl}>
                      View Gallery
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center">
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-white text-maroon flex items-center justify-center hover:bg-apricot/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-maroon text-cream flex items-center justify-center">1</button>
                <button className="w-10 h-10 rounded-full bg-white text-maroon flex items-center justify-center hover:bg-apricot/50 transition-colors">2</button>
                <button className="w-10 h-10 rounded-full bg-white text-maroon flex items-center justify-center hover:bg-apricot/50 transition-colors">3</button>
                <button className="w-10 h-10 rounded-full bg-white text-maroon flex items-center justify-center hover:bg-apricot/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default PastEvents;
