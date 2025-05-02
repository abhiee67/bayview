
import React from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { CallToAction } from '../../components/home/CallToAction';
import { Calendar, MapPin, Clock, User, Tag } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const FoodFestival = () => {
  return (
    <MainLayout>
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-maroon py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-serif text-cream">Food & Wine Festival</h1>
            <div className="flex gap-2 mt-4 text-cream/70">
              <a href="/" className="hover:text-cream">Home</a>
              <span>/</span>
              <a href="/events" className="hover:text-cream">Events</a>
              <span>/</span>
              <span className="text-cream">Food & Wine Festival</span>
            </div>
          </div>
        </div>
        
        {/* Event Details */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80" 
                    alt="Food & Wine Festival" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                <h2 className="text-3xl font-serif text-maroon mb-6">Event Overview</h2>
                <div className="prose max-w-none text-maroon/80 mb-8">
                  <p>
                    Indulge your senses at the Food & Wine Festival 2025, a gastronomic celebration showcasing the finest culinary creations and premium beverages from across India and around the world. This three-day extravaganza brings together renowned chefs, sommeliers, food artisans, and enthusiastic foodies for an unforgettable experience of flavors, aromas, and culinary techniques.
                  </p>
                  <p>
                    Set against the stunning backdrop of Vizag's coastline, the festival features cooking demonstrations, wine tastings, food pairings, and exclusive dining experiences. Whether you're a seasoned gourmet or an eager food lover, you'll discover new flavors and culinary inspirations to delight your palate.
                  </p>
                  <h3 className="text-xl font-serif text-maroon mt-8 mb-4">Festival Highlights</h3>
                  <ul>
                    <li><strong>Celebrity Chef Showcases</strong> - Live cooking demonstrations from nationally recognized culinary stars</li>
                    <li><strong>Gourmet Marketplace</strong> - Explore and purchase artisanal foods, specialty ingredients, and kitchen tools</li>
                    <li><strong>Wine & Spirits Pavilion</strong> - Sample premium wines, craft beers, and spirits from leading producers</li>
                    <li><strong>Coastal Cuisine Showcase</strong> - Celebrating the rich seafood traditions of Andhra Pradesh</li>
                    <li><strong>Global Flavors Zone</strong> - International cuisines from Mediterranean to Asian delights</li>
                    <li><strong>Dessert Paradise</strong> - Sweet creations from master pastry chefs and confectioners</li>
                  </ul>
                  <h3 className="text-xl font-serif text-maroon mt-8 mb-4">Special Events</h3>
                  <p><strong>Day 1: August 8, 2025</strong></p>
                  <ul>
                    <li>Festival Opening & Grand Tasting</li>
                    <li>Masterclass: "The Art of Spices" with Chef Vikram Sharma</li>
                    <li>Wine Appreciation Workshop</li>
                    <li>Seafood Extravaganza Dinner (Ticketed event)</li>
                  </ul>
                  <p><strong>Day 2: August 9, 2025</strong></p>
                  <ul>
                    <li>Farmers' Market Breakfast</li>
                    <li>Cooking Competition: Amateur Chefs Showcase</li>
                    <li>Cheese & Wine Pairing Session</li>
                    <li>International Street Food Night (Ticketed event)</li>
                  </ul>
                  <p><strong>Day 3: August 10, 2025</strong></p>
                  <ul>
                    <li>Farm-to-Table Brunch</li>
                    <li>Dessert Making Championships</li>
                    <li>Craft Cocktail Competition</li>
                    <li>Grand Finale Gala Dinner (Ticketed event)</li>
                  </ul>
                </div>
                
                <Button href="/events/bookings" variant="primary" className="mt-4">
                  Book Tickets
                </Button>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
                  <h3 className="text-xl font-serif text-maroon mb-4">Event Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Date</p>
                        <p className="text-maroon/70">August 8-10, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Time</p>
                        <p className="text-maroon/70">11:00 AM - 10:00 PM daily</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Venue</p>
                        <p className="text-maroon/70">Garden Terrace & Grand Ballroom, Bayview Convention Centre</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Tag className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Ticket Options</p>
                        <p className="text-maroon/70">Day Pass: ₹1,500</p>
                        <p className="text-maroon/70">Weekend Pass: ₹3,500</p>
                        <p className="text-maroon/70">VIP Experience (includes special tastings): ₹5,000</p>
                        <p className="text-maroon/70">Special Dining Events: Priced separately</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="font-medium text-maroon">Expected Attendance</p>
                        <p className="text-maroon/70">3,000+ food enthusiasts, 50+ exhibitors</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-xl font-serif text-maroon mb-4">Contact Information</h3>
                  <p className="text-maroon/70 mb-4">For inquiries about the Food & Wine Festival, please contact:</p>
                  <div className="space-y-2 text-maroon/70">
                    <p><strong>Email:</strong> foodfestival@bayviewvizag.com</p>
                    <p><strong>Phone:</strong> +91 891 2754 835</p>
                    <p><strong>Festival Manager:</strong> Ms. Anjali Reddy</p>
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

export default FoodFestival;
