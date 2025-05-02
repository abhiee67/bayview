
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { MapPin } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const GettingHere = () => {
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
        
        {/* Map Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Find Your Way to Bayview</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              Located in the heart of Visakhapatnam with stunning views of the Bay of Bengal, Bayview Convention Centre is easily accessible by various modes of transportation.
            </p>
            
            {/* Google Map */}
            <div className="w-full h-[500px] rounded-2xl overflow-hidden mb-12 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121394.66532448962!2d83.17905555673361!3d17.734900571545635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1688456791396!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bayview Convention Centre Location"
              ></iframe>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div>
                <h3 className="text-2xl font-serif text-maroon mb-4">Address</h3>
                <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
                  <p className="mb-1">Bayview Convention Centre</p>
                  <p className="mb-1">Beach Road, R.K. Beach</p>
                  <p className="mb-1">Visakhapatnam - 530003</p>
                  <p className="mb-1">Andhra Pradesh, India</p>
                  <p className="mt-4">
                    <strong>Phone:</strong> +91 891 2754 800
                  </p>
                  <p>
                    <strong>Email:</strong> info@bayviewvizag.com
                  </p>
                </div>
                
                <h3 className="text-2xl font-serif text-maroon mb-4">Nearby Landmarks</h3>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <ul className="list-disc list-inside space-y-2 text-maroon/80">
                    <li>2 km from R.K. Beach</li>
                    <li>5 km from Visakhapatnam Railway Station</li>
                    <li>15 km from Visakhapatnam International Airport</li>
                    <li>3 km from Submarine Museum</li>
                    <li>10 km from Kailasagiri Hill Park</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif text-maroon mb-4">Transportation Options</h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h4 className="text-lg font-medium text-maroon mb-2">By Air</h4>
                    <p className="text-maroon/80">
                      Visakhapatnam International Airport is well-connected to major cities across India with regular flights from Delhi, Mumbai, Bangalore, Chennai, and Hyderabad. International connections include Singapore, Dubai, and Kuala Lumpur.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h4 className="text-lg font-medium text-maroon mb-2">By Train</h4>
                    <p className="text-maroon/80">
                      Visakhapatnam Railway Station is a major junction on the East Coast Railway line with excellent connectivity to all major cities in India. Premium trains like Rajdhani, Shatabdi, and Duronto have stops here.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h4 className="text-lg font-medium text-maroon mb-2">By Road</h4>
                    <p className="text-maroon/80">
                      Visakhapatnam is well-connected by national highways. Regular bus services operate from neighboring cities and states. The venue is accessible via NH-16 (formerly NH-5), which runs through the city.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h4 className="text-lg font-medium text-maroon mb-2">Local Transportation</h4>
                    <p className="text-maroon/80">
                      Taxis, auto-rickshaws, and ride-sharing services are readily available throughout the city. The city also has an efficient public bus system operated by APSRTC.
                    </p>
                  </div>
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
