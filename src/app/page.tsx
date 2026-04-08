import { HeroSection } from "@/features/landing/components/HeroSection";
import { StatsSection } from "@/features/landing/components/StatsSection";
import { FeaturePreview } from "@/features/landing/components/FeaturePreview";
import { TestimonialSlider } from "@/features/landing/components/TestimonialSlider";
import { CTASection } from "@/features/landing/components/CTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturePreview />
      <TestimonialSlider />
      <CTASection />
    </main>
  );
}
