
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Handle navigation with scroll to top behavior
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    closeMenu();
  };

  const navLinks = [
    {
      title: 'Home',
      path: '/',
      dropdown: null,
    },
    {
      title: 'About Us',
      path: '/about',
      dropdown: 'about',
      items: [
        { title: 'Overview', path: '/about' },
        { title: 'Our Team', path: '/about/team' },
        { title: 'Awards', path: '/about/awards' },
        { title: 'Testimonials', path: '/about/testimonials' },
      ],
    },
    {
      title: 'Plan Your Event',
      path: '/plan-your-event',
      dropdown: 'plan',
      items: [
        { title: 'Venues & Layouts', path: '/plan-your-event' },
        { title: 'Amenities & AV', path: '/plan-your-event/amenities' },
        { title: 'Packages', path: '/plan-your-event/packages' },
        { title: 'Make an Enquiry', path: '/plan-your-event/enquiry' },
      ],
    },
    {
      title: 'Events',
      path: '/events',
      dropdown: 'events',
      items: [
        { title: 'Upcoming Events', path: '/events' },
        { title: 'Past Events', path: '/events/past' },
        { title: 'Gallery', path: '/events/gallery' },
      ],
    },
    {
      title: 'Visit Us',
      path: '/visit',
      dropdown: 'visit',
      items: [
        { title: 'Getting Here', path: '/visit' },
        { title: 'Dining & Stay', path: '/visit/dining-stay' },
        { title: 'Parking & Accessibility', path: '/visit/parking' },
      ],
    },
    {
      title: 'Contact Us',
      path: '/contact',
      dropdown: null,
    },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center" onClick={() => handleNavigation('/')}>
            <div className="text-maroon text-2xl md:text-3xl font-serif font-bold cursor-pointer">
              Bayview<span className="text-gold">.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.dropdown ? (
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDropdownToggle(link.dropdown!)}
                      className={cn(
                        'flex items-center text-sm font-medium hover:text-gold transition-colors',
                        activeDropdown === link.dropdown ? 'text-gold' : 'text-maroon'
                      )}
                    >
                      {link.title}
                      <ChevronDown className={cn('ml-1 h-4 w-4 transition-transform', 
                        activeDropdown === link.dropdown ? 'rotate-180' : '')} />
                    </button>
                  </div>
                ) : (
                  <div
                    className="text-sm font-medium text-maroon hover:text-gold transition-colors cursor-pointer"
                    onClick={() => handleNavigation(link.path)}
                  >
                    {link.title}
                  </div>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && link.items && (
                  <div
                    className={cn(
                      'absolute left-0 mt-2 w-56 rounded-2xl bg-cream/95 backdrop-blur-sm shadow-lg py-2 transition-all origin-top-left card-shadow',
                      activeDropdown === link.dropdown
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    )}
                  >
                    {link.items.map((item) => (
                      <div
                        key={item.path}
                        className="block px-5 py-2 text-sm font-medium text-maroon hover:bg-apricot hover:text-maroon transition-colors cursor-pointer"
                        onClick={() => handleNavigation(item.path)}
                      >
                        {item.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-maroon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 z-50 bg-cream transform transition-transform ease-in-out duration-300',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-maroon">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-3 overflow-y-auto max-h-[85vh] pb-20">
          {navLinks.map((link) => (
            <div key={link.path} className="border-b border-apricot pb-2">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(link.dropdown!)}
                    className="flex items-center justify-between w-full text-lg font-medium text-maroon py-2"
                  >
                    {link.title}
                    <ChevronDown
                      className={cn('h-5 w-5 transition-transform', 
                        activeDropdown === link.dropdown ? 'rotate-180' : '')}
                    />
                  </button>
                  {activeDropdown === link.dropdown && (
                    <div className="ml-4 mt-1 space-y-1 mb-2">
                      {link.items!.map((item) => (
                        <div
                          key={item.path}
                          className="block py-2 text-maroon hover:text-gold transition-colors cursor-pointer"
                          onClick={() => handleNavigation(item.path)}
                        >
                          {item.title}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div
                  className="block text-lg font-medium text-maroon hover:text-gold transition-colors py-2 cursor-pointer"
                  onClick={() => handleNavigation(link.path)}
                >
                  {link.title}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};
