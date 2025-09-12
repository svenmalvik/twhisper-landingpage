import { HeroSectionTerminal } from "@/components/HeroSectionTerminal";
import { FeatureCards } from "@/components/FeatureCards";
import { PricingSection } from "@/components/PricingSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSectionTerminal />
      <FeatureCards />
      <UseCasesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
