
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Calendar, MapPin, Clock, User, Tag } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const WeddingExpo = () => {
  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Wedding Expo</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/events" className="hover:text-cream">Events</a>
              <span>/</span>
              <span className="text-cream">Wedding Expo</span>
            </div>
          </div>
        </div>
        
        {/* Event Details */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80" 
                    alt="Wedding Expo" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                <h2 className="text-3xl font-serif text-maroon mb-6">Event Overview</h2>
                <div className="prose max-w-none text-maroon/80 mb-8">
                  <p>
                    Discover the perfect elements for your dream wedding at our Wedding Expo 2025. This comprehensive showcase brings together premier wedding vendors, venues, and services all under one roof, making it the ideal one-stop destination for couples planning their special day.
                  </p>
                  <p>
                    Whether you're just starting your wedding planning journey or finalizing the details, our Wedding Expo provides inspiration, expert advice, and exclusive offers from the region's most renowned wedding professionals. From exquisite bridal wear to innovative catering options, creative photography to stunning decor ideas, you'll find everything you need to create your perfect celebration.
                  </p>
                  <h3 className="text-xl font-serif text-maroon mt-8 mb-4">Featured Exhibitors</h3>
                  <ul>
                    <li><strong>Royal Bridal Couture</strong> - Luxury bridal and groom attire</li>
                    <li><strong>Dream Moments Photography</strong> - Award-winning wedding photography and videography</li>
                    <li><strong>Divine Decor</strong> - Innovative wedding decor and floral arrangements</li>
                    <li><strong>Sweet Celebrations</strong> - Custom wedding cakes and desserts</li>
                    <li><strong>Melodic Memories</strong> - Live music and entertainment services</li>
                    <li><strong>Bayview Catering</strong> - Exquisite wedding menu options</li>
                  </ul>
                  <h3 className="text-xl font-serif text-maroon mt-8 mb-4">Special Events</h3>
                  <ul>
                    <li><strong>10:30 AM</strong> - Bridal Fashion Show featuring the latest collections</li>
                    <li><strong>12:00 PM</strong> - Wedding Planning Masterclass with Celebrity Planner Anika Reddy</li>
                    <li><strong>2:00 PM</strong> - Cake Tasting Session (Pre-registration required)</li>
                    <li><strong>3:30 PM</strong> - Live Band and DJ Showcase</li>
                    <li><strong>5:00 PM</strong> - Grand Prize Drawing for a Honeymoon Package</li>
                  </ul>
                  <h3 className="text-xl font-serif text-maroon mt-8 mb-4">Benefits for Attendees</h3>
                  <ul>
                    <li>Exclusive same-day booking discounts from vendors</li>
                    <li>Complimentary wedding planning guide for all attendees</li>
                    <li>Free consultations with certified wedding planners</li>
                    <li>Opportunity to win exciting door prizes throughout the day</li>
                    <li>Taste testing from premium caterers and bakers</li>
                  </ul>
                </div>
                
                <Button href="/events/bookings" variant="primary" className="mt-4">
                  Book Tickets
                </Button>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
                  <h3 className="text-xl font-serif text-maroon mb-4">Event Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Date</p>
                        <p className="text-maroon/70">July 5, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Time</p>
                        <p className="text-maroon/70">10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Venue</p>
                        <p className="text-maroon/70">Beach Lawn & Celebration Hall, Bayview Convention Centre</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Tag className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Ticket Prices</p>
                        <p className="text-maroon/70">General Admission: ₹500</p>
                        <p className="text-maroon/70">VIP Package (includes goodie bag & priority access): ₹1,200</p>
                        <p className="text-maroon/70">Couple's Pass: ₹800</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Expected Attendance</p>
                        <p className="text-maroon/70">1,000+ attendees and 50+ premier vendors</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-xl font-serif text-maroon mb-4">Contact Information</h3>
                  <p className="text-maroon/70 mb-4">For inquiries about the Wedding Expo, please contact:</p>
                  <div className="space-y-2 text-maroon/70">
                    <p><strong>Email:</strong> weddingexpo@bayviewvizag.com</p>
                    <p><strong>Phone:</strong> +91 891 2754 825</p>
                    <p><strong>Event Coordinator:</strong> Mr. Arjun Kapoor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default WeddingExpo;
