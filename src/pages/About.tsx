import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToSection";

const About = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-background py-20 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          ></div>
          {/* Progressive fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-background/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/10 to-background/60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 sm:mb-6">
              <Link to="/" className="text-primary hover:underline inline-flex items-center gap-2 text-sm sm:text-base">
                ← Back to Home
              </Link>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              About RevGrow
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-2">
              We're your go-to-market advisory partner, bridging the gap between strategic vision and operational excellence to drive sustainable growth.
            </p>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="prose prose-lg text-foreground max-w-none">
            <p className="mb-6">
              At RevGrow, we specialize in helping growth-stage companies navigate the complexities of go-to-market strategy and execution. 
              Our team of seasoned executives brings decades of experience from leading technology companies, where they've successfully 
              scaled organizations from startup to market leader.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Our Mission</h2>
            <p className="mb-6">
              We exist to bridge the gap between strategic vision and operational excellence. Too often, companies have brilliant 
              strategies that fail in execution, or efficient operations that lack strategic direction. RevGrow connects these 
              critical elements to drive sustainable growth.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Our Approach</h2>
            <p className="mb-6">
              Our methodology combines deep industry expertise with data-driven insights and practical implementation frameworks. 
              We don't just advise—we partner with you to ensure our strategies translate into measurable business outcomes.
            </p>
            
            <div className="bg-card border border-border rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">The RevGrow Difference</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Practitioner-Led:</strong> Our team includes former executives from companies like Salesforce, Adobe, and Microsoft</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Outcome-Focused:</strong> We measure success by the results we help you achieve, not hours billed</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Flexible Engagement:</strong> From strategic advisory to full implementation, we adapt to your needs</span>
                </li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Integrity</h3>
                <p>We believe in transparent, honest partnerships built on trust.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Excellence</h3>
                <p>We hold ourselves to the highest standards in everything we do.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Innovation</h3>
                <p>We constantly evolve our methods to stay ahead of market changes.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Impact</h3>
                <p>We focus on results that matter to your business and customers.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-6">
                  Let's Discuss Your Growth Strategy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
