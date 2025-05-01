
import React, { useState } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Mail } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    venue: '',
    requirements: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          guestCount: '',
          venue: '',
          requirements: ''
        });
      }, 5000);
    }, 1500);
  };
  
  const eventTypes = [
    "Wedding",
    "Corporate Conference",
    "Product Launch",
    "Gala Dinner",
    "Award Ceremony",
    "Exhibition",
    "Social Gathering",
    "Birthday Celebration",
    "Anniversary",
    "Other"
  ];
  
  const venues = [
    "Grand Ballroom",
    "Beach Lawn",
    "Celebration Hall",
    "Garden Terrace",
    "Bay View Room",
    "Conference Center",
    "Private Dining Room",
    "Not sure (need recommendation)"
  ];

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Make an Enquiry</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/plan-your-event" className="hover:text-cream">Plan Your Event</a>
              <span>/</span>
              <span className="text-cream">Enquiry</span>
            </div>
          </div>
        </div>
        
        {/* Enquiry Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Start Planning Today</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              Let us help you create an unforgettable event at Bayview Convention Centre. Fill out the form below, and our dedicated event planning team will contact you within 24 hours to discuss your requirements.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                  {submitSuccess ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-serif text-maroon mb-2">Thank You!</h3>
                      <p className="text-maroon/70 mb-4">
                        Your enquiry has been submitted successfully. Our team will contact you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-maroon font-medium mb-2" htmlFor="name">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-xl border border-apricot focus:outline-none focus:ring-2 focus:ring-gold bg-cream/50"
                          />
                        </div>
                        <div>
                          <label className="block text-maroon font-medium mb-2" htmlFor="email">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-xl border border-apricot focus:outline-none focus:ring-2 focus:ring-gold bg-cream/50"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-maroon font-medium mb-2" htmlFor="phone">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-xl border border-apricot focus:outline-none focus:ring-2 focus:ring-gold bg-cream/50"
                          />
                        </div>
                        <div>
                          <label className="block text-maroon font-medium mb-2" htmlFor="eventType">
                            Event Type *
                          </label>
                          <select
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-xl border border-apricot focus:outline-none focus:ring-2 focus:ring-gold bg-cream/50"
                          >
                            <option value="">Select Event Type</option>
                            {eventTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-maroon font-medium mb-2" htmlFor="eventDate">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            id="eventDate"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-xl border border-apricot focus:outline-none focus:ring-2 focus:ring-gold bg-cream/50"
                          />
                        </div>
                        <div>
                          <label className="block text-maroon font-medium mb-2" htmlFor="guestCount">
                            Expected Guest Count
                          </label>
                          <input
                            type="number"
                            id="guestCount"
                            name="guestCount"
                            value={formData.guestCount}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-xl border border-apricot focus:outline-none focus:ring-2 focus:ring-gold bg-cream/50"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-maroon font-medium mb-2" htmlFor="venue">
                          Preferred Venue
                        </label>
                        <select
                          id="venue"
                          name="venue"
                          value={formData.venue}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-xl border border-apricot focus:outline-none focus:ring-2 focus:ring-gold bg-cream/50"
                        >
                          <option value="">Select Venue</option>
                          {venues.map((venue) => (
                            <option key={venue} value={venue}>{venue}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-maroon font-medium mb-2" htmlFor="requirements">
                          Special Requirements or Questions
                        </label>
                        <textarea
                          id="requirements"
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-2 rounded-xl border border-apricot focus:outline-none focus:ring-2 focus:ring-gold bg-cream/50"
                        ></textarea>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
              
              {/* Contact Info */}
              <div>
                <div className="bg-maroon text-cream rounded-2xl shadow-md p-6 md:p-8 mb-8">
                  <h3 className="text-xl font-serif mb-4">Contact Us Directly</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-cream/70 text-sm">Phone</p>
                        <p className="font-medium">+91 891 123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-cream/70 text-sm">Email</p>
                        <p className="font-medium">events@bayviewconvention.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-cream/70 text-sm">Address</p>
                        <p className="font-medium">Beach Road, Vizag</p>
                        <p className="font-medium">Andhra Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                  <h3 className="text-xl font-serif text-maroon mb-4">Why Choose Bayview?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-maroon/80">Stunning beachfront location with panoramic views</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-maroon/80">Versatile spaces for events of 20 to 2000 guests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-maroon/80">Cutting-edge audiovisual technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-maroon/80">Award-winning catering services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-maroon/80">Dedicated event planners for personalized service</span>
                    </li>
                  </ul>
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

export default Enquiry;
