import { Users, LinkedinLogo, EnvelopeSimple } from "phosphor-react";

const Team = () => {
  const leadership = [
    {
      name: "Sunjay Ramaswamy",
      role: "Chief Business Officer",
      department: "Leadership & Strategy"
    },
    {
      name: "Emily Carrington",
      role: "Managing Director",
      department: "Leadership & Strategy"
    },
    {
      name: "Jamal Shah", 
      role: "Strategy Director",
      department: "Leadership & Strategy"
    },
    {
      name: "Sophie Patel",
      role: "Head of Operations", 
      department: "Leadership & Strategy"
    }
  ];

  const departments = [
    {
      name: "Creative Team",
      members: [
        { name: "Liam O'Connor", role: "Creative Director" },
        { name: "Chioma Adeyemi", role: "Senior Copywriter" },
        { name: "Tomás García", role: "Graphic Designer" }
      ]
    },
    {
      name: "Digital Marketing",
      members: [
        { name: "Aisha Khan", role: "Social Media Manager" },
        { name: "Ben Whittaker", role: "SEO Specialist" },
        { name: "Lucie Dubois", role: "PPC Campaign Manager" }
      ]
    },
    {
      name: "Client Services", 
      members: [
        { name: "Rachel Greenfield", role: "Account Director" },
        { name: "Amir Rahman", role: "Client Services Manager" },
        { name: "Jessie Lin", role: "Junior Account Executive" }
      ]
    },
    {
      name: "Analytics & Research",
      members: [
        { name: "Marcus Taylor", role: "Head of Data & Insights" },
        { name: "Nina Petrov", role: "Marketing Analyst" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Users size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary">Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet the Growth Experts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team combines strategic thinking, creative excellence, and execution expertise to drive measurable results for your business.
            </p>
          </div>

          {/* Leadership Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Leadership Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((member, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20 flex-shrink-0">
                      <Users size={16} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1">{member.name}</h4>
                      <p className="text-primary font-medium mb-1 text-xs sm:text-sm">{member.role}</p>
                      <p className="text-xs text-muted-foreground">{member.department}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <LinkedinLogo size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    <EnvelopeSimple size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Departments Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {dept.name}
                </h4>
                <div className="space-y-3">
                  {dept.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{member.name}</span>
                      <span className="text-sm text-muted-foreground">{member.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to work with our team?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how our expertise can accelerate your growth initiatives and drive measurable results.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;