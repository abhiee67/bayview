
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { Button } from "../components/ui/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-cream py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-maroon">404</h1>
          <p className="text-xl md:text-2xl text-maroon/80 mb-8">Oops! The page you're looking for doesn't exist.</p>
          <Button href="/" size="lg">
            Return to Home
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
