import { DemoModalProvider } from "@/src/context/DemoModalContext";
import { DemoModal } from "@/src/components/ui/DemoModal";
import { Navbar } from "@/src/components/sections/Navbar";
import { HeroSection } from "@/src/components/sections/HeroSection";
import { TrustBar } from "@/src/components/sections/TrustBar";
import { ReplacementSection } from "@/src/components/sections/ReplacementSection";
import { InteractiveShowcase } from "@/src/components/sections/InteractiveShowcase";
import { MetricsSection } from "@/src/components/sections/MetricsSection";
import { TestimonialsSection } from "@/src/components/sections/TestimonialsSection";
import { PricingSection } from "@/src/components/sections/PricingSection";
import { FAQSection } from "@/src/components/sections/FAQSection";
import { CTASection } from "@/src/components/sections/CTASection";
import { Footer } from "@/src/components/sections/Footer";

export default function Home() {
  return (
    <DemoModalProvider>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ReplacementSection />
        <InteractiveShowcase />
        <MetricsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      {/* Global Demo Modal — rendered at root so it overlays everything */}
      <DemoModal />
    </DemoModalProvider>
  );
}
