import { Sword, TrendUp, Files, PuzzlePiece, ChartBar, Target } from "phosphor-react";

const ProblemStatement = () => {
  const challenges = [
    {
      title: "Mounting competition",
      Icon: Sword,
      description: "Markets are more crowded than ever"
    },
    {
      title: "Evolving customer expectations", 
      Icon: TrendUp,
      description: "Buyers demand more, faster, better"
    },
    {
      title: "Mountains of disconnected data",
      Icon: Files,
      description: "Information silos block clear insights"
    },
    {
      title: "Fragmented teams and siloed operations",
      Icon: PuzzlePiece,
      description: "Disconnected efforts dilute impact"
    },
    {
      title: "Relentless pressure for measurable accountability",
      Icon: ChartBar,
      description: "Every investment must show clear ROI"
    }
  ];

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary/20 rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-primary/20 -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Today's growth leaders face unprecedented complexity
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start text-left gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Mounting Competition</h4>
                      <p className="text-sm text-muted-foreground">Markets are more crowded than ever, making differentiation critical.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start text-left gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Evolving Customer Expectations</h4>
                      <p className="text-sm text-muted-foreground">Buyers demand more value, faster delivery, and better experiences.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start text-left gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Mountains of Disconnected Data</h4>
                      <p className="text-sm text-muted-foreground">Information silos prevent clear insights and smart decisions.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start text-left gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Fragmented Teams & Operations</h4>
                      <p className="text-sm text-muted-foreground">Disconnected efforts dilute impact and waste resources.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300 md:col-span-2">
                  <div className="flex items-start text-left gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Relentless Pressure for Accountability</h4>
                      <p className="text-sm text-muted-foreground">Every investment must show clear, measurable ROI with transparent reporting.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The path to market momentum isn't getting easier. To grow faster — and more profitably — 
                organizations must fully align teams, data, technology, processes, and programs… 
                without losing sight of strategic integrity.
              </p>
              <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
                <Target size={24} className="text-primary" />
                <p className="text-lg font-semibold text-primary">
                  That's where we come in.
                </p>
              </div>
            </div>
          </div>

          {/* Challenges Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {challenges.map((challenge, index) => (
              <div 
                key={index} 
                className="group relative bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Challenge number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <challenge.Icon size={32} className="text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {challenge.description}
                </p>
                
                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
              </div>
            ))}
            
            {/* Call to action card */}
            <div className="md:col-span-2 lg:col-span-1 bg-primary/5 border-2 border-dashed border-primary/30 rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <Target size={32} className="text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Ready for a solution?
              </h3>
              <p className="text-sm text-muted-foreground">
                Let's turn these challenges into your competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;