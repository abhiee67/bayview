
import React, { useState } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Compass } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const LocalAttractions = () => {
  const categories = ["All", "Beaches", "Hills", "Museums", "Religious", "Parks"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const attractions = [
    {
      name: "RK Beach",
      description: "The most popular beach in Vizag, featuring a long sandy shoreline, water sports, and the famous submarine museum.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3",
      category: "Beaches",
      distance: "2 km",
      timings: "Always open",
      entryFee: "Free",
      bestTime: "Early morning or sunset"
    },
    {
      name: "Kailasagiri Hill Park",
      description: "Hilltop park offering panoramic views of the city and coastline, featuring a giant Shiva-Parvati statue and cable car rides.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3",
      category: "Hills",
      distance: "12 km",
      timings: "9:00 AM - 8:00 PM",
      entryFee: "₹40 per person",
      bestTime: "Evening for sunset views"
    },
    {
      name: "Submarine Museum",
      description: "India's first submarine museum, the INS Kurusura, offering a glimpse into naval operations and submarine life.",
      image: "https://images.unsplash.com/photo-1569949629729-302244c7bb5b?ixlib=rb-4.0.3",
      category: "Museums",
      distance: "3 km",
      timings: "10:00 AM - 6:00 PM (Closed Mondays)",
      entryFee: "₹70 per person",
      bestTime: "Weekday mornings"
    },
    {
      name: "Simhachalam Temple",
      description: "Ancient hill temple dedicated to Lord Narasimha, featuring stunning architecture and spiritual significance.",
      image: "https://images.unsplash.com/photo-1518690370867-fac7237e5e9f?ixlib=rb-4.0.3",
      category: "Religious",
      distance: "18 km",
      timings: "6:00 AM - 9:00 PM",
      entryFee: "Free (Special darshan: ₹100)",
      bestTime: "Early morning for prayers"
    },
    {
      name: "Yarada Beach",
      description: "Secluded beach surrounded by hills, offering pristine waters and natural beauty away from the city crowds.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3",
      category: "Beaches",
      distance: "15 km",
      timings: "Always open",
      entryFee: "Free",
      bestTime: "Weekday afternoons"
    },
    {
      name: "Visakha Museum",
      description: "Historical museum housed in a colonial building, displaying artifacts from the region's rich cultural past.",
      image: "https://images.unsplash.com/photo-1584652300879-e9780351ec8d?ixlib=rb-4.0.3",
      category: "Museums",
      distance: "5 km",
      timings: "10:00 AM - 5:00 PM (Closed Sundays)",
      entryFee: "₹50 per person",
      bestTime: "Morning hours"
    },
    {
      name: "Araku Valley",
      description: "Scenic hill station known for coffee plantations, tribal culture, and natural caves.",
      image: "https://images.unsplash.com/photo-1565030261169-92a306ff6887?ixlib=rb-4.0.3",
      category: "Hills",
      distance: "115 km",
      timings: "Always open",
      entryFee: "Free (attractions within have separate fees)",
      bestTime: "October to March"
    },
    {
      name: "VUDA Park",
      description: "Urban park with musical fountains, walking trails, and recreational facilities for families.",
      image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3",
      category: "Parks",
      distance: "7 km",
      timings: "8:00 AM - 9:00 PM",
      entryFee: "₹20 per person",
      bestTime: "Evening for musical fountains"
    },
    {
      name: "Ross Hill Church",
      description: "Historic church on a hilltop offering beautiful views of the harbor and city.",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3",
      category: "Religious",
      distance: "6 km",
      timings: "7:00 AM - 7:00 PM",
      entryFee: "Free",
      bestTime: "Early morning or sunset"
    }
  ];
  
  const filteredAttractions = activeCategory === "All" ? 
    attractions : 
    attractions.filter(attraction => attraction.category === activeCategory);

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Local Attractions</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/discover" className="hover:text-cream">Discover Vizag</a>
              <span>/</span>
              <span className="text-cream">Local Attractions</span>
            </div>
          </div>
        </div>
        
        {/* Local Attractions Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <Compass className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Explore Vizag's Best</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              Visakhapatnam offers a wealth of attractions for visitors, from pristine beaches and scenic hills to historical sites and cultural landmarks. Extend your stay and discover the beauty and charm of this coastal gem on India's east coast.
            </p>
            
            {/* Filter Categories */}
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full ${category === activeCategory ? 'bg-maroon text-cream' : 'bg-white text-maroon hover:bg-apricot/50 transition-colors'}`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Attractions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAttractions.map((attraction, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-maroon">{attraction.name}</h3>
                      <span className="bg-apricot/50 text-maroon text-xs px-2 py-1 rounded-full">
                        {attraction.distance}
                      </span>
                    </div>
                    <p className="text-maroon/70 mb-4">{attraction.description}</p>
                    
                    <div className="space-y-2 mb-5 text-sm">
                      <div className="flex gap-2">
                        <span className="font-medium text-maroon">Category:</span>
                        <span className="text-maroon/70">{attraction.category}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-medium text-maroon">Timings:</span>
                        <span className="text-maroon/70">{attraction.timings}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-medium text-maroon">Entry Fee:</span>
                        <span className="text-maroon/70">{attraction.entryFee}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-medium text-maroon">Best Time to Visit:</span>
                        <span className="text-maroon/70">{attraction.bestTime}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default LocalAttractions;
