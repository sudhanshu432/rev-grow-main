import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigateToSection } from "@/hooks/useScrollToSection";
import { useState } from "react";
import { List, X } from "phosphor-react";

const Header = () => {
  const navigateToSection = useNavigateToSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToSection('services');
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-foreground">
            <img 
              src="/revgrow.png" 
              alt="RevGrow Logo" 
              className="h-8 w-auto sm:h-10"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={handleServicesClick}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </button>
            <Link to="/team" className="text-foreground hover:text-primary transition-colors">
              Team
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact">
              <Button variant="default" className="ml-4">
                Get Started
              </Button>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="outline" 
            size="sm"
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={20} /> : <List size={20} />}
          </Button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border backdrop-blur-sm bg-card/95 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={handleServicesClick}
                className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-lg"
              >
                Services
              </button>
              <Link 
                to="/team" 
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-lg"
                onClick={closeMobileMenu}
              >
                Team
              </Link>
              <Link 
                to="/about" 
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-lg"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-lg"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              <div className="pt-2">
                <Link to="/contact" onClick={closeMobileMenu}>
                  <Button variant="default" className="w-full py-3 text-base">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
