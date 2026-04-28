import { PaintBrush, CheckCircle, ArrowRight } from "phosphor-react";
import Layout from "@/components/Layout";
import { useScrollToTop } from "@/hooks/useScrollToSection";
import { useNavigate } from "react-router-dom";

const CreativeContent = () => {
  useScrollToTop();
  const navigate = useNavigate();
  
  const deliverables = [
    {
      title: "Campaign Creative Platforms",
      description: "Develop overarching creative concepts that resonate and unify messaging."
    },
    {
      title: "Design & Copywriting",
      description: "Produce striking visuals and persuasive content tailored to your audience."
    },
    {
      title: "Content Strategy & Marketing",
      description: "Plan and execute content programs that educate and engage."
    },
    {
      title: "Creative Production",
      description: "Manage end-to-end production of video, digital, and experiential assets."
    },
    {
      title: "Sales Enablement Support",
      description: "Equip sales teams with compelling content to close deals faster."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <PaintBrush size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary">Creative & Content</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Inspire action with captivating, customer-centric storytelling
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In today's crowded marketplace, standing out requires more than just great ideas — it demands creative work that connects deeply and drives results.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
I          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Our Creative & Content service combines strategic insight with bold imagination to produce compelling campaigns, content, and experiences that engage your audience and accelerate buying decisions.
              </p>
              
              <p className="text-lg text-muted-foreground mb-12">
                From concept development and copywriting to video production and experiential marketing, we craft assets that educate, inspire, and move prospects and customers along the buying journey. Rooted in data and aligned with your GTM strategy, our creative solutions amplify your message and build lasting brand loyalty.
              </p>
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
              Bold, differentiated creative and content that breaks through the clutter, captivates your audience, and drives measurable business growth.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Create with Impact
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreativeContent;
