import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Custom hook to scroll to top of page on route change
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

// Custom hook to scroll to a specific section
export const useScrollToSection = (sectionId: string) => {
  useEffect(() => {
    // Check if we're on the home page
    if (window.location.pathname === '/' || window.location.pathname === '/#services') {
      // Scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  }, [sectionId]);
};

// Smart navigation hook for cross-page section navigation
export const useNavigateToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // Already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash, then handle scrolling
      navigate('/', { replace: false });
      
      // Use a more robust approach to ensure the page has loaded
      const checkAndScroll = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If element not found, try again after a short delay
          setTimeout(checkAndScroll, 50);
        }
      };
      
      // Start checking after a short delay to allow for navigation
      setTimeout(checkAndScroll, 200);
    }
  };

  return navigateToSection;
};
