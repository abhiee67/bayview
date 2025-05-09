
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { ParkingMeter } from 'lucide-react';

const ParkingAccessibility = () => {
  const accessibilityFeatures = [
    {
      icon: "♿",
      title: "Wheelchair Access",
      details: [
        "Ramps at all entrances",
        "Wide doorways throughout the venue",
        "Dedicated elevators to all floors",
        "Smooth transitions between spaces"
      ]
    },
    {
      icon: "🚻",
      title: "Accessible Restrooms",
      details: [
        "Available on every floor",
        "Equipped with grab bars",
        "Emergency call buttons",
        "Baby changing facilities"
      ]
    },
    {
      icon: "👂",
      title: "Hearing Assistance",
      details: [
        "Induction loop systems in all halls",
        "Sign language interpreters (by request)",
        "Visual alarm systems",
        "Acoustic quality meeting international standards"
      ]
    },
    {
      icon: "👀",
      title: "Visual Assistance",
      details: [
        "Braille signage throughout the venue",
        "High-contrast directional indicators",
        "Service animals welcome",
        "Staff trained to assist visually impaired guests"
      ]
    },
    {
      icon: "🍽️",
      title: "Dining Accessibility",
      details: [
        "Varied height dining tables",
        "Large print menus",
        "Dietary requirements accommodated",
        "Staff trained in allergen awareness"
      ]
    },
    {
      icon: "🛌",
      title: "Special Accommodations",
      details: [
        "Quiet rooms for sensory breaks",
        "Priority seating arrangements",
        "Companion seating available",
        "Medical refrigeration available"
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="snap-section-regular">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Parking & Accessibility</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/visit" className="hover:text-cream">Visit Us</a>
              <span>/</span>
              <span className="text-cream">Parking & Accessibility</span>
            </div>
          </div>
        </div>
        
        {/* Parking & Accessibility Section */}
        <section className="py-16 bg-cream scroll-snap-align: start">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <ParkingMeter className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Designed for Convenience</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              At Bayview Convention Centre, we've designed our facilities to ensure that all visitors can access and enjoy our venue comfortably. From ample parking to comprehensive accessibility features, we've thought of everything to make your visit seamless.
            </p>
            
            {/* Parking Information */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-16">
              <h3 className="text-2xl font-serif text-maroon mb-6">Parking Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-maroon mb-3">Main Parking Facilities</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <div>
                        <span className="text-maroon/80">Underground parking with 500 spaces</span>
                        <p className="text-sm text-maroon/60">Direct elevator access to all venues</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <div>
                        <span className="text-maroon/80">Open-air parking with 300 spaces</span>
                        <p className="text-sm text-maroon/60">Located adjacent to the main building</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <div>
                        <span className="text-maroon/80">VIP parking with 50 reserved spaces</span>
                        <p className="text-sm text-maroon/60">Near the main entrance for convenient access</p>
                      </div>
                    </li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-maroon mb-3">Parking Fees</h4>
                  <div className="bg-apricot/30 rounded-xl p-4 mb-6">
                    <p className="text-maroon/80 mb-2">Complimentary parking for event attendees (with validation)</p>
                    <p className="text-maroon/80 mb-2">Valet parking available for ₹200 per day</p>
                    <p className="text-maroon/80">Standard parking fee for non-event visitors: ₹50 per hour</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-maroon mb-3">Special Parking</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <div>
                        <span className="text-maroon/80">60 accessible parking spaces</span>
                        <p className="text-sm text-maroon/60">Located near elevators and entrances</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <div>
                        <span className="text-maroon/80">Electric vehicle charging stations</span>
                        <p className="text-sm text-maroon/60">10 stations available, complimentary for guests</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <div>
                        <span className="text-maroon/80">Oversized vehicle parking</span>
                        <p className="text-sm text-maroon/60">Available with advance arrangement</p>
                      </div>
                    </li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-maroon mb-3">Additional Services</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-maroon/80">Golf cart shuttles from parking to entrance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-maroon/80">24/7 security monitoring of all parking areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-maroon/80">Assistance for loading/unloading available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Accessibility Features */}
            <h3 className="text-2xl font-serif text-maroon mb-8">Accessibility Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {accessibilityFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <h4 className="text-lg font-semibold text-maroon">{feature.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold mr-2">•</span>
                        <span className="text-maroon/70 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Accessibility Commitment */}
            <div className="bg-apricot/50 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-serif text-maroon mb-4">Our Accessibility Commitment</h3>
              <p className="text-maroon/80 mb-4">
                Bayview Convention Centre is committed to providing equal access and opportunities for all visitors. Our facilities comply with and exceed national accessibility standards. If you have specific requirements not addressed here, please contact our accessibility coordinator in advance of your visit.
              </p>
              <p className="text-maroon/80 mb-4">
                For special arrangements or inquiries:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-maroon mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-maroon">accessibility@bayviewconvention.com</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-maroon mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-maroon">+91 891 123 4567 (ext. 108)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <div className="snap-section-regular">
          <CallToAction />
        </div>
      </div>
    </MainLayout>
  );
};

export default ParkingAccessibility;
