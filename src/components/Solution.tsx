import { Lightning, ArrowRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const Solution = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Solution Statement */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Lightning size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
              RevGrow bridges the gap between big-picture strategy and day-to-day execution, 
              ensuring your growth initiatives deliver real, lasting impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              At RevGrow, we connect growth strategy with flawless execution—helping you navigate 
              market complexity and turn potential into measurable performance.
            </p>
          </div>

          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lightning size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Shape</h3>
              <p className="text-muted-foreground mb-4">
                We help you navigate market complexity and identify the highest-impact opportunities for growth.
              </p>
              <button 
                onClick={() => {
                  const challengesElement = document.getElementById('challenges');
                  if (challengesElement) {
                    challengesElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <ArrowRight size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Execute</h3>
              <p className="text-muted-foreground mb-4">
                Turn potential into measurable performance with aligned teams, processes, and technology.
              </p>
              <button 
                onClick={() => {
                  const servicesElement = document.getElementById('services');
                  if (servicesElement) {
                    servicesElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-4 sm:p-6 md:p-8 border border-primary/20">
            <p className="text-base sm:text-lg text-foreground font-medium mb-4 sm:mb-6">
              RevGrow bridges the gap between big-picture strategy and day-to-day execution, 
              ensuring your growth initiatives deliver real, lasting impact.
            </p>
            <button 
              onClick={handleGetStarted}
              className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors text-base min-h-[48px] w-full sm:w-auto"
            >
              Start Your Growth Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;