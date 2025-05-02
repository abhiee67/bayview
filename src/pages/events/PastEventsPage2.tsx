
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Film } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const PastEventsPage2 = () => {
  const events = [
    {
      title: "International Film Festival",
      date: "October 2023",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3",
      category: "Cultural",
      description: "A celebration of global cinema featuring award-winning films from over 30 countries and appearances by acclaimed directors.",
      attendees: "2000+ film enthusiasts",
      galleryUrl: "#"
    },
    {
      title: "Healthcare Innovation Summit",
      date: "September 2023",
      image: "https://images.unsplash.com/photo-1587924613382-44d987f33459?ixlib=rb-4.0.3",
      category: "Conference",
      description: "A gathering of healthcare professionals and technology experts showcasing the latest in medical technology and patient care solutions.",
      attendees: "650+ industry professionals",
      galleryUrl: "#"
    },
    {
      title: "Entrepreneurship Summit",
      date: "August 2023",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3",
      category: "Business",
      description: "A platform for startups and entrepreneurs to network, pitch ideas, and learn from successful business leaders.",
      attendees: "800+ participants",
      galleryUrl: "#"
    },
    {
      title: "National Dance Championship",
      date: "July 2023",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3",
      category: "Performance",
      description: "A spectacular showcase of classical and contemporary dance forms from across India, featuring both solo and group performances.",
      attendees: "1200+ spectators",
      quote: "The most spectacular dance competition the city has ever hosted.",
      galleryUrl: "#"
    },
    {
      title: "Automotive Expo 2023",
      date: "June 2023",
      image: "https://images.unsplash.com/photo-1560253414-f65d1f5a1b5c?ixlib=rb-4.0.3",
      category: "Exhibition",
      description: "The region's largest display of luxury vehicles, vintage cars, and futuristic automotive technologies.",
      attendees: "5000+ visitors",
      galleryUrl: "#"
    },
    {
      title: "Corporate Annual Gala",
      date: "May 2023",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3",
      category: "Corporate",
      description: "An elegant evening of networking and celebration for one of India's leading technology firms, with a gourmet dinner and live entertainment.",
      attendees: "350 executives and partners",
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
                <Link to="/events/past" className="w-10 h-10 rounded-full bg-white text-maroon flex items-center justify-center hover:bg-apricot/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Link>
                <Link to="/events/past" className="w-10 h-10 rounded-full bg-white text-maroon flex items-center justify-center hover:bg-apricot/50 transition-colors">1</Link>
                <Link to="/events/past/page2" className="w-10 h-10 rounded-full bg-maroon text-cream flex items-center justify-center">2</Link>
                <Link to="/events/past/page3" className="w-10 h-10 rounded-full bg-white text-maroon flex items-center justify-center hover:bg-apricot/50 transition-colors">3</Link>
                <Link to="/events/past/page3" className="w-10 h-10 rounded-full bg-white text-maroon flex items-center justify-center hover:bg-apricot/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default PastEventsPage2;
