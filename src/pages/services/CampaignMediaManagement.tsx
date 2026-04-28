import { ChartBar, CheckCircle, ArrowRight } from "phosphor-react";
import Layout from "@/components/Layout";
import { useScrollToTop } from "@/hooks/useScrollToSection";
import { useNavigate } from "react-router-dom";

const CampaignMediaManagement = () => {
  useScrollToTop();
  const navigate = useNavigate();
  
  const deliverables = [
    {
      title: "Media Planning & Buying",
      description: "Develop and execute media plans optimized for reach, frequency, and ROI."
    },
    {
      title: "Campaign Activation & Management",
      description: "Coordinate and manage multi-channel campaigns for seamless delivery."
    },
    {
      title: "ABM Platform Management",
      description: "Manage platforms that power account-based marketing campaigns."
    },
    {
      title: "Audience Engagement Analytics",
      description: "Track how target audiences interact with your campaigns."
    },
    {
      title: "Performance Measurement & Optimization",
      description: "Continuously analyze data to improve media effectiveness and efficiency."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <ChartBar size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary">Campaign & Media Management</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Maximize reach and impact with smart media strategies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A great message and creative won't succeed without a sound media plan behind it. Our Campaign & Media Management service ensures your marketing efforts hit the right audiences, at the right time, through the right channels—delivering measurable returns on your investment.
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
                  We leverage deep expertise across paid search, social, programmatic, content syndication, trade, traditional, and out-of-home media to build tailored media strategies that amplify your campaigns and maximize engagement.
                </p>
                
                <p className="text-lg text-muted-foreground mb-12">
                  From media planning and buying to real-time optimization and analytics, we handle every aspect of execution with precision and focus.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-8">
                <div className="w-full rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/service-images/4.webp" 
                    alt="Campaign and Media Management dashboard showing analytics and optimization interface" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  Campaign analytics and media optimization interface
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
              Media campaigns that cut through the noise, engage your ideal buyers, and deliver strong, measurable returns on every marketing dollar spent.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Optimize Your Media
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CampaignMediaManagement;
