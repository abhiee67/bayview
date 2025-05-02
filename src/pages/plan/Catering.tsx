import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Utensils } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const Catering = () => {
  const cuisineTypes = [
    {
      name: "Contemporary Indian",
      description: "Modern interpretations of classic Indian flavors, featuring regional specialties from across the subcontinent.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3"
    },
    {
      name: "Coastal Andhra",
      description: "Authentic local cuisine highlighting seafood and signature spicy flavors from the Vizag region.",
      image: "https://images.unsplash.com/photo-1689972896062-441ce3aecc2d?ixlib=rb-4.0.3"
    },
    {
      name: "Pan Asian",
      description: "Curated selection of dishes from Chinese, Japanese, Thai and Malaysian traditions with authentic preparation methods.",
      image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3"
    },
    {
      name: "Continental",
      description: "European classics executed with precision, featuring premium ingredients and elegant presentation.",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3"
    }
  ];

  const serviceStyles = [
    {
      style: "Grand Buffet",
      description: "Elegant stations with live cooking elements and carving stations, ideal for large gatherings.",
      suitable: "Conferences, weddings, and gala dinners"
    },
    {
      style: "Plated Fine Dining",
      description: "Multi-course meals with impeccable table service for sophisticated events.",
      suitable: "Corporate dinners, award ceremonies"
    },
    {
      style: "Reception Style",
      description: "Passed hors d'oeuvres and interactive food stations encouraging networking and movement.",
      suitable: "Cocktail receptions, networking events"
    },
    {
      style: "Family Style",
      description: "Shared platters at each table promoting conversation and a sense of community.",
      suitable: "Social gatherings, cultural celebrations"
    },
    {
      style: "Coffee Breaks & Refreshments",
      description: "Artisanal coffee selections with gourmet snacks and health-conscious options.",
      suitable: "Conferences, all-day meetings"
    },
    {
      style: "Beverage Service",
      description: "From premium bar setups to signature mocktails and regional specialties.",
      suitable: "All events requiring beverage service"
    }
  ];

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Catering Services</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/plan-your-event" className="hover:text-cream">Plan Your Event</a>
              <span>/</span>
              <span className="text-cream">Catering Services</span>
            </div>
          </div>
        </div>
        
        {/* Catering Introduction */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <Utensils className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Flavors to Match Every Occasion</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              At Bayview, we believe dining is an essential part of any memorable event. Our culinary team crafts exceptional menus that celebrate both international cuisines and local flavors, using the freshest ingredients to delight your guests.
            </p>
            
            {/* Cuisine Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {cuisineTypes.map((cuisine, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={cuisine.image} 
                      alt={cuisine.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-semibold text-maroon mb-2">{cuisine.name}</h3>
                    <p className="text-maroon/70">{cuisine.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Service Styles */}
            <h2 className="text-3xl font-serif text-maroon mb-8">Service Styles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {serviceStyles.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-maroon mb-3">{service.style}</h3>
                  <p className="text-maroon/70 mb-4">{service.description}</p>
                  <p className="text-sm text-gold font-medium">
                    Ideal for: {service.suitable}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Custom Menus section removed as requested */}
          </div>
        </section>
        
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default Catering;
