
import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Hero } from '../components/home/Hero';
import { USPs } from '../components/home/USPs';
import { AboutPreview } from '../components/home/AboutPreview';
import { UpcomingEvents } from '../components/home/UpcomingEvents';
import { VirtualTour } from '../components/home/VirtualTour';
import { Testimonials } from '../components/home/Testimonials';
import { CallToAction } from '../components/home/CallToAction';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <USPs />
      <AboutPreview />
      <UpcomingEvents />
      <VirtualTour />
      <Testimonials />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
