import { Target, TrendUp, ChartBar, Users, Lightbulb, Megaphone, PaintBrush, Activity, ArrowRight } from "phosphor-react";
import ServiceCard from "./ServiceCard";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const handleScheduleConsultation = () => {
    navigate('/contact');
  };

  const services = [
    {
      Icon: Target,
      title: "Go-to-Market Strategy",
      subtitle: "Uncover and prioritize the best opportunities for growth",
      description: "We combine market insight with data-driven analysis to deliver actionable GTM strategies that accelerate revenue and sharpen your competitive edge.",
      slug: "go-to-market-strategy",
      features: [
        "Opportunity Assessment",
        "Strategic Prioritization", 
        "Channel & Route-to-Market Design",
        "Positioning & Value Proposition Development",
        "Execution Roadmap"
      ]
    },
    {
      Icon: Lightbulb,
      title: "Market & Customer Insights",
      subtitle: "Turn intelligence into competitive advantage", 
      description: "Your best growth opportunities are hidden in plain sight—inside market trends, competitor behavior, and customer needs. Our Market & Customer Insights service transforms raw data into clear, actionable intelligence.",
      slug: "market-customer-insights",
      features: [
        "Market & Customer Research",
        "Competitive Intelligence",
        "Product & Pricing Analysis",
        "Messaging & Value Proposition Development", 
        "Customer Experience Strategy"
      ]
    },
    {
      Icon: TrendUp,
      title: "Demand Generation & ABM",
      subtitle: "Blend demand gen and account-based plays for maximum impact",
      description: "We craft targeted, multi-channel campaigns that connect with the right buyers at the right time.",
      slug: "demand-generation-abm",
      features: [
        "Demand & ABM Strategy",
        "Target Account Selection & Prioritization",
        "Data Health & Enrichment",
        "Campaign Planning & Orchestration",
        "Lead Management & Scoring",
        "Measurement & Optimization"
      ]
    },
    {
      Icon: ChartBar,
      title: "Campaign & Media Management",
      subtitle: "Get your message in front of the right audience—every time",
      description: "We plan, buy, and manage media to maximize reach, relevance, and return.",
      slug: "campaign-media-management",
      features: [
        "Media Planning & Buying",
        "Campaign Activation & Management",
        "ABM Platform Management",
        "Audience Engagement Analytics",
        "Performance Measurement & Optimization"
      ]
    },
    {
      Icon: PaintBrush,
      title: "Creative & Content",
      subtitle: "Inspire action with ideas that stick",
      description: "From creative campaigns to content strategies, we design experiences that ignite curiosity and accelerate the buyer journey.",
      slug: "creative-content",
      features: [
        "Campaign Creative Platforms",
        "Design & Copywriting",
        "Content Strategy & Marketing",
        "Creative Production",
        "Sales Enablement Support"
      ]
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Shape
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategy to execution, we deliver the expertise and systems you need to accelerate growth and drive measurable results.
            </p>
          </div>

          {/* Services Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                {/* Card Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.Icon size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-muted-foreground/40">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-primary">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <p className="text-xs text-primary font-medium">
                      +{service.features.length - 3} more capabilities
                    </p>
                  )}
                </div>
                
                {/* Card Footer */}
                <div className="pt-4 border-t border-border/50">
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    <span>Learn more</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-background border border-border rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to accelerate your growth?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Let's discuss how our proven methodologies can drive measurable results for your business.
              </p>
              <button 
                onClick={handleScheduleConsultation}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;