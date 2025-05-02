
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { AirVent } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AmenitiesAV = () => {
  const avEquipment = [
    {
      category: "Audio",
      items: [
        "Professional PA systems with digital mixing consoles",
        "Wireless handheld and lavalier microphones",
        "Ceiling-mounted speakers for ambient sound",
        "Digital audio processors for optimal acoustics",
        "In-house audio engineers for technical support"
      ]
    },
    {
      category: "Visual",
      items: [
        "4K laser projectors with 300-inch screens",
        "LED video walls (up to 24ft x 12ft)",
        "Digital signage throughout the venue",
        "Broadcast-quality cameras for live streaming",
        "Lighting systems with programmable scenes"
      ]
    },
    {
      category: "Connectivity",
      items: [
        "High-speed WiFi (up to 1 Gbps) throughout the venue",
        "Dedicated networks for event productions",
        "Video conferencing systems for hybrid events",
        "Fiber optic backbone for reliable connectivity",
        "Multiple input options (HDMI, DisplayPort, USB-C)"
      ]
    }
  ];

  const amenities = [
    {
      icon: "🚪",
      title: "VIP Entrance & Lounge",
      description: "Dedicated entrance for VIP guests with private lounge and concierge service."
    },
    {
      icon: "🍽️",
      title: "Green Rooms",
      description: "Fully furnished preparation areas for performers or speakers with private washrooms."
    },
    {
      icon: "🔒",
      title: "Security Services",
      description: "24/7 security coverage with trained personnel and CCTV monitoring."
    },
    {
      icon: "⚡",
      title: "Power Backup",
      description: "Uninterrupted power supply ensuring your event continues without disruption."
    },
    {
      icon: "❄️",
      title: "Climate Control",
      description: "State-of-the-art HVAC systems maintaining ideal temperature throughout the venue."
    },
    {
      icon: "🚗",
      title: "Valet Parking",
      description: "Professional valet service available for guest convenience."
    },
    {
      icon: "👨‍💼",
      title: "Event Concierge",
      description: "Dedicated event manager to coordinate all aspects of your function."
    },
    {
      icon: "🌐",
      title: "Business Center",
      description: "Fully equipped business center with printing and secretarial services."
    }
  ];

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Amenities & AV</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/plan-your-event" className="hover:text-cream">Plan Your Event</a>
              <span>/</span>
              <span className="text-cream">Amenities & AV</span>
            </div>
          </div>
        </div>
        
        {/* AV Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <AirVent className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Technology That Elevates Every Event</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              At Bayview Convention Centre, we've invested in cutting-edge audiovisual technology to ensure your message is delivered with maximum impact. From intimate gatherings to grand productions, our technical capabilities adapt to your needs.
            </p>
            
            {/* AV Equipment Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {avEquipment.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-maroon mb-4 border-b border-apricot pb-2">{category.category}</h3>
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gold mr-2">•</span>
                          <span className="text-maroon/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tech Support - Removed download button as requested */}
            <div className="bg-apricot/50 rounded-2xl p-6 md:p-8 mb-16">
              <h3 className="text-2xl font-serif text-maroon mb-4">Tech Support</h3>
              <p className="text-maroon/80 mb-6">
                Our in-house team of technical experts is available throughout your event. From setup to execution, our professionals ensure your event runs smoothly, allowing you to focus on your audience rather than equipment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" href="/plan-your-event/enquiry">Request Custom Setup</Button>
              </div>
            </div>
            
            {/* Amenities Section */}
            <h2 className="text-3xl font-serif text-maroon mb-8">Additional Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{amenity.icon}</div>
                  <h3 className="text-lg font-semibold text-maroon mb-2">{amenity.title}</h3>
                  <p className="text-maroon/70">{amenity.description}</p>
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

export default AmenitiesAV;
