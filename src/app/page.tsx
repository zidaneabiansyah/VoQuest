import { HeroSection } from "@/features/landing/components/HeroSection";
import { StatsSection } from "@/features/landing/components/StatsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
    </main>
  );
}
