import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToSection";

const Index = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="challenges">
        <ProblemStatement />
      </div>
      <Solution />
      <div id="services">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
