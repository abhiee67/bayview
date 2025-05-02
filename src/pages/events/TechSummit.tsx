
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Calendar, MapPin, Clock, User, Tag } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const TechSummit = () => {
  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Tech Summit 2025</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/events" className="hover:text-cream">Events</a>
              <span>/</span>
              <span className="text-cream">Tech Summit 2025</span>
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
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80" 
                    alt="Tech Summit 2025" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                <h2 className="text-3xl font-serif text-maroon mb-6">Event Overview</h2>
                <div className="prose max-w-none text-maroon/80 mb-8">
                  <p>
                    Join us for the highly anticipated Tech Summit 2025, an annual gathering of technology leaders, innovators, and visionaries from across the globe. This three-day conference will feature keynote presentations, panel discussions, workshops, and networking opportunities focused on emerging trends and technologies shaping our digital future.
                  </p>
                  <p>
                    This year's summit will explore themes including artificial intelligence, cybersecurity, sustainable technology, digital transformation, and the future of work. Attendees will have the opportunity to connect with industry pioneers, discover cutting-edge solutions, and gain insights that can drive innovation within their organizations.
                  </p>
                  <h3 className="text-xl font-serif text-maroon mt-8 mb-4">Featured Speakers</h3>
                  <ul>
                    <li><strong>Dr. Aisha Patel</strong> - AI Research Director, Global Tech Solutions</li>
                    <li><strong>Mark Jensen</strong> - Chief Technology Officer, Innovate Inc.</li>
                    <li><strong>Sophia Chen</strong> - Cybersecurity Expert, Digital Defense Systems</li>
                    <li><strong>Raj Kumar</strong> - Director, Indian Institute of Digital Technologies</li>
                    <li><strong>Dr. Lisa Wong</strong> - Author, "The Future of Human-AI Collaboration"</li>
                  </ul>
                  <h3 className="text-xl font-serif text-maroon mt-8 mb-4">Schedule Highlights</h3>
                  <p><strong>Day 1: June 15, 2025</strong></p>
                  <ul>
                    <li>Opening Ceremony & Keynote Address</li>
                    <li>Panel: "Ethical AI Development"</li>
                    <li>Workshop: "Building Secure Digital Infrastructure"</li>
                    <li>Evening Networking Reception</li>
                  </ul>
                  <p><strong>Day 2: June 16, 2025</strong></p>
                  <ul>
                    <li>Keynote: "The Future of Work"</li>
                    <li>Tech Showcase & Demonstrations</li>
                    <li>Workshop: "Sustainable Technology Practices"</li>
                    <li>Industry Roundtables</li>
                  </ul>
                  <p><strong>Day 3: June 17, 2025</strong></p>
                  <ul>
                    <li>Startup Pitch Competition</li>
                    <li>Panel: "Emerging Tech Trends"</li>
                    <li>Closing Keynote & Awards Ceremony</li>
                    <li>Farewell Networking Event</li>
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
                        <p className="text-maroon/70">June 15-17, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Time</p>
                        <p className="text-maroon/70">8:30 AM - 6:00 PM daily</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Venue</p>
                        <p className="text-maroon/70">Grand Ballroom & Conference Center, Bayview Convention Centre</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Tag className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Ticket Prices</p>
                        <p className="text-maroon/70">Full Conference: ₹12,000</p>
                        <p className="text-maroon/70">Single Day: ₹5,000</p>
                        <p className="text-maroon/70">Student Discount: 40% off</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Expected Attendance</p>
                        <p className="text-maroon/70">500+ delegates from technology and business sectors</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-xl font-serif text-maroon mb-4">Contact Information</h3>
                  <p className="text-maroon/70 mb-4">For inquiries about the Tech Summit 2025, please contact:</p>
                  <div className="space-y-2 text-maroon/70">
                    <p><strong>Email:</strong> techsummit@bayviewvizag.com</p>
                    <p><strong>Phone:</strong> +91 891 2754 822</p>
                    <p><strong>Event Coordinator:</strong> Ms. Priya Sharma</p>
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

export default TechSummit;
