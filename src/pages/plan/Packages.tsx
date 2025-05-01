
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Package } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const Packages = () => {
  const eventTypes = [
    {
      type: "Weddings",
      packages: [
        {
          name: "Royal Celebration",
          price: "₹8,500 per guest",
          minGuests: 200,
          features: [
            "Exclusive use of Grand Ballroom or Beach Lawn",
            "5-course plated dinner with premium beverage package",
            "Floral centerpieces and custom stage backdrop",
            "Luxury suite for the couple",
            "Complimentary menu tasting for 6 people",
            "Wedding cake and champagne toast",
            "Valet parking for all guests"
          ]
        },
        {
          name: "Elegant Affair",
          price: "₹6,000 per guest",
          minGuests: 150,
          features: [
            "Use of Celebration Hall or Garden Terrace",
            "4-course plated dinner or luxury buffet",
            "Basic floral arrangements and decor",
            "Deluxe room for the couple",
            "Menu tasting for 4 people",
            "Sparkling wine toast",
            "Reserved parking"
          ]
        },
        {
          name: "Intimate Gathering",
          price: "₹4,500 per guest",
          minGuests: 50,
          features: [
            "Use of Bay View Room or Private Dining Room",
            "3-course meal or premium buffet",
            "Basic venue decoration",
            "Complimentary menu tasting for 2",
            "Cake cutting ceremony",
            "Standard parking"
          ]
        }
      ]
    },
    {
      type: "Corporate",
      packages: [
        {
          name: "Executive Summit",
          price: "₹4,500 per delegate",
          minGuests: 100,
          features: [
            "Main conference hall with breakout rooms",
            "Advanced AV setup with technical support",
            "Morning and afternoon refreshment breaks",
            "Executive lunch buffet",
            "Stationery and conference materials",
            "High-speed WiFi and dedicated IT support",
            "Complimentary parking"
          ]
        },
        {
          name: "Business Pro",
          price: "₹3,000 per delegate",
          minGuests: 50,
          features: [
            "Conference room setup",
            "Standard AV equipment",
            "One refreshment break",
            "Business lunch buffet",
            "Basic conference materials",
            "WiFi access",
            "Standard parking"
          ]
        },
        {
          name: "Half-Day Meeting",
          price: "₹1,800 per delegate",
          minGuests: 20,
          features: [
            "Meeting room for 4 hours",
            "Basic AV setup",
            "One coffee break",
            "Working lunch",
            "Notepads and pens",
            "WiFi access"
          ]
        }
      ]
    },
    {
      type: "Social Events",
      packages: [
        {
          name: "Grand Celebration",
          price: "₹5,500 per guest",
          minGuests: 150,
          features: [
            "Premium venue space",
            "Welcome drinks and canapes",
            "Deluxe buffet or 3-course plated meal",
            "4-hour standard beverage package",
            "Basic entertainment setup",
            "Event coordination",
            "Valet parking"
          ]
        },
        {
          name: "Festive Gathering",
          price: "₹3,500 per guest",
          minGuests: 100,
          features: [
            "Standard venue space",
            "Welcome drinks",
            "Standard buffet",
            "3-hour beverage package",
            "Basic decoration",
            "Reserved parking"
          ]
        },
        {
          name: "Cocktail Reception",
          price: "₹2,500 per guest",
          minGuests: 50,
          features: [
            "Lounge or terrace area",
            "Passed hors d'oeuvres for 2 hours",
            "3-hour beverage package",
            "Cocktail furniture",
            "Background music",
            "Standard parking"
          ]
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Event Packages</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/plan-your-event" className="hover:text-cream">Plan Your Event</a>
              <span>/</span>
              <span className="text-cream">Packages</span>
            </div>
          </div>
        </div>
        
        {/* Packages Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <Package className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Flexible Pricing for All Event Types</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              We've created a range of packages to suit different event types and budgets. Each package can be tailored to your specific requirements, ensuring you receive exactly what you need for a successful event.
            </p>
            
            {eventTypes.map((eventType, typeIndex) => (
              <div key={typeIndex} className="mb-16">
                <h3 className="text-2xl font-serif text-maroon mb-8">{eventType.type}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {eventType.packages.map((pkg, pkgIndex) => (
                    <div key={pkgIndex} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="bg-maroon p-6 text-cream">
                        <h4 className="text-xl font-semibold">{pkg.name}</h4>
                        <div className="mt-2 flex items-end">
                          <span className="text-2xl font-bold">{pkg.price}</span>
                        </div>
                        <p className="text-cream/70 text-sm mt-1">Minimum {pkg.minGuests} guests</p>
                      </div>
                      
                      <div className="p-6">
                        <ul className="space-y-3">
                          {pkg.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <span className="text-gold mr-2">•</span>
                              <span className="text-maroon/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-6 pt-4 border-t border-apricot">
                          <Button variant="secondary" className="w-full" href="/plan-your-event/enquiry">
                            Request Quote
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Custom Package */}
            <div className="bg-apricot/50 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-serif text-maroon mb-4">Need a Custom Package?</h3>
              <p className="text-maroon/80 mb-6">
                Our team specializes in creating bespoke event solutions. Contact us to discuss your specific requirements, and we'll design a package that perfectly matches your vision and budget.
              </p>
              <Button variant="primary" href="/plan-your-event/enquiry">
                Contact Our Event Planning Team
              </Button>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default Packages;
