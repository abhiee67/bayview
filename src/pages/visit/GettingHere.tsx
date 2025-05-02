import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GettingHere = () => {
  const transportOptions = [
    {
      icon: "✈️",
      title: "By Air",
      description: "Visakhapatnam International Airport is just 20 minutes away from Bayview Convention Centre.",
      details: [
        "Direct flights from major cities like Delhi, Mumbai, Bangalore, and Chennai",
        "International connections via Singapore, Dubai, and Bangkok",
        "Airport taxi services available 24/7",
        "Pre-arranged pickup service available for event delegates"
      ]
    },
    {
      icon: "🚆",
      title: "By Train",
      description: "Visakhapatnam Railway Station is well-connected to all major cities in India.",
      details: [
        "10 km from the convention centre (approximately 25-minute drive)",
        "Regular trains from Howrah, Chennai, Hyderabad, and Bangalore",
        "Auto-rickshaws and taxis available outside the station",
        "App-based cab services operate throughout the city"
      ]
    },
    {
      icon: "🚌",
      title: "By Road",
      description: "Excellent connectivity via NH16 (Chennai-Kolkata Highway).",
      details: [
        "Well-maintained roads connecting major cities",
        "Regular bus services from nearby cities",
        "APSRTC buses available from different parts of Andhra Pradesh",
        "Private bus operators offer luxury coach services"
      ]
    },
    {
      icon: "🚕",
      title: "Local Transport",
      description: "Multiple options for moving around Vizag.",
      details: [
        "App-based ride services (Uber, Ola)",
        "Local city buses with stops near the venue",
        "Auto-rickshaws available throughout the city",
        "Car rental services for longer stays"
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Getting Here</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/visit" className="hover:text-cream">Visit Us</a>
              <span>/</span>
              <span className="text-cream">Getting Here</span>
            </div>
          </div>
        </div>
        
        {/* Getting Here Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Your Journey to Bayview</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              Bayview Convention Centre is strategically located on Beach Road in Vizag, offering convenient access for both local and international visitors. Here's how you can reach us from various departure points.
            </p>
            
            {/* Map Section - Using Google Maps Embed */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-16">
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30459.91554248905!2d83.30801772599811!3d17.73540397297964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395bedc7efb603%3A0x22af19f07b6bb5ed!2sBeach%20Rd%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1714958246371!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bayview Convention Centre Location"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-maroon mb-3">Bayview Convention Centre</h3>
                <p className="text-maroon/80 mb-3">
                  Beach Road, Vizag, Andhra Pradesh, India
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Get Directions
                  </Button>
                  <Button variant="outline" size="sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share Location
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Transport Options */}
            <h3 className="text-2xl font-serif text-maroon mb-8">Transport Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transportOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{option.icon}</div>
                    <h4 className="text-xl font-semibold text-maroon">{option.title}</h4>
                  </div>
                  <p className="text-maroon/80 mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold mr-2">•</span>
                        <span className="text-maroon/70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Travel Times */}
            <div className="bg-apricot/50 rounded-2xl p-6 md:p-8 mt-12">
              <h3 className="text-2xl font-serif text-maroon mb-6">Estimated Travel Times</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-maroon mb-2">From Airport</h4>
                  <p className="text-maroon/70">20-25 minutes (10 km)</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-maroon mb-2">From Railway Station</h4>
                  <p className="text-maroon/70">25-30 minutes (10 km)</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-maroon mb-2">From City Center</h4>
                  <p className="text-maroon/70">15-20 minutes (5 km)</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-maroon mb-2">From Bus Terminal</h4>
                  <p className="text-maroon/70">30-35 minutes (12 km)</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-maroon mb-2">From RK Beach</h4>
                  <p className="text-maroon/70">5-10 minutes (2 km)</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-maroon mb-2">From IT Park</h4>
                  <p className="text-maroon/70">35-40 minutes (15 km)</p>
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

export default GettingHere;
