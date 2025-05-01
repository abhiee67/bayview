
import React, { useState } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { GalleryHorizontal, X } from 'lucide-react';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  
  const openLightbox = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3",
      alt: "Grand Ballroom setup",
      category: "Venues"
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3",
      alt: "Beach wedding ceremony",
      category: "Weddings"
    },
    {
      src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3",
      alt: "Conference keynote",
      category: "Conferences"
    },
    {
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3",
      alt: "Evening gala dinner",
      category: "Celebrations"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3",
      alt: "Wedding reception decoration",
      category: "Weddings"
    },
    {
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3",
      alt: "Exhibition booth setup",
      category: "Exhibitions"
    },
    {
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3",
      alt: "Awards ceremony stage",
      category: "Celebrations"
    },
    {
      src: "https://images.unsplash.com/photo-1483443487168-a1c644219392?ixlib=rb-4.0.3",
      alt: "Coastal cuisine presentation",
      category: "Food"
    },
    {
      src: "https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-4.0.3",
      alt: "Corporate team building",
      category: "Corporate"
    },
    {
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3",
      alt: "Tech conference breakout session",
      category: "Conferences"
    },
    {
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3",
      alt: "Outdoor cocktail reception",
      category: "Celebrations"
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3",
      alt: "Bay View Room sunset view",
      category: "Venues"
    },
  ];
  
  const videos = [
    {
      thumbnail: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3",
      title: "2023 Annual Gala Highlights",
      duration: "3:42"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3",
      title: "Virtual Tour: Grand Ballroom",
      duration: "2:15"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3",
      title: "Beachfront Wedding Experience",
      duration: "4:28"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3",
      title: "Tech Summit 2023 Recap",
      duration: "5:12"
    }
  ];
  
  const categories = ["All", "Venues", "Weddings", "Conferences", "Exhibitions", "Celebrations", "Corporate", "Food"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPhotos = activeCategory === "All" ? 
    photos : 
    photos.filter(photo => photo.category === activeCategory);

  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Gallery</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/events" className="hover:text-cream">Events</a>
              <span>/</span>
              <span className="text-cream">Gallery</span>
            </div>
          </div>
        </div>
        
        {/* Gallery Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-6">
              <GalleryHorizontal className="text-maroon h-8 w-8" />
              <h2 className="text-3xl font-serif text-maroon">Visual Showcase</h2>
            </div>
            <p className="text-lg text-maroon/80 max-w-3xl mb-12">
              Explore our collection of images and videos showcasing the beauty of Bayview Convention Centre and the unforgettable events we've hosted. From intimate gatherings to grand celebrations, each moment tells a story.
            </p>
            
            {/* Filter Categories */}
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full ${category === activeCategory ? 'bg-maroon text-cream' : 'bg-white text-maroon hover:bg-apricot/50 transition-colors'}`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Photo Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
              {filteredPhotos.map((photo, index) => (
                <div 
                  key={index} 
                  className="aspect-square overflow-hidden rounded-xl cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => openLightbox(photo.src)}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            
            {/* Video Gallery */}
            <h3 className="text-2xl font-serif text-maroon mb-8">Video Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-16 h-16 bg-maroon/90 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-cream ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-maroon">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-apricot transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={currentImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
        
        <CallToAction />
      </div>
    </MainLayout>
  );
};

export default Gallery;
