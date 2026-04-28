import { Target, CheckCircle, ArrowRight } from "phosphor-react";
import Layout from "@/components/Layout";
import { useScrollToTop } from "@/hooks/useScrollToSection";
import { useNavigate } from "react-router-dom";

const GoToMarketStrategy = () => {
  useScrollToTop();
  const navigate = useNavigate();
  
  const deliverables = [
    {
      title: "Opportunity Assessment",
      description: "Identify and size the most promising markets, segments, and customers."
    },
    {
      title: "Strategic Prioritization",
      description: "Focus resources on the highest-impact initiatives for maximum ROI."
    },
    {
      title: "Channel & Route-to-Market Design",
      description: "Determine the optimal mix of direct, indirect, and digital selling motions."
    },
    {
      title: "Positioning & Value Proposition Development",
      description: "Clarify what makes you different and why buyers should choose you."
    },
    {
      title: "Execution Roadmap",
      description: "Translate strategy into clear, actionable steps that drive measurable results."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Target size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary">Go-to-Market Strategy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Uncover and prioritize the best opportunities for growth
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Winning in today's market requires more than a solid offering—it demands a clear, data-driven path to customers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-8">
                  Our Go-to-Market Strategy service helps you identify where the biggest opportunities lie, determine the smartest ways to reach them, and align your teams behind a shared growth vision.
                </p>
                
                <p className="text-lg text-muted-foreground mb-12">
                  We combine deep market insight, competitive analysis, and customer intelligence to map out strategies that not only look good on paper but also work in the real world. Our process prioritizes opportunities based on market potential, investment requirements, and strategic fit—ensuring every move you make is targeted, measurable, and scalable.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-8">
                <div className="w-full rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/service-images/1.webp" 
                    alt="Go-to-Market Strategy visualization showing strategic planning and market analysis" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  Strategic planning and market analysis visualization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What we deliver</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {deliverables.map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">The result</h2>
            <p className="text-lg text-muted-foreground mb-8">
              A go-to-market blueprint that bridges strategic vision and execution—helping you accelerate revenue growth, strengthen your competitive position, and win in the markets that matter most.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Start Your Strategy
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GoToMarketStrategy;
