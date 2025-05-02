
import React, { useState } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Calendar, User, Tag, CreditCard } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const Bookings = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    event: '',
    name: '',
    email: '',
    phone: '',
    ticketType: '',
    quantity: '1',
    specialRequests: ''
  });

  const events = [
    { id: 'business-conference', name: 'International Business Conference (June 15-17, 2025)' },
    { id: 'tech-summit', name: 'Annual Tech Summit (July 8-9, 2025)' },
    { id: 'wedding-expo', name: 'Summer Wedding Expo (July 18, 2025)' },
    { id: 'cuisine-festival', name: 'Coastal Cuisine Festival (August 5-7, 2025)' },
    { id: 'leadership-forum', name: 'Corporate Leadership Forum (August 22, 2025)' },
    { id: 'music-concert', name: 'Classical Music Concert (September 3, 2025)' }
  ];
  
  const ticketTypes = {
    'business-conference': [
      { id: 'full-access', name: 'Full Access Pass - ₹12,000' },
      { id: 'single-day', name: 'Single Day Pass - ₹5,000' },
      { id: 'exhibition-only', name: 'Exhibition Only - ₹2,000' }
    ],
    'tech-summit': [
      { id: 'full-conference', name: 'Full Conference - ₹12,000' },
      { id: 'single-day', name: 'Single Day - ₹5,000' },
      { id: 'student', name: 'Student Pass (40% off) - ₹7,200' }
    ],
    'wedding-expo': [
      { id: 'general', name: 'General Admission - ₹500' },
      { id: 'vip', name: 'VIP Package - ₹1,200' },
      { id: 'couple', name: 'Couple\'s Pass - ₹800' }
    ],
    'cuisine-festival': [
      { id: 'day-pass', name: 'Day Pass - ₹1,500' },
      { id: 'weekend-pass', name: 'Weekend Pass - ₹3,500' },
      { id: 'vip-experience', name: 'VIP Experience - ₹5,000' }
    ],
    'leadership-forum': [
      { id: 'standard', name: 'Standard Entry - ₹8,000' },
      { id: 'premium', name: 'Premium Access - ₹12,000' },
      { id: 'corporate-group', name: 'Corporate Group (5 people) - ₹35,000' }
    ],
    'music-concert': [
      { id: 'general', name: 'General Seating - ₹1,500' },
      { id: 'premium', name: 'Premium Seating - ₹3,000' },
      { id: 'vip', name: 'VIP Package - ₹5,000' }
    ]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission to backend here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      event: '',
      name: '',
      email: '',
      phone: '',
      ticketType: '',
      quantity: '1',
      specialRequests: ''
    });
    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Book Event Tickets</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/events" className="hover:text-cream">Events</a>
              <span>/</span>
              <span className="text-cream">Bookings</span>
            </div>
          </div>
        </div>
        
        {/* Booking Form Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              {formSubmitted && (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm leading-5 text-green-700">
                        Thank you for your booking! We have received your request and will send a confirmation to your email shortly.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="text-maroon h-8 w-8" />
                <h2 className="text-3xl font-serif text-maroon">Reserve Your Spot</h2>
              </div>
              <p className="text-lg text-maroon/80 max-w-3xl mb-8">
                Fill out the form below to book tickets for your chosen event. After submission, you'll receive a confirmation email with payment instructions and additional details.
              </p>
              
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="event" className="block text-sm font-medium text-maroon mb-2">
                        Select Event <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="event"
                        name="event"
                        value={formData.event}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                        required
                      >
                        <option value="">-- Select an Event --</option>
                        {events.map(event => (
                          <option key={event.id} value={event.id}>{event.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    {formData.event && (
                      <div>
                        <label htmlFor="ticketType" className="block text-sm font-medium text-maroon mb-2">
                          Ticket Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="ticketType"
                          name="ticketType"
                          value={formData.ticketType}
                          onChange={handleChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                          required
                        >
                          <option value="">-- Select Ticket Type --</option>
                          {ticketTypes[formData.event]?.map(ticket => (
                            <option key={ticket.id} value={ticket.id}>{ticket.name}</option>
                          ))}
                        </select>
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-maroon mb-2">
                        Number of Tickets <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                        required
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-maroon mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-maroon mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-maroon mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="specialRequests" className="block text-sm font-medium text-maroon mb-2">
                        Special Requests or Accessibility Needs
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={4}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit" variant="primary" className="w-full md:w-auto">
                        Submit Booking Request
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-maroon/10">
                <h3 className="text-xl font-medium text-maroon mb-4">Booking Information</h3>
                <div className="space-y-3 text-sm text-maroon/70">
                  <p>• Bookings are confirmed upon receipt of payment.</p>
                  <p>• Payment instructions will be sent to your email after form submission.</p>
                  <p>• E-tickets will be issued 3-5 days before the event.</p>
                  <p>• Cancellations made 14+ days before the event are eligible for a full refund.</p>
                  <p>• For group bookings of 10+ people, please contact us directly for special rates.</p>
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

export default Bookings;
