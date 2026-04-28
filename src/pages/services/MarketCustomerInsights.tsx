import { Lightbulb, CheckCircle, ArrowRight } from "phosphor-react";
import Layout from "@/components/Layout";
import { useScrollToTop } from "@/hooks/useScrollToSection";
import { useNavigate } from "react-router-dom";

const MarketCustomerInsights = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const deliverables = [
    {
      title: "Market & Customer Research",
      description: "In-depth studies to identify demand drivers and emerging opportunities."
    },
    {
      title: "Competitive Intelligence",
      description: "Track and analyze competitor positioning, moves, and messaging."
    },
    {
      title: "Product & Pricing Analysis",
      description: "Understand value drivers to refine your offerings and optimize pricing models."
    },
    {
      title: "Messaging & Value Proposition Development",
      description: "Create compelling narratives that resonate with target buyers."
    },
    {
      title: "Customer Experience Strategy",
      description: "Map and improve touchpoints to increase engagement, loyalty, and advocacy."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Lightbulb size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary">Market & Customer Insights</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Turn intelligence into competitive advantage
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your best growth opportunities are hidden in plain sight—inside market trends, competitor behavior, and customer needs.
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
                  Our Market & Customer Insights service transforms raw data into clear, actionable intelligence that sharpens your competitive edge and drives smarter decision-making.
                </p>
                
                <p className="text-lg text-muted-foreground mb-12">
                  We combine research, analytics, and direct customer feedback to uncover unmet needs, emerging market segments, and shifts in buying behavior. These insights inform everything from product development and pricing to messaging and channel strategy—helping you focus your efforts where they will have the greatest impact.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-8">
                <div className="w-full rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/service-images/2.webp" 
                    alt="Market and Customer Insights dashboard showing customer data and market intelligence" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  Customer data and market intelligence dashboard
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
              A fact-based, market-tested foundation for growth—ensuring every marketing, sales, and product decision is backed by deep, relevant, and timely insights.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Unlock Market Intelligence
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketCustomerInsights;