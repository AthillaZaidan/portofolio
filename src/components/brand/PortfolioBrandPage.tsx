import { AboutSection } from "./AboutSection";
import { AchievementSection } from "./AchievementSection";
import { BrandNav } from "./BrandNav";
import { ContactSection } from "./ContactSection";
import { DomainSection } from "./DomainSection";
import { ExperienceSection } from "./ExperienceSection";
import { HeroSection } from "./HeroSection";
import { OpeningLoader } from "./OpeningLoader";
import { WorksSection } from "./WorksSection";

export function PortfolioBrandPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#171717] selection:bg-[#174fff] selection:text-white">
      <OpeningLoader />
      <BrandNav />
      <HeroSection />
      <AboutSection />
      <DomainSection />
      <WorksSection />
      <ExperienceSection />
      <AchievementSection />
      <ContactSection />
    </main>
  );
}
