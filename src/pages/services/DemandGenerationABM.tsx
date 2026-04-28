import { TrendUp, CheckCircle, ArrowRight } from "phosphor-react";
import Layout from "@/components/Layout";
import { useScrollToTop } from "@/hooks/useScrollToSection";
import { useNavigate } from "react-router-dom";

const DemandGenerationABM = () => {
  useScrollToTop();
  const navigate = useNavigate();
  
  const deliverables = [
    {
      title: "Demand & ABM Strategy",
      description: "Define audience segments, target accounts, and messaging frameworks."
    },
    {
      title: "Target Account Selection & Prioritization",
      description: "Identify high-value accounts with the greatest growth potential."
    },
    {
      title: "Data Health & Enrichment",
      description: "Cleanse and enhance data to improve targeting accuracy."
    },
    {
      title: "Campaign Planning & Orchestration",
      description: "Design multi-channel, multi-touch campaigns that engage and nurture prospects."
    },
    {
      title: "Lead Management & Scoring",
      description: "Implement systems to qualify, prioritize, and accelerate leads through the funnel."
    },
    {
      title: "Measurement & Optimization",
      description: "Track campaign performance and optimize for maximum ROI."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <TrendUp size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary">Demand Generation & ABM</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Fuel growth with a coordinated demand and account-focused approach
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driving pipeline and revenue requires more than isolated campaigns—it demands a cohesive system that blends broad-based demand generation with precision-targeted account-based marketing.
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
                  Our Demand Generation & ABM service delivers integrated strategies that engage the right buyers, at the right time, through the right channels.
                </p>
                
                <p className="text-lg text-muted-foreground mb-12">
                  We combine strategic targeting, creative campaign design, and performance measurement to build scalable programs that accelerate engagement and conversion across the buyer journey. Whether it's 1:Market programs or 1:1 ABM plays, we ensure your investments generate real business impact.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-8">
                <div className="w-full rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/service-images/3.webp" 
                    alt="Demand Generation and ABM strategy flow diagram showing integrated campaign approach" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  ABM strategy and demand generation flow diagram
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
              A unified demand and ABM engine that drives pipeline velocity, increases conversion rates, and delivers predictable, scalable revenue growth.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Start Generating Demand
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DemandGenerationABM;
