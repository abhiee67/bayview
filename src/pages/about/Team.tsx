
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Users } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Aditya Sharma',
      title: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3',
      bio: 'With over 20 years in the hospitality and events industry, Aditya brings a wealth of experience to Bayview. His vision has shaped our venue into the premier destination for world-class events in Vizag.'
    },
    {
      name: 'Priya Reddy',
      title: 'Director of Events',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3',
      bio: 'Priya has orchestrated over 500 events ranging from international conferences to celebrity weddings. Her attention to detail and creative vision ensure that each event at Bayview exceeds expectations.'
    },
    {
      name: 'Vikram Malhotra',
      title: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3',
      bio: 'Vikram ensures the flawless execution of every event at Bayview. His background in logistics and venue management keeps our operations running smoothly even during the busiest seasons.'
    },
    {
      name: 'Ananya Patel',
      title: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3',
      bio: 'Chef Ananya brings culinary excellence to Bayview with her innovative approach to both international cuisine and local Andhra specialties. Her menus have received acclaim from food critics across India.'
    },
    {
      name: 'Rajesh Kumar',
      title: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
      bio: 'Rajesh oversees our state-of-the-art audiovisual systems, ensuring seamless technology integration for presentations, performances, and virtual components of hybrid events.'
    },
    {
      name: 'Sunita Rao',
      title: 'Client Relations Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3',
      bio: 'Sunita is the friendly face of Bayview for our clients. Her dedication to customer satisfaction and problem-solving abilities have earned her countless testimonials from happy clients.'
    },
  ];

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Our Team</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/about" className="hover:text-cream">About Us</a>
              <span>/</span>
              <span className="text-cream">Our Team</span>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Meet the People Behind Bayview</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              Our dedicated team of professionals works tirelessly to ensure your event is nothing short of extraordinary. With decades of combined experience, our experts bring creativity, precision, and passion to every event at Bayview.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-maroon">{member.name}</h3>
                    <p className="text-gold font-medium mb-3">{member.title}</p>
                    <p className="text-maroon/70">{member.bio}</p>
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

export default Team;
