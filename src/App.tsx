
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Main Pages
import Index from "./pages/Index";
import About from "./pages/About";
import PlanYourEvent from "./pages/PlanYourEvent";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Hall1 from "./pages/halls/Hall1";
import Hall2 from "./pages/halls/Hall2";
import Hall3 from "./pages/halls/Hall3";

// About Us Section Pages
import Team from "./pages/about/Team";
import Awards from "./pages/about/Awards";
import Testimonials from "./pages/about/Testimonials";

// Plan Your Event Section Pages
import AmenitiesAV from "./pages/plan/AmenitiesAV";
import Packages from "./pages/plan/Packages";
import Enquiry from "./pages/plan/Enquiry";

// Events Section Pages
import UpcomingEvents from "./pages/events/UpcomingEvents";
import PastEvents from "./pages/events/PastEvents";
import PastEventsPage2 from "./pages/events/PastEventsPage2";
import PastEventsPage3 from "./pages/events/PastEventsPage3";
import Gallery from "./pages/events/Gallery";
import TechSummit from "./pages/events/TechSummit";
import WeddingExpo from "./pages/events/WeddingExpo";
import MedicalConference from "./pages/events/MedicalConference";
import FoodFestival from "./pages/events/FoodFestival";
import Bookings from "./pages/events/Bookings";

// Visit Us Section Pages
import GettingHere from "./pages/visit/GettingHere";
import DiningStay from "./pages/visit/DiningStay";
import ParkingAccessibility from "./pages/visit/ParkingAccessibility";

// Auto-scroll functionality
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Add scroll behavior for the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Setup smooth scrolling for all anchor links
    const setupSmoothScrolling = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId && targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        });
      });
    };
    
    // Run setup after DOM is fully loaded
    if (document.readyState === 'complete') {
      setupSmoothScrolling();
    } else {
      window.addEventListener('load', setupSmoothScrolling);
      return () => window.removeEventListener('load', setupSmoothScrolling);
    }
    
    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = '';
    };
  }, [location.pathname]); // Re-run when route changes

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/venue-availability/hall-1" element={<Hall1 />} />
          <Route path="/venue-availability/hall-2" element={<Hall2 />} />
          <Route path="/venue-availability/hall-3" element={<Hall3 />} />
          
          {/* About Us Section */}
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/awards" element={<Awards />} />
          <Route path="/about/testimonials" element={<Testimonials />} />
          
          {/* Plan Your Event Section */}
          <Route path="/plan-your-event" element={<PlanYourEvent />} />
          <Route path="/plan-your-event/amenities" element={<AmenitiesAV />} />
          <Route path="/plan-your-event/packages" element={<Packages />} />
          <Route path="/plan-your-event/enquiry" element={<Enquiry />} />
          
          {/* Events Section */}
          <Route path="/events" element={<UpcomingEvents />} />
          <Route path="/events/past" element={<PastEvents />} />
          <Route path="/events/past/page2" element={<PastEventsPage2 />} />
          <Route path="/events/past/page3" element={<PastEventsPage3 />} />
          <Route path="/events/gallery" element={<Gallery />} />
          <Route path="/events/tech-summit" element={<TechSummit />} />
          <Route path="/events/wedding-expo" element={<WeddingExpo />} />
          <Route path="/events/medical-conference" element={<MedicalConference />} />
          <Route path="/events/food-festival" element={<FoodFestival />} />
          <Route path="/events/bookings" element={<Bookings />} />
          
          {/* Visit Us Section */}
          <Route path="/visit" element={<GettingHere />} />
          <Route path="/visit/dining-stay" element={<DiningStay />} />
          <Route path="/visit/parking" element={<ParkingAccessibility />} />
          
          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
