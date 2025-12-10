// client/src/pages/Home.tsx

import { HeroSection } from "@/components/home/HeroSection";
import { FactsSection } from "@/components/home/FactsSection";
import { OurStorySection } from "@/components/home/OurStorySection";
import { VisionMissionSection } from "@/components/home/VisionMissionSection";
import { CoreValuesStrip } from "@/components/home/CoreValuesStrip";
import { ParentPartnershipSection } from "@/components/home/ParentPartnershipSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <HeroSection />
      <FactsSection />
      <OurStorySection />
      <VisionMissionSection />
      <CoreValuesStrip />
      <ParentPartnershipSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
