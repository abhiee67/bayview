
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Plane } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const ShortTrips = () => {
  const destinations = [
    {
      name: "Araku Valley",
      description: "A picturesque hill station known for its coffee plantations, tribal culture, and breathtaking landscapes.",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3",
      distance: "115 km from Vizag",
      travelTime: "3-4 hours by road, 4 hours by train",
      highlights: [
        "Coffee plantations and museum",
        "Tribal Museum and Araku Tribal Market",
        "Chaparai Waterfalls",
        "Padmapuram Gardens",
        "Borra Caves (largest in India)"
      ],
      ideal: "2-day trip",
      tips: "Take the scenic Kirandul train for spectacular views through the Eastern Ghats."
    },
    {
      name: "Borra Caves",
      description: "One of the largest cave systems in India with stunning stalactite and stalagmite formations.",
      image: "https://images.unsplash.com/photo-1520097718692-c77fd891180a?ixlib=rb-4.0.3",
      distance: "90 km from Vizag",
      travelTime: "2.5-3 hours by road",
      highlights: [
        "Million-year-old limestone cave formations",
        "Natural Shiva lingam inside the caves",
        "Light and sound effects",
        "Ananthagiri coffee plantations nearby",
        "Local tribal markets"
      ],
      ideal: "Day trip",
      tips: "Wear comfortable footwear as the caves involve walking on wet surfaces."
    },
    {
      name: "Lambasingi",
      description: "Known as the 'Kashmir of Andhra Pradesh', this hill village experiences near-zero temperatures in winter months.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3",
      distance: "100 km from Vizag",
      travelTime: "3-3.5 hours by road",
      highlights: [
        "Misty hills and apple orchards",
        "Kothap Konda waterfalls",
        "Thajangi Reservoir",
        "Strawberry farms",
        "Susan Gardens"
      ],
      ideal: "1-2 day trip",
      tips: "Visit between November and January for the coldest temperatures and possible frost experience."
    },
    {
      name: "Yarada Beach",
      description: "A pristine beach surrounded by hills on three sides, offering seclusion and natural beauty.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3",
      distance: "15 km from Vizag",
      travelTime: "30-40 minutes by road",
      highlights: [
        "Golden sands and clear waters",
        "Dolphin's Nose Lighthouse nearby",
        "Panoramic views of the Bay of Bengal",
        "Ross Hill Church",
        "Sunset views"
      ],
      ideal: "Half-day trip",
      tips: "The beach has limited facilities, so carry water and snacks. Best visited early morning or late afternoon."
    },
    {
      name: "Simhachalam Temple",
      description: "Ancient hill temple dedicated to Lord Narasimha, known for its architectural splendor and spiritual significance.",
      image: "https://images.unsplash.com/photo-1518690370867-fac7237e5e9f?ixlib=rb-4.0.3",
      distance: "18 km from Vizag",
      travelTime: "45 minutes by road",
      highlights: [
        "11th century temple architecture",
        "Intricate stone carvings",
        "Annual Chandanotsavam festival",
        "1000-step climb to the temple (vehicle access also available)",
        "Panoramic views of Vizag city"
      ],
      ideal: "Half-day trip",
      tips: "Visit early morning to avoid crowds. Dress conservatively as it's a religious site."
    },
    {
      name: "Bojjanna Konda",
      description: "Ancient Buddhist site with rock-cut caves and stupas dating back to the 3rd century BCE.",
      image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-4.0.3",
      distance: "45 km from Vizag",
      travelTime: "1.5 hours by road",
      highlights: [
        "Buddhist rock-cut caves",
        "Ancient stupas and viharas",
        "Meditation chambers",
        "Historical inscriptions",
        "Archaeological importance"
      ],
      ideal: "Day trip",
      tips: "Combine with a visit to nearby Sankaram Buddhist site for a comprehensive historical experience."
    },
    {
      name: "Kalingapatnam Beach",
      description: "Historic port town with a beautiful beach and lighthouse, once a major trading center.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3",
      distance: "120 km from Vizag",
      travelTime: "3 hours by road",
      highlights: [
        "Long, pristine beach",
        "Historic lighthouse",
        "Dutch and British colonial remnants",
        "Fishing village experience",
        "Mahendratanaya River meeting the sea"
      ],
      ideal: "Day trip or overnight stay",
      tips: "Visit the lighthouse for panoramic views of the coastline, especially during sunset."
    }
  ];

  const travelTips = [
    "Carry sufficient cash as ATMs may be limited in remote areas.",
    "Download offline maps as network connectivity can be intermittent in hill areas.",
    "Respect local tribal customs and traditions when visiting tribal areas.",
    "Wear comfortable walking shoes for treks and cave explorations.",
    "Book accommodation in advance during peak season (October-February).",
    "Consider hiring a local guide for enhanced experiences and cultural insights.",
    "Check weather conditions before planning trips to hill stations.",
    "Most destinations have limited public transport options; consider hiring a car or joining a tour."
  ];

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Short Trips</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/discover" className="hover:text-cream">Discover Vizag</a>
              <span>/</span>
              <span className="text-cream">Short Trips</span>
            </div>
          </div>
        </div>
        
        {/* Short Trips Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <Plane className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Weekend Escapes from Vizag</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              Extend your stay in Visakhapatnam and explore the beautiful surroundings with these short excursions. From hill stations and beaches to historical sites and natural wonders, the region offers diverse experiences just a short drive from the city.
            </p>
            
            {/* Destinations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {destinations.map((destination, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                  <div className="h-72 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-maroon mb-1">{destination.name}</h3>
                    <div className="flex gap-2 text-sm text-maroon/60 mb-3">
                      <span>{destination.distance}</span>
                      <span>•</span>
                      <span>{destination.travelTime}</span>
                    </div>
                    <p className="text-maroon/80 mb-4">{destination.description}</p>
                    
                    <div className="mb-4 flex-grow">
                      <h4 className="font-medium text-maroon mb-2">Highlights:</h4>
                      <ul className="space-y-1">
                        {destination.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-gold mr-2">•</span>
                            <span className="text-maroon/70 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-apricot pt-4 space-y-2">
                      <div className="flex gap-2">
                        <span className="font-medium text-maroon text-sm">Ideal Duration:</span>
                        <span className="text-maroon/70 text-sm">{destination.ideal}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-medium text-maroon text-sm">Traveler's Tip:</span>
                        <span className="text-maroon/70 text-sm">{destination.tips}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tour Operators */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-12">
              <h3 className="text-2xl font-serif text-maroon mb-6">Local Tour Operators</h3>
              <p className="text-maroon/80 mb-6">
                For a hassle-free experience, consider booking through these reputable local tour operators who offer guided excursions to all these destinations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-apricot/50 rounded-xl p-4">
                  <h4 className="font-semibold text-maroon mb-2">Vizag Travels</h4>
                  <p className="text-maroon/70 text-sm mb-2">Specializes in Araku Valley and tribal area tours with knowledgeable local guides.</p>
                  <p className="text-sm text-gold">Contact: +91 891 234 5678</p>
                </div>
                <div className="border border-apricot/50 rounded-xl p-4">
                  <h4 className="font-semibold text-maroon mb-2">Eastern Ghats Adventures</h4>
                  <p className="text-maroon/70 text-sm mb-2">Focused on trekking and nature experiences in Lambasingi and surrounding forests.</p>
                  <p className="text-sm text-gold">Contact: +91 891 876 5432</p>
                </div>
                <div className="border border-apricot/50 rounded-xl p-4">
                  <h4 className="font-semibold text-maroon mb-2">Coastal Expeditions</h4>
                  <p className="text-maroon/70 text-sm mb-2">Beach and coastal destination specialists with private and group tour options.</p>
                  <p className="text-sm text-gold">Contact: +91 891 345 6789</p>
                </div>
              </div>
            </div>
            
            {/* Travel Tips */}
            <div className="bg-apricot/50 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-serif text-maroon mb-6">Travel Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {travelTips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-maroon mr-2">{index + 1}.</span>
                    <span className="text-maroon/80">{tip}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button variant="primary" href="/contact">
                  Ask Our Concierge for Recommendations
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default ShortTrips;
