
import React, { ReactNode, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
  fullPage?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, fullPage = false }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Setup smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll to top on page navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return () => {
      // Cleanup
      document.documentElement.style.scrollBehavior = '';
    };
  }, [location.pathname]); // This dependency will trigger the effect on route changes
  
  if (fullPage) {
    return (
      <div className="flex flex-col min-h-screen snap-y snap-mandatory overflow-y-auto">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[var(--navbar-height)]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
