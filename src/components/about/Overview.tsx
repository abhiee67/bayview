
import React from 'react';
import { SectionHeading } from '../common/SectionHeading';

export const Overview: React.FC = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="About Bayview"
              subtitle="Excellence by the sea since 2015"
            />
            
            <div className="prose prose-maroon max-w-none">
              <p className="text-lg">
                Bayview Convention Centre is Visakhapatnam's premier destination for memorable events, conferences, and celebrations. Nestled along the shoreline with panoramic views of the Bay of Bengal, we offer a perfect blend of luxury, functionality, and breathtaking natural beauty.
              </p>
              
              <p>
                Established in 2015, our venue has quickly become the go-to choice for high-profile events in the region. Our 50,000+ square feet of versatile event space can accommodate everything from intimate gatherings to large-scale conferences and gala celebrations.
              </p>
              
              <h3 className="font-serif text-maroon">Our Vision</h3>
              <p>
                To be the leading convention destination on India's eastern coast, known for exceptional service, cutting-edge facilities, and unforgettable event experiences.
              </p>
              
              <h3 className="font-serif text-maroon">Our Mission</h3>
              <p>
                To create extraordinary event experiences by combining world-class facilities with personalized service, innovative solutions, and the natural beauty of our beachfront location.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=800&q=80" 
              alt="Bayview Convention Centre Building" 
              className="w-full rounded-2xl card-shadow"
            />
            
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=600&q=80" 
                alt="Bayview Architecture Detail" 
                className="w-full rounded-2xl card-shadow aspect-square object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80" 
                alt="Bayview Beachfront View" 
                className="w-full rounded-2xl card-shadow aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
