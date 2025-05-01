
import React from 'react';
import { Award, Map, Video, Users } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const USPs: React.FC = () => {
  const features = [
    {
      icon: <Map className="h-12 w-12 text-gold" />,
      title: 'Sea-facing Halls',
      description: 'Stunning views of the Bay of Bengal for your events',
    },
    {
      icon: <Users className="h-12 w-12 text-gold" />,
      title: '2000+ Capacity',
      description: 'Multiple venues accommodating small to large gatherings',
    },
    {
      icon: <Video className="h-12 w-12 text-gold" />,
      title: 'Cutting-edge AV',
      description: 'State-of-the-art audio-visual technology and support',
    },
    {
      icon: <Award className="h-12 w-12 text-gold" />,
      title: 'Beachfront Location',
      description: 'Prime location with easy access to city attractions',
    },
  ];

  return (
    <section className="bg-cream section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Why Choose Bayview"
          subtitle="Experience excellence with our premium amenities and services"
          center={true}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white card-shadow hover-lift"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-medium mb-2">{feature.title}</h3>
              <p className="text-maroon/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
