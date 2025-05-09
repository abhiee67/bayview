
import React, { ReactNode, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  fullPage?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, fullPage = false }) => {
  useEffect(() => {
    // Setup smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Cleanup
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  if (fullPage) {
    return (
      <div className="flex flex-col min-h-screen snap-y snap-mandatory overflow-y-auto">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen snap-y snap-mandatory overflow-y-auto">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
};
