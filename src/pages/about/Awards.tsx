import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Award } from 'lucide-react';
const Awards = () => {
  const awards = [{
    year: 2023,
    title: "India's Best Convention Center",
    organization: "Hospitality Excellence Awards",
    image: "https://images.unsplash.com/photo-1618411640018-972400a01816?ixlib=rb-4.0.3",
    description: "Recognized for outstanding event management and customer satisfaction."
  }, {
    year: 2022,
    title: "Best Wedding Venue - South India",
    organization: "Wedding Planners Association of India",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
    description: "Award for exceptional service in hosting luxury wedding events."
  }, {
    year: 2022,
    title: "Green Building Certification",
    organization: "Indian Green Building Council",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3",
    description: "Platinum rating for sustainable architecture and eco-friendly operations."
  }, {
    year: 2021,
    title: "Best Technical Infrastructure",
    organization: "Events Technology Awards",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3",
    description: "Recognized for state-of-the-art audiovisual and conference technologies."
  }, {
    year: 2020,
    title: "Tourism Impact Award",
    organization: "Andhra Pradesh Tourism Department",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3",
    description: "For significant contribution to Vizag's tourism development."
  }, {
    year: 2019,
    title: "Culinary Excellence Award",
    organization: "Food Critics Association",
    image: "https://images.unsplash.com/photo-1564631027894-5bdb17618445?ixlib=rb-4.0.3",
    description: "For exceptional catering services and innovative menu offerings."
  }];
  return <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Awards & Recognition</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/about" className="hover:text-cream">About Us</a>
              <span>/</span>
              <span className="text-cream">Awards</span>
            </div>
          </div>
        </div>
        
        {/* Awards Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Recognizing Excellence</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              At Bayview Convention Centre, our commitment to excellence has been recognized by numerous industry organizations. Each award reflects our dedication to providing exceptional experiences for every event we host.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award, index) => <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img src={award.image} alt={award.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-apricot text-maroon font-medium mb-3">
                      {award.year}
                    </span>
                    <h3 className="text-xl font-semibold text-maroon mb-2">{award.title}</h3>
                    <p className="text-gold font-medium mb-3">
                      Awarded by: {award.organization}
                    </p>
                    <p className="text-maroon/70">{award.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>
        
        <CallToAction />
      </div>
    </MainLayout>;
};
export default Awards;