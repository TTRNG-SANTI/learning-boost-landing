import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import ServicesSection from "@/components/ServicesSection";
import WhyThisWorks from "@/components/WhyThisWorks";
import ProgressTracking from "@/components/ProgressTracking";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhoIsThisFor />
      <ServicesSection />
      <WhyThisWorks />
      <ProgressTracking />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
