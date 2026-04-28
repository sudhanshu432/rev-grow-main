import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigateToSection } from "@/hooks/useScrollToSection";

const Hero = () => {
  const navigateToSection = useNavigateToSection();

  const handleLearnApproach = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToSection('services');
  };

  return (
    <section className="relative bg-background py-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.3)' }}
        >
          <source src="/background.webm" type="video/webm" />
          {/* Fallback for browsers that don't support webm */}
          Your browser does not support the video tag.
        </video>
        
        {/* Primary overlay for text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Gradient overlay for enhanced depth and focus */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.6) 100%)`
          }}
        ></div>
        
        {/* Additional edge fade for seamless integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            Growth Strategy, Meet Execution
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto px-2 drop-shadow-md font-light">
            We're RevGrow — your go-to-market advisory partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 min-h-[48px]">
                Start Growing Today
              </Button>
            </Link>
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 min-h-[48px]"
              onClick={handleLearnApproach}
            >
              Learn Our Approach
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;