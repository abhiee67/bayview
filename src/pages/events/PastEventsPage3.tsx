
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Film } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const PastEventsPage3 = () => {
  const events = [
    {
      title: "Educational Technology Conference",
      date: "April 2023",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3",
      category: "Education",
      description: "A gathering of educators, administrators, and tech innovators focused on integrating technology in classroom settings.",
      attendees: "700+ education professionals",
      galleryUrl: "#"
    },
    {
      title: "Fashion Week Vizag",
      date: "March 2023",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3",
      category: "Fashion",
      description: "The region's premier fashion event showcasing collections from established designers and emerging talent.",
      attendees: "1500+ fashion enthusiasts",
      quote: "A spectacular display of creativity and design excellence.",
      galleryUrl: "#"
    },
    {
      title: "Science & Technology Fair",
      date: "February 2023",
      image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3",
      category: "Education",
      description: "An interactive exhibition of innovations and inventions by students and research institutions from across the state.",
      attendees: "2500+ visitors",
      galleryUrl: "#"
    },
    {
      title: "New Year's Corporate Event",
      date: "January 2023",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3",
      category: "Corporate",
      description: "A prestigious gathering of business leaders to celebrate achievements and set visions for the upcoming year.",
      attendees: "400+ executives",
      galleryUrl: "#"
    },
    {
      title: "Winter Music Festival",
      date: "December 2022",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3",
      category: "Cultural",
      description: "A celebration of diverse musical traditions featuring performances by renowned artists and local talent.",
      attendees: "1800+ music lovers",
      galleryUrl: "#"
    },
    {
      title: "Pharmaceutical Industry Meet",
      date: "November 2022",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3",
      category: "Conference",
      description: "A strategic conference for pharmaceutical companies to discuss research collaborations and market trends.",
      attendees: "350+ industry professionals",
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
                <Link to="/events/past/page2" className="w-10 h-10 rounded-full bg-white text-maroon flex items-center justify-center hover:bg-apricot/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Link>
                <Link to="/events/past" className="w-10 h-10 rounded-full bg-white text-maroon flex items-center justify-center hover:bg-apricot/50 transition-colors">1</Link>
                <Link to="/events/past/page2" className="w-10 h-10 rounded-full bg-white text-maroon flex items-center justify-center hover:bg-apricot/50 transition-colors">2</Link>
                <Link to="/events/past/page3" className="w-10 h-10 rounded-full bg-maroon text-cream flex items-center justify-center">3</Link>
                <button disabled className="w-10 h-10 rounded-full bg-white text-maroon/30 flex items-center justify-center cursor-not-allowed">
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

export default PastEventsPage3;
