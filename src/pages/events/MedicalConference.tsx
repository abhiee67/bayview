
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Calendar, MapPin, Clock, User, Tag } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const MedicalConference = () => {
  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Medical Conference</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/events" className="hover:text-cream">Events</a>
              <span>/</span>
              <span className="text-cream">Medical Conference</span>
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
                    src="https://images.unsplash.com/photo-1576089073624-b5a6fb85407d?auto=format&fit=crop&w=1200&q=80" 
                    alt="Medical Conference" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                <h2 className="text-3xl font-serif text-maroon mb-6">Event Overview</h2>
                <div className="prose max-w-none text-maroon/80 mb-8">
                  <p>
                    Join us for the International Medical Conference 2025, a premier gathering of healthcare professionals, researchers, and industry leaders from around the world. This three-day event will focus on the latest advancements in medical science, innovative treatments, and the future of healthcare delivery.
                  </p>
                  <p>
                    The conference features renowned speakers, interactive workshops, research presentations, and valuable networking opportunities designed to foster collaboration and knowledge exchange among healthcare professionals. Participants will gain insights into cutting-edge medical technologies, emerging treatment protocols, and evolving healthcare policies.
                  </p>
                  <h3 className="text-xl font-serif text-maroon mt-8 mb-4">Conference Themes</h3>
                  <ul>
                    <li>Advances in Precision Medicine</li>
                    <li>Digital Transformation in Healthcare</li>
                    <li>Pandemic Preparedness and Response</li>
                    <li>Rural Healthcare Access and Equity</li>
                    <li>Mental Health Innovation</li>
                    <li>Medical Education in the Digital Age</li>
                  </ul>
                  <h3 className="text-xl font-serif text-maroon mt-8 mb-4">Featured Speakers</h3>
                  <ul>
                    <li><strong>Dr. Rajesh Sharma</strong> - Director, National Institute of Medical Research</li>
                    <li><strong>Dr. Maria Rodriguez</strong> - World Health Organization, Regional Director</li>
                    <li><strong>Prof. David Chen</strong> - Pioneer in Robotic Surgery, Global Medical University</li>
                    <li><strong>Dr. Ananya Patel</strong> - Chief of Digital Health Innovations, Technology Health Systems</li>
                    <li><strong>Dr. Samuel Okafor</strong> - President, International Association of Medical Professionals</li>
                  </ul>
                  <h3 className="text-xl font-serif text-maroon mt-8 mb-4">Program Highlights</h3>
                  <p><strong>Day 1: July 22, 2025</strong></p>
                  <ul>
                    <li>Opening Ceremony & Keynote Address</li>
                    <li>Plenary Session: "Future of Healthcare Delivery"</li>
                    <li>Specialized Tracks & Paper Presentations</li>
                    <li>Welcome Reception & Research Poster Exhibition</li>
                  </ul>
                  <p><strong>Day 2: July 23, 2025</strong></p>
                  <ul>
                    <li>Keynote: "Precision Medicine Revolution"</li>
                    <li>Panel Discussion: "AI in Clinical Decision Making"</li>
                    <li>Hands-on Workshops (Pre-registration required)</li>
                    <li>Gala Dinner & Excellence in Healthcare Awards</li>
                  </ul>
                  <p><strong>Day 3: July 24, 2025</strong></p>
                  <ul>
                    <li>Special Address: "Healthcare Policy Directions"</li>
                    <li>Innovations Showcase</li>
                    <li>Roundtable Discussions</li>
                    <li>Closing Ceremony & Future Conference Announcement</li>
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
                        <p className="text-maroon/70">July 22-24, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Time</p>
                        <p className="text-maroon/70">8:00 AM - 5:30 PM daily</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Venue</p>
                        <p className="text-maroon/70">Conference Center, Bayview Convention Centre</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Tag className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Registration Fees</p>
                        <p className="text-maroon/70">Physicians: ₹15,000</p>
                        <p className="text-maroon/70">Healthcare Professionals: ₹12,000</p>
                        <p className="text-maroon/70">Residents/Fellows: ₹8,000</p>
                        <p className="text-maroon/70">Medical Students: ₹4,000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Expected Attendance</p>
                        <p className="text-maroon/70">800+ medical professionals from 25+ countries</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-xl font-serif text-maroon mb-4">Contact Information</h3>
                  <p className="text-maroon/70 mb-4">For inquiries about the Medical Conference, please contact:</p>
                  <div className="space-y-2 text-maroon/70">
                    <p><strong>Email:</strong> medconference@bayviewvizag.com</p>
                    <p><strong>Phone:</strong> +91 891 2754 830</p>
                    <p><strong>Conference Secretary:</strong> Dr. Neha Gupta</p>
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

export default MedicalConference;
