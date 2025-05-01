
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { MessageSquare } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun & Meera Kapoor",
      eventType: "Wedding",
      date: "February 2023",
      image: "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixlib=rb-4.0.3",
      quote: "Our beachfront wedding at Bayview was nothing short of magical. The staff's attention to detail and the breathtaking sunset views made our special day perfect beyond imagination."
    },
    {
      name: "TechNova Conference",
      eventType: "Corporate Conference",
      date: "May 2023",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3",
      quote: "The technical setup was flawless for our 3-day international conference. Bayview's team anticipated our needs before we even had to ask. Our delegates from 23 countries were thoroughly impressed."
    },
    {
      name: "Dr. Suresh Kumar",
      eventType: "Medical Symposium",
      date: "August 2022",
      image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3",
      quote: "The flexibility of the venue spaces allowed us to host both large plenary sessions and intimate breakout discussions. The catering was exceptional, with health-conscious options that our medical professionals appreciated."
    },
    {
      name: "Jayanthi Cultural Foundation",
      eventType: "Dance Festival",
      date: "November 2022",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3",
      quote: "The acoustics in the main hall were perfect for our classical dance performances. The lighting team worked closely with our choreographers to create the most beautiful ambiance for each piece."
    },
    {
      name: "Global Exports Ltd.",
      eventType: "Annual Gala",
      date: "December 2022",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
      quote: "We've hosted our annual gala at several 5-star venues across India, but Bayview has set a new standard in elegance and service. The seafood menu featuring local specialties was a highlight for our international guests."
    },
    {
      name: "Sharma Family",
      eventType: "50th Anniversary Celebration",
      date: "April 2023",
      image: "https://images.unsplash.com/photo-1507915135761-41a0a222c709?ixlib=rb-4.0.3",
      quote: "The Bayview team treated our family celebration with such personal care. From accommodating our elderly guests to creating custom decorations that reflected our 50-year journey together, they made our anniversary truly memorable."
    },
  ];

  const videoTestimonials = [
    {
      name: "Coastal Developers Annual Conference",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3",
      videoUrl: "#", // In a real scenario, this would be a YouTube or Vimeo URL
      quote: "The beachfront location provided the perfect backdrop for our sustainability-focused conference. Attendees particularly enjoyed the networking sessions on the terrace overlooking the Bay of Bengal."
    },
    {
      name: "South Indian Film Awards",
      thumbnail: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?ixlib=rb-4.0.3",
      videoUrl: "#", // In a real scenario, this would be a YouTube or Vimeo URL
      quote: "The red carpet experience at Bayview was spectacular. The grand hall transformed beautifully for our awards ceremony, and the media facilities were top-notch for our press coverage."
    }
  ];

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Testimonials</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/about" className="hover:text-cream">About Us</a>
              <span>/</span>
              <span className="text-cream">Testimonials</span>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Voices of Our Clients</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              Hear from those who've experienced the Bayview difference. Our clients' satisfaction is our greatest achievement, and we're proud to share their stories.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <blockquote className="italic text-maroon/80 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-semibold text-maroon">{testimonial.name}</p>
                        <p className="text-gold text-sm">{testimonial.eventType}</p>
                      </div>
                      <p className="text-sm text-maroon/60">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Video Testimonials Section */}
            <h3 className="text-2xl font-serif text-maroon mb-8">Video Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoTestimonials.map((video, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-64 relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-16 h-16 bg-maroon/90 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-cream ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-semibold text-maroon mb-2">{video.name}</p>
                    <blockquote className="italic text-maroon/80">
                      "{video.quote}"
                    </blockquote>
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

export default Testimonials;
