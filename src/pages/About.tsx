
import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Overview } from '../components/about/Overview';
import { CallToAction } from '../components/home/CallToAction';

const About = () => {
  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">About Us</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <span className="text-cream">About Us</span>
            </div>
          </div>
        </div>
        
        <Overview />
        
        {/* Additional sections would go here */}
        
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default About;
