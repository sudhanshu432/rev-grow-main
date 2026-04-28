import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/revgrow.png" 
                alt="RevGrow Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6 max-w-md">
              Your go-to-market advisory partner. We bridge the gap between big-picture strategy 
              and day-to-day execution, ensuring your growth initiatives deliver real, lasting impact.
            </p>
            <Link to="/contact">
              <Button variant="secondary" className="bg-primary-foreground text-foreground hover:bg-secondary">
                Get Started Today
              </Button>
            </Link>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <Link to="/services/go-to-market-strategy" className="hover:text-primary transition-colors">
                  Go-to-Market Strategy
                </Link>
              </li>
              <li>
                <Link to="/services/market-customer-insights" className="hover:text-primary transition-colors">
                  Market & Customer Insights
                </Link>
              </li>
              <li>
                <Link to="/services/demand-generation-abm" className="hover:text-primary transition-colors">
                  Demand Generation & ABM
                </Link>
              </li>
              <li>
                <Link to="/services/campaign-media-management" className="hover:text-primary transition-colors">
                  Campaign & Media Management
                </Link>
              </li>
              <li>
                <Link to="/services/creative-content" className="hover:text-primary transition-colors">
                  Creative & Content
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 mt-8">Legal</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-90 mb-4 md:mb-0">
            © 2025 RevGrow. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm opacity-90">
            <span>Built for growth leaders worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;