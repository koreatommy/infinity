import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import KeyFeaturesSection from "@/components/landing/KeyFeaturesSection";
import ImpactSection from "@/components/landing/ImpactSection";
import AudienceSection from "@/components/landing/AudienceSection";
import OnboardingSection from "@/components/landing/OnboardingSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <KeyFeaturesSection />
        <ImpactSection />
        <AudienceSection />
        <OnboardingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
