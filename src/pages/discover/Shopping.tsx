
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { ShoppingCart } from 'lucide-react';

const Shopping = () => {
  const shoppingVenues = [
    {
      name: "CMR Central",
      type: "Mall",
      description: "The largest shopping mall in Vizag featuring international brands, a food court, multiplex cinema, and entertainment zone.",
      image: "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-4.0.3",
      highlights: [
        "5 floors of retail space",
        "Premium brand outlets",
        "7-screen multiplex",
        "Large food court",
        "Children's play area"
      ],
      location: "Jagadamba Junction, 4 km from Bayview",
      hours: "10:00 AM - 10:00 PM"
    },
    {
      name: "Lepakshi Handicrafts Emporium",
      type: "Handicrafts",
      description: "Government-run emporium offering authentic Andhra handicrafts, textiles, and artworks at fixed prices.",
      image: "https://images.unsplash.com/photo-1542556398-95fb5b9f9b48?ixlib=rb-4.0.3",
      highlights: [
        "Kondapalli toys",
        "Etikoppaka wooden crafts",
        "Kalamkari paintings",
        "Handloom textiles",
        "Tribal artifacts"
      ],
      location: "Beach Road, 1 km from Bayview",
      hours: "10:00 AM - 8:00 PM (Closed Sundays)"
    },
    {
      name: "Jagadamba Centre",
      type: "Shopping District",
      description: "Vizag's traditional shopping hub with a mix of branded stores and local boutiques spread across several streets.",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3",
      highlights: [
        "Variety of clothing stores",
        "Electronics markets",
        "Local eateries",
        "Jewelry shops",
        "Street vendors"
      ],
      location: "City Center, 5 km from Bayview",
      hours: "10:00 AM - 9:00 PM (varies by store)"
    },
    {
      name: "Vizag Central",
      type: "Mall",
      description: "Modern shopping mall with premium brands, entertainment options, and dining experiences.",
      image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-4.0.3",
      highlights: [
        "Designer label stores",
        "Large department store",
        "Gaming zone",
        "Gourmet restaurants",
        "Regular events and exhibitions"
      ],
      location: "Waltair Uplands, 7 km from Bayview",
      hours: "11:00 AM - 9:30 PM"
    },
    {
      name: "Fishermen's Market",
      type: "Local Market",
      description: "Authentic fish market where local fishermen sell their fresh catch every morning.",
      image: "https://images.unsplash.com/photo-1513125370-3438a48e9fea?ixlib=rb-4.0.3",
      highlights: [
        "Fresh seafood varieties",
        "Direct from local fishermen",
        "Traditional trading experience",
        "Best prices through bargaining",
        "Authentic coastal culture"
      ],
      location: "Fishing Harbor, 8 km from Bayview",
      hours: "5:00 AM - 10:00 AM"
    },
    {
      name: "Rythu Bazaar (Farmers' Market)",
      type: "Local Market",
      description: "Government-regulated farmers' market offering fresh produce directly from farmers at reasonable prices.",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3",
      highlights: [
        "Fresh local produce",
        "Organic options available",
        "Fixed pricing system",
        "Seasonal fruits and vegetables",
        "Local spices and herbs"
      ],
      location: "MVP Colony, 6 km from Bayview",
      hours: "6:00 AM - 1:00 PM"
    },
    {
      name: "Dwaraka Nagar Shopping Streets",
      type: "Shopping District",
      description: "Popular shopping area known for textiles, jewelry, and traditional Andhra clothing.",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3",
      highlights: [
        "Silk saree shops",
        "Gold and silver jewelry",
        "Traditional clothing",
        "Wedding shopping",
        "Competitive pricing"
      ],
      location: "Dwaraka Nagar, 9 km from Bayview",
      hours: "10:00 AM - 9:00 PM (varies by store)"
    },
    {
      name: "Akkayyapalem Market",
      type: "Local Market",
      description: "Traditional local market known for household goods, clothing, and affordable shopping.",
      image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-4.0.3",
      highlights: [
        "Budget shopping",
        "Home essentials",
        "Clothing at wholesale prices",
        "Street food options",
        "Local atmosphere"
      ],
      location: "Akkayyapalem, 11 km from Bayview",
      hours: "8:00 AM - 8:00 PM"
    },
    {
      name: "MVP Market",
      type: "Shopping District",
      description: "Upscale shopping area in a residential neighborhood with boutiques and specialty stores.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3",
      highlights: [
        "Designer boutiques",
        "Specialty gift shops",
        "Gourmet food stores",
        "Upscale cafes",
        "Home decor shops"
      ],
      location: "MVP Colony, 7 km from Bayview",
      hours: "11:00 AM - 8:30 PM"
    }
  ];

  const localSpecialties = [
    {
      item: "Etikoppaka Toys",
      description: "Colorful wooden toys and figurines made in the Etikoppaka village using natural dyes and soft wood.",
      where: "Lepakshi Emporium, local handicraft stores"
    },
    {
      item: "Kalamkari Fabrics",
      description: "Hand-painted or block-printed cotton textiles using natural dyes, depicting mythological scenes and patterns.",
      where: "Lepakshi Emporium, textile boutiques in Dwaraka Nagar"
    },
    {
      item: "Kondapalli Toys",
      description: "Traditional wooden toys and figurines made with light-weight wood, depicting rural life and mythology.",
      where: "Handicraft exhibitions, Lepakshi Emporium"
    },
    {
      item: "Araku Coffee",
      description: "Organic coffee grown in the Araku Valley known for its unique aroma and smooth flavor.",
      where: "Specialty stores, coffee shops, Araku Valley"
    },
    {
      item: "Ponduru Cotton",
      description: "Fine handwoven cotton textiles known for their lightweight and durability, produced in the Ponduru village.",
      where: "Khadi stores, select textile boutiques"
    },
    {
      item: "Cashew Nuts",
      description: "Premium quality cashews from the coastal regions, available in various flavors and preparations.",
      where: "Local markets, specialty dry fruit stores"
    }
  ];

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Shopping</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/discover" className="hover:text-cream">Discover Vizag</a>
              <span>/</span>
              <span className="text-cream">Shopping</span>
            </div>
          </div>
        </div>
        
        {/* Shopping Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">From Handicrafts to High-End</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              Discover a variety of shopping experiences in Visakhapatnam, from modern malls and boutiques to traditional markets and handicraft emporiums. Take home a piece of Andhra's rich cultural heritage or indulge in international brands and luxury items.
            </p>
            
            {/* Shopping Venues */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {shoppingVenues.map((venue, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={venue.image} 
                      alt={venue.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-2 flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-maroon">{venue.name}</h3>
                      <span className="bg-apricot/50 text-maroon text-xs px-2 py-1 rounded-full">
                        {venue.type}
                      </span>
                    </div>
                    <p className="text-maroon/70 mb-4">{venue.description}</p>
                    
                    <div className="mb-4 flex-grow">
                      <h4 className="font-medium text-maroon mb-2">Highlights:</h4>
                      <ul className="grid grid-cols-1 gap-1">
                        {venue.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-gold mr-2">•</span>
                            <span className="text-maroon/70 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-1 text-sm border-t border-apricot pt-4">
                      <div className="flex gap-2">
                        <span className="font-medium text-maroon">Location:</span>
                        <span className="text-maroon/70">{venue.location}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-medium text-maroon">Hours:</span>
                        <span className="text-maroon/70">{venue.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Local Specialties */}
            <h3 className="text-2xl font-serif text-maroon mb-8">Local Specialties to Bring Home</h3>
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localSpecialties.map((specialty, index) => (
                  <div key={index} className="border-b border-apricot/50 pb-4 mb-4 md:border-0 md:pb-0 md:mb-0">
                    <h4 className="font-semibold text-maroon mb-2">{specialty.item}</h4>
                    <p className="text-maroon/70 text-sm mb-2">{specialty.description}</p>
                    <p className="text-sm text-gold">
                      <strong className="text-maroon">Where to find:</strong> {specialty.where}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Shopping Tips */}
            <div className="bg-apricot/50 rounded-2xl p-6 md:p-8 mt-12">
              <h3 className="text-2xl font-serif text-maroon mb-4">Shopping Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-maroon mr-2">1.</span>
                  <span className="text-maroon/80">Bargaining is expected in local markets and with street vendors, but not in fixed-price shops or malls.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-maroon mr-2">2.</span>
                  <span className="text-maroon/80">Most shops accept major credit/debit cards, but carry cash for small vendors and markets.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-maroon mr-2">3.</span>
                  <span className="text-maroon/80">Shopping hours vary by location, with most places closing by 9 PM. Many local shops close for lunch from 1-3 PM.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-maroon mr-2">4.</span>
                  <span className="text-maroon/80">Ask for GST invoices for higher-value purchases to ensure authenticity and warranty.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-maroon mr-2">5.</span>
                  <span className="text-maroon/80">For authentic local handicrafts and guaranteed quality, government emporiums like Lepakshi are recommended.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default Shopping;
