
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-maroon text-cream pt-12 pb-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="mb-6 lg:mb-0">
            <div className="text-2xl font-serif font-bold mb-4">
              Bayview<span className="text-gold">.</span>
            </div>
            <p className="text-cream/80 mb-6">
              Host Grand Moments by the Sea at Vizag's premier 5-star convention venue
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-cream hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-cream hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-cream hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-cream hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream/80 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/80 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/plan-your-event" className="text-cream/80 hover:text-gold transition-colors">Plan Your Event</Link>
              </li>
              <li>
                <Link to="/events" className="text-cream/80 hover:text-gold transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/80 hover:text-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-serif text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-cream/80 space-y-3">
              <p>Bayview Convention Centre</p>
              <p>Beach Road, Vizag</p>
              <p>Andhra Pradesh, India</p>
              <p>Phone: +91 891 123 4567</p>
              <p>Email: info@bayviewconvention.com</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gold font-serif text-lg mb-4">Stay Updated</h3>
            <p className="text-cream/80 mb-4">Subscribe to our newsletter for updates and offers</p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-2xl w-full bg-white/10 text-cream border-0 focus:ring-1 focus:ring-gold outline-none"
                />
                <button
                  type="submit"
                  className="bg-gold text-maroon px-4 py-2 rounded-r-2xl font-medium hover:bg-apricot transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-cream/20 text-cream/60 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Bayview Convention Centre. All rights reserved.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
