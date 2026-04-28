import { useState } from "react";
import { Users, Funnel, X } from "phosphor-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToSection";
import { useNavigate } from "react-router-dom";

const Team = () => {
  useScrollToTop();
  const navigate = useNavigate();
  
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedMember, setSelectedMember] = useState(null);

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  const openMemberModal = (member) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  const teamMembers = [
    {
      name: "Sunjay Ramaswamy",
      role: "Chief Business Officer",
      department: "Leadership",
      image: "/team/15.webp",
      bio: "Brings strategic blend of commercial acumen, marketing expertise, and growth-focused leadership.",
      fullBio: "As Chief Business Officer at Revgrow UK, Sunjay Ramaswamy brings a strategic blend of commercial acumen, marketing expertise, and growth-focused leadership to the firm's mission of accelerating client success. With a proven track record in building high-performing teams and driving measurable business results, Sunjay leads Revgrow's business development, client partnerships, and market expansion strategies.\n\nSunjay's career spans over 22 years in the marketing and consulting sector, where he has worked with a diverse portfolio of clients ranging from ambitious start-ups to established market leaders. His approach combines data-driven insights with creative marketing solutions, ensuring clients not only grow but thrive in competitive markets.\n\nAt Revgrow, Sunjay is responsible for forging strategic alliances, shaping go-to-market strategies, and ensuring that every client engagement delivers tangible value. He believes in long-term relationships built on trust, transparency, and measurable outcomes — values that define Revgrow's reputation.\n\nWhen he's not spearheading growth initiatives, Sunjay is an advocate for innovation in marketing practices and enjoys mentoring emerging leaders in the industry. His philosophy is simple: sustainable growth comes from aligning great ideas with disciplined execution.",
      hasDetailedInfo: true
    },
    {
      name: "Emily Carrington",
      role: "Managing Director",
      department: "Leadership",
      image: "/team/1.webp",
      bio: "Leads with clear vision to help businesses unlock their full growth potential through strategic marketing.",
      fullBio: "As Managing Director of Revgrow UK, Emily Carrington leads the firm with a clear vision: to help businesses unlock their full growth potential through strategic marketing and customer-focused innovation. With a career rooted in both creative marketing strategy and commercial leadership, Emily has built a reputation for delivering results that matter — increased market share, stronger brand presence, and sustainable revenue growth.\n\nEmily's experience spans 28 years across marketing consultancy, brand strategy, and business transformation. She has worked with organisations of all sizes — from dynamic start-ups to global enterprises — guiding them through complex growth challenges and helping them seize new market opportunities.\n\nAt Revgrow, Emily oversees the firm's strategic direction, operational excellence, and client delivery standards. She is passionate about creating an environment where creativity and analytical thinking work hand-in-hand, ensuring that every client engagement is both inspired and measurable.\n\nBeyond her leadership role, Emily is a champion of empowering teams, fostering collaborative partnerships, and advocating for ethical, customer-centric marketing practices. Her leadership style is rooted in clarity, accountability, and a commitment to long-term success for both clients and the Revgrow team.",
      hasDetailedInfo: true
    },
    {
      name: "Jamal Shah", 
      role: "Strategy Director",
      department: "Leadership",
      image: "/team/2.webp",
      bio: "Architect behind innovative and results-driven growth strategies with sharp analytical mind.",
      fullBio: "As Strategy Director at Revgrow UK, Jamal Shah is the architect behind the firm's most innovative and results-driven growth strategies. With a sharp analytical mind and a passion for uncovering untapped market potential, Jamal helps clients navigate complex competitive landscapes and achieve measurable, lasting success.\n\nWith 18 years of experience in strategic consulting, marketing analytics, and business transformation, Jamal has partnered with businesses across sectors — from fast-growing disruptors to established industry leaders. His expertise lies in blending data-driven insights with creative, forward-thinking strategies that deliver both short-term wins and long-term growth.\n\nAt Revgrow, Jamal is responsible for shaping the strategic frameworks that guide client engagements. He works closely with leadership teams to identify opportunities, mitigate risks, and ensure that marketing efforts align seamlessly with overarching business goals.\n\nKnown for his collaborative style and clear, actionable thinking, Jamal is as comfortable in a boardroom discussion as he is in a hands-on workshop. He believes that the best strategies are those that can be executed effectively — turning great ideas into real-world impact.",
      hasDetailedInfo: true
    },
    {
      name: "Sophie Patel",
      role: "Head of Operations", 
      department: "Leadership",
      image: "/team/3.webp",
      bio: "Ensures ambitious growth strategies are backed by seamless execution and operational excellence.",
      fullBio: "As Head of Operations at Revgrow UK, Sophie Patel ensures the firm's ambitious growth strategies are backed by seamless execution and operational excellence. She is the driving force behind the systems, processes, and workflows that enable Revgrow to deliver consistently high-quality outcomes for its clients.\n\nWith 17 years of experience in operations management, project delivery, and organisational development, Sophie has worked across diverse industries — from marketing and consultancy to technology and professional services. Her expertise lies in building operational structures that support innovation while maintaining efficiency, scalability, and compliance.\n\nAt Revgrow, Sophie oversees day-to-day operations, resource planning, and project management. She works closely with the leadership team to ensure the firm's internal capabilities align with client needs, fostering a culture of accountability, collaboration, and continuous improvement.\n\nKnown for her meticulous attention to detail and solution-focused mindset, Sophie is passionate about enabling teams to perform at their best. Her philosophy is simple: great ideas succeed when they are executed with precision, discipline, and agility.",
      hasDetailedInfo: true
    },
    {
      name: "Liam O'Connor",
      role: "Creative Director",
      department: "Creative",
      image: "/team/4.webp",
      bio: "Leads creative vision blending bold ideas with strategic clarity to craft campaigns that resonate.",
      fullBio: "As Creative Director at Revgrow UK, Liam O'Connor leads the agency's creative vision — blending bold ideas with strategic clarity to craft campaigns that resonate, engage, and convert. With a deep understanding of branding, storytelling, and user experience, Liam ensures every piece of creative work not only looks exceptional but drives real business results.\n\nOver the course of 21 years, Liam has developed award-winning creative strategies for a wide range of clients, from ambitious start-ups to global brands. His background spans design, digital marketing, content development, and integrated campaign leadership, making him a versatile and visionary creative partner.\n\nAt Revgrow, Liam oversees all creative output, guiding teams in the development of branding, messaging, content, and digital assets that align tightly with strategic goals. He collaborates closely with strategy and operations to ensure that creative concepts are grounded in insight and executed with consistency.\n\nPassionate about innovation and detail in equal measure, Liam believes that powerful creative comes from deep audience understanding, fearless thinking, and seamless execution. He's committed to helping clients stand out — not just visually, but meaningfully.",
      hasDetailedInfo: true
    },
    {
      name: "Chioma Adeyemi",
      role: "Senior Copywriter",
      department: "Creative",
      image: "/team/5.webp",
      bio: "The voice behind compelling messaging that transforms complex ideas into clear, engaging narratives.",
      fullBio: "As Senior Copywriter at Revgrow UK, Chioma Adeyemi is the voice behind the firm's most compelling messaging — transforming complex ideas into clear, engaging narratives that connect with audiences and drive action. Her writing blends creativity with precision, ensuring every word works hard to achieve strategic goals.\n\nWith 18 years of experience in copywriting, brand storytelling, and content strategy, Chioma has crafted messaging for clients across industries including technology, professional services, and consumer brands. She excels at creating tone-of-voice frameworks, persuasive campaign copy, and long-form content that strengthens brand identity and builds trust.\n\nAt Revgrow, Chioma works closely with the creative and strategy teams to ensure that messaging aligns seamlessly with brand positioning and marketing objectives. She believes that great copy is more than clever words — it's a bridge between a brand's promise and the audience's needs.\n\nPassionate about the power of language, Chioma is dedicated to crafting content that inspires, informs, and influences. Her philosophy: the right words, in the right place, at the right time, can transform how people think and feel about a brand.",
      hasDetailedInfo: true
    },
    {
      name: "Tomás García",
      role: "Graphic Designer",
      department: "Creative",
      image: "/team/6.webp",
      bio: "Brings visual concepts to life, translating brand strategies into impactful designs that capture attention.",
      fullBio: "As Graphic Designer at Revgrow UK, Tomás García brings visual concepts to life — translating brand strategies into impactful designs that capture attention and communicate clearly. His work balances creativity with functionality, ensuring every design element supports both aesthetic appeal and strategic objectives.\n\nWith 7 years of experience in brand identity, digital design, and visual storytelling, Tomás has collaborated with clients across sectors, from innovative start-ups to established brands. He has a keen eye for detail and a passion for creating visual systems that are cohesive, memorable, and adaptable across platforms.\n\nAt Revgrow, Tomás works closely with the creative and marketing teams to develop brand assets, campaign visuals, and digital materials that align seamlessly with each client's identity and goals. Whether designing for print, web, or social media, he ensures every project reflects both creativity and purpose.\n\nDriven by a belief that great design is equal parts artistry and problem-solving, Tomás is dedicated to producing work that not only looks exceptional but delivers results. His guiding principle: design should not just be seen — it should be remembered.",
      hasDetailedInfo: true
    },
    {
      name: "Aisha Khan",
      role: "Social Media Manager",
      department: "Digital Marketing",
      image: "/team/7.webp",
      bio: "Drives digital presence across platforms, creating content that sparks conversation and builds communities.",
      fullBio: "As Social Media Manager at Revgrow UK, Aisha Khan drives the firm's and its clients' presence across digital platforms — creating content that sparks conversation, builds communities, and amplifies brand visibility. She combines creativity with analytics, ensuring every post, story, and campaign not only looks great but delivers measurable engagement.\n\nWith 6 years of experience in social media strategy, content creation, and community management, Aisha has worked with brands in sectors ranging from lifestyle and consumer goods to technology and professional services. Her expertise spans platform-specific strategies, paid social campaigns, and influencer collaborations.\n\nAt Revgrow, Aisha is responsible for developing and executing social media strategies that align with broader marketing objectives. She keeps a close eye on trends, audience insights, and platform developments to keep content fresh, relevant, and impactful.\n\nPassionate about storytelling in the digital age, Aisha believes social media is more than a broadcast channel — it's a space for genuine connection. Her approach blends authenticity with strategic intent, helping brands stand out in an ever-changing digital landscape.",
      hasDetailedInfo: true
    },
    {
      name: "Ben Whittaker",
      role: "SEO Specialist",
      department: "Digital Marketing",
      image: "/team/8.webp",
      bio: "Ensures brands get discovered by the right audience at the right time through strategic SEO.",
      fullBio: "As SEO Specialist at Revgrow UK, Ben Whittaker ensures brands get discovered by the right audience at the right time. He combines technical expertise with a deep understanding of search behaviour to help clients achieve higher rankings, stronger visibility, and sustainable organic growth.\n\nWith 11 years of experience in search engine optimisation, content optimisation, and analytics, Ben has worked with businesses across industries — from niche start-ups to large-scale enterprises. His approach blends meticulous technical audits, data-driven keyword strategies, and on-page/off-page optimisation to deliver measurable results.\n\nAt Revgrow, Ben works closely with content creators, developers, and strategists to ensure SEO best practices are built into every campaign. He keeps pace with evolving algorithms and industry trends, making sure clients not only reach the top of search results but stay there.\n\nPassionate about the science and strategy behind discoverability, Ben believes SEO success comes from consistency, adaptability, and a relentless focus on user intent. His mission: turn search into a growth engine for every client.",
      hasDetailedInfo: true
    },
    {
      name: "Lucie Dubois",
      role: "PPC Campaign Manager",
      department: "Digital Marketing",
      image: "/team/9.webp",
      bio: "Crafts high-performing paid advertising campaigns that deliver measurable returns and business growth.",
      fullBio: "As PPC Campaign Manager at Revgrow UK, Lucie Dubois crafts high-performing paid advertising campaigns that deliver measurable returns. She combines strategic planning with hands-on optimisation, ensuring every click, impression, and conversion drives meaningful business growth.\n\nWith 16 years of experience in pay-per-click management, search advertising, and performance marketing, Lucie has managed campaigns for brands across diverse industries — from fast-paced e-commerce businesses to B2B service providers. Her expertise spans Google Ads, Bing Ads, and paid social platforms, where she blends creative ad copy with rigorous data analysis.\n\nAt Revgrow, Lucie is responsible for developing, launching, and refining PPC strategies that align closely with each client's objectives. She continuously monitors performance metrics, adjusting campaigns to maximise ROI while maintaining budget efficiency.\n\nPassionate about the art and science of paid media, Lucie believes successful campaigns are the result of precise targeting, compelling messaging, and ongoing optimisation. Her ultimate goal: turn advertising spend into sustainable growth for every client.",
      hasDetailedInfo: true
    },
    {
      name: "Rachel Greenfield",
      role: "Account Director",
      department: "Client Services",
      image: "/team/10.webp",
      bio: "Brings strategic mind and passion for client success with over a decade of account management experience.",
      fullBio: "With a sharp strategic mind and a passion for client success, Rachel Greenfield brings over a decade of experience in managing high-value accounts and building long-term partnerships. As Account Director, she leads with a balance of creativity and data-driven insight, ensuring every campaign delivers measurable impact and exceeds client expectations.\n\nRachel has worked across industries — from technology and finance to retail and lifestyle brands — developing tailored strategies that resonate with audiences and drive sustainable growth. Known for her collaborative approach, she works seamlessly with creative, strategy, and delivery teams to align business objectives with powerful marketing solutions.\n\nHer philosophy is simple: listen deeply, think strategically, act decisively. Rachel's clients appreciate her ability to translate complex challenges into actionable plans that move the needle.\n\nWhen she's not championing client projects, Rachel enjoys hiking, exploring new cuisines, and volunteering with local community initiatives.",
      hasDetailedInfo: true
    },
    {
      name: "Amir Rahman",
      role: "Client Services Manager",
      department: "Client Services",
      image: "/team/11.webp",
      bio: "Dedicated to building strong, trusted relationships ensuring every client feels supported and valued.",
      fullBio: "Amir Rahman is dedicated to building strong, trusted relationships and ensuring every client feels supported, understood, and valued. As Client Services Manager, he serves as the bridge between clients and the internal team, translating business needs into clear strategies and seamless execution.\n\nWith a background in customer success and account management, Amir brings a calm, solutions-focused approach to every challenge. His ability to listen attentively, communicate clearly, and anticipate needs helps clients achieve their goals while fostering long-term partnerships.\n\nAmir thrives in fast-paced, collaborative environments, guiding projects from initial brief to successful delivery. His commitment to excellence, paired with a personable and approachable style, ensures every client experience is smooth, transparent, and rewarding.\n\nOutside of work, Amir enjoys photography, travel, and exploring new coffee spots in the city.",
      hasDetailedInfo: true
    },
    {
      name: "Jessie Lin",
      role: "Junior Account Executive",
      department: "Client Services",
      image: "/team/12.webp",
      bio: "Brings fresh energy, attention to detail, and passion for helping clients succeed in account operations.",
      fullBio: "As Junior Account Executive, Jessie Lin brings fresh energy, attention to detail, and a passion for helping clients succeed. She supports the account team in day-to-day operations, from coordinating projects and tracking deliverables to ensuring communications are clear and deadlines are met.\n\nWith a background in marketing and communications, Jessie combines creative thinking with strong organizational skills. She thrives on learning from senior colleagues while contributing her own ideas and insights to drive results for clients.\n\nJessie's collaborative spirit and proactive approach make her an invaluable team member who keeps projects moving smoothly and clients informed every step of the way.\n\nOutside the office, Jessie enjoys graphic design, trying new recipes, and discovering hidden gems in the city's food scene.",
      hasDetailedInfo: true
    },
    {
      name: "Marcus Taylor",
      role: "Head of Data & Insights",
      department: "Analytics",
      image: "/team/13.webp",
      bio: "Turns complex data into clear, actionable insights that drive smarter business decisions.",
      fullBio: "Marcus Taylor turns complex data into clear, actionable insights that drive smarter business decisions. As Head of Data & Insights, he leads the team in uncovering trends, measuring performance, and delivering strategic recommendations that help clients stay ahead in competitive markets.\n\nWith extensive experience in analytics, market research, and business intelligence, Marcus is known for blending rigorous quantitative analysis with a deep understanding of customer behavior. His work empowers clients to not only understand what's happening in their business, but why — and what to do next.\n\nMarcus thrives on solving challenging problems, whether it's optimizing campaign performance, identifying new growth opportunities, or streamlining reporting processes for greater clarity.\n\nOutside of work, Marcus enjoys cycling, reading about behavioral economics, and experimenting with new ways to visualize data.",
      hasDetailedInfo: true
    },
    {
      name: "Nina Petrov",
      role: "Marketing Analyst",
      department: "Analytics",
      image: "/team/14.webp",
      bio: "Brings keen eye for detail and passion for uncovering stories hidden within data and insights.",
      fullBio: "Nina Petrov brings a keen eye for detail and a passion for uncovering the stories hidden within data. As Marketing Analyst, she specializes in turning campaign metrics, market research, and audience insights into clear, actionable recommendations that help shape smarter marketing strategies.\n\nWith a background in digital marketing and analytics, Nina is skilled at connecting the dots between performance data and business objectives. She works closely with both creative and strategy teams to ensure that every decision is grounded in evidence and aligned with client goals.\n\nKnown for her curiosity and precision, Nina thrives on identifying patterns, testing hypotheses, and finding opportunities for optimization. Her work ensures that campaigns not only look good but perform at their very best.\n\nOutside of work, Nina enjoys photography, hiking, and experimenting with homemade bread recipes.",
      hasDetailedInfo: true
    }
  ];

  const departments = ["All", "Leadership", "Creative", "Digital Marketing", "Client Services", "Analytics"];

  const filteredMembers = selectedDepartment === "All" 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Users size={20} className="text-primary" />
                <span className="text-sm font-medium text-primary">Our Team</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Meet the Growth Experts
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our diverse team combines strategic thinking, creative excellence, and execution expertise to drive measurable results for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-card/50">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Funnel size={20} />
                  <span className="font-medium">Filter by department:</span>
                </div>
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedDepartment === dept
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {filteredMembers.map((member, index) => (
                  <div 
                    key={index} 
                    onClick={() => openMemberModal(member)}
                    className="group bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300 flex-shrink-0">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">{member.name}</h3>
                          <p className="text-primary font-medium mb-1 text-xs sm:text-sm">{member.role}</p>
                          <p className="text-xs text-muted-foreground">{member.department}</p>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                      <div className="mt-3 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to read full biography →
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                Ready to work with our team?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Let's discuss how our expertise can accelerate your growth initiatives and drive measurable results.
              </p>
              <button 
                onClick={handleGetInTouch}
                className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors text-base min-h-[48px] w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 pr-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">{selectedMember.name}</h2>
                  <p className="text-primary font-medium text-sm sm:text-base">{selectedMember.role}</p>
                  {selectedMember.location && (
                    <p className="text-xs sm:text-sm text-muted-foreground">{selectedMember.location}</p>
                  )}
                </div>
                <button
                  onClick={closeMemberModal}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 -mr-2 -mt-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="prose prose-sm text-foreground max-w-none">
                <div className="whitespace-pre-line text-xs sm:text-sm leading-relaxed">
                  {selectedMember.fullBio}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
