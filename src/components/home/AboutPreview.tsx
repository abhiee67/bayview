
import React from 'react';
import { Button } from '../ui/Button';

export const AboutPreview: React.FC = () => {
  return (
    <section className="section-padding bg-apricot/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-maroon mb-6">
              The Premium Convention Experience in Vizag
            </h2>
            <p className="text-maroon/80 mb-4 text-lg">
              Nestled along the pristine coastline of Visakhapatnam, Bayview Convention Centre offers a perfect blend of luxury, functionality, and breathtaking views that make every event memorable.
            </p>
            <p className="text-maroon/80 mb-6">
              With over 50,000 square feet of versatile event space, state-of-the-art technology, and a dedicated team of professionals, we've proudly hosted countless corporate conferences, elegant weddings, and high-profile cultural events since our establishment in 2015.
            </p>
            <Button href="/about" variant="outline">
              Learn More
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden card-shadow">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80" 
              alt="Bayview Convention Centre Building" 
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
