
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Hotel } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const DiningStay = () => {
  const accommodations = [
    {
      name: "Bayview Hotel",
      description: "Our on-site luxury hotel offers convenience and comfort with preferential rates for event attendees.",
      image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8a?ixlib=rb-4.0.3",
      features: [
        "118 elegantly appointed rooms and suites",
        "Sea-facing options available",
        "Room service 24/7",
        "Free high-speed WiFi",
        "Rooftop infinity pool"
      ],
      distance: "On-site",
      website: "#"
    },
    {
      name: "The Peninsula Resort",
      description: "A luxury beachfront property offering panoramic views of the Bay of Bengal.",
      image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3",
      features: [
        "152 rooms and suites",
        "4 restaurants and 2 bars",
        "Full-service spa",
        "Business center",
        "Private beach access"
      ],
      distance: "1.2 km",
      website: "#"
    },
    {
      name: "Coastal Grand Hotel",
      description: "Modern business hotel with excellent conference facilities and centralized location.",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3",
      features: [
        "206 contemporary rooms",
        "24-hour fitness center",
        "Multiple dining options",
        "Express check-in/check-out",
        "Airport shuttle service"
      ],
      distance: "2.5 km",
      website: "#"
    },
    {
      name: "Heritage Boutique Inn",
      description: "Charming boutique hotel combining traditional architecture with modern amenities.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3",
      features: [
        "42 uniquely designed rooms",
        "Courtyard restaurant serving regional cuisine",
        "Cultural performances in the evening",
        "Guided local tours available",
        "Complimentary breakfast"
      ],
      distance: "3.7 km",
      website: "#"
    }
  ];

  const diningOptions = [
    {
      name: "Samudra - The Seafood Restaurant",
      location: "On-site",
      cuisine: "Coastal Andhra, Fresh Seafood",
      description: "Our signature restaurant offers the freshest catch from the Bay of Bengal prepared in traditional coastal styles. Enjoy panoramic sea views while dining.",
      image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3",
      hours: "12:00 PM - 11:00 PM"
    },
    {
      name: "The Terrace Grill",
      location: "On-site",
      cuisine: "Continental, Grills, BBQ",
      description: "Outdoor dining experience on our rooftop terrace featuring grilled specialties, cocktails, and live music on weekends.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3",
      hours: "7:00 PM - 12:00 AM"
    },
    {
      name: "Spice Route",
      location: "On-site",
      cuisine: "Pan-Indian, Mughlai",
      description: "Journey through India's diverse culinary traditions with authentic recipes from Kashmir to Kerala.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3",
      hours: "12:30 PM - 3:30 PM, 7:00 PM - 11:00 PM"
    },
    {
      name: "Bay Café",
      location: "On-site",
      cuisine: "International, Quick Bites",
      description: "Casual café offering pastries, sandwiches, salads, and premium coffee throughout the day.",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3",
      hours: "7:00 AM - 10:00 PM"
    },
    {
      name: "Pearl View Restaurant",
      location: "1.5 km from the Centre",
      cuisine: "Multi-cuisine, Local Specialties",
      description: "Popular local restaurant known for authentic Andhra thali and seaside dining experience.",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "The Waterfront",
      location: "2 km from the Centre",
      cuisine: "Global Fusion, Cocktail Bar",
      description: "Upscale dining destination with innovative cuisine and an extensive wine and cocktail list.",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3",
      hours: "7:00 PM - 1:00 AM"
    }
  ];

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Dining & Stay</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/visit" className="hover:text-cream">Visit Us</a>
              <span>/</span>
              <span className="text-cream">Dining & Stay</span>
            </div>
          </div>
        </div>
        
        {/* Accommodations Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <Hotel className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Comfort Beyond the Event</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              Whether you're attending an event or organizing one, we ensure your stay in Vizag is comfortable and convenient. From our on-site luxury hotel to partner accommodations nearby, you'll find options to suit every preference and budget.
            </p>
            
            {/* Accommodations */}
            <h3 className="text-2xl font-serif text-maroon mb-8">Recommended Accommodations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {accommodations.map((hotel, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-maroon">{hotel.name}</h4>
                      <span className="bg-apricot/50 text-maroon text-sm px-3 py-1 rounded-full">
                        {hotel.distance}
                      </span>
                    </div>
                    <p className="text-maroon/80 mb-4">{hotel.description}</p>
                    <div className="mb-5">
                      <h5 className="font-medium text-maroon mb-2">Amenities</h5>
                      <ul className="grid grid-cols-1 gap-2">
                        {hotel.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-gold mr-2">•</span>
                            <span className="text-maroon/70 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="secondary" size="sm" href={hotel.website}>
                      Visit Website
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dining Options */}
            <h3 className="text-2xl font-serif text-maroon mb-8">Dining Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diningOptions.map((restaurant, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-maroon mb-1">{restaurant.name}</h4>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gold text-sm">{restaurant.cuisine}</span>
                      <span className="w-1 h-1 rounded-full bg-maroon/30"></span>
                      <span className="text-maroon/60 text-sm">{restaurant.location}</span>
                    </div>
                    <p className="text-maroon/70 text-sm mb-3">{restaurant.description}</p>
                    <div className="text-maroon/60 text-sm">
                      <strong>Hours:</strong> {restaurant.hours}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Special Dining Arrangements */}
            <div className="bg-apricot/50 rounded-2xl p-6 md:p-8 mt-12">
              <h3 className="text-2xl font-serif text-maroon mb-4">Special Dining Arrangements</h3>
              <p className="text-maroon/80 mb-6">
                For event organizers, we offer special group dining arrangements, including themed dinners, private dining rooms, and custom menus. Our culinary team can accommodate dietary restrictions and preferences with advance notice.
              </p>
              <Button variant="primary" href="/plan-your-event/enquiry">
                Request Dining Information
              </Button>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default DiningStay;
