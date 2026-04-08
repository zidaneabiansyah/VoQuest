import { HeroSection } from "@/features/landing/components/HeroSection";
import { StatsSection } from "@/features/landing/components/StatsSection";
import { FeaturePreview } from "@/features/landing/components/FeaturePreview";
import { TestimonialSlider } from "@/features/landing/components/TestimonialSlider";
import { CTASection } from "@/features/landing/components/CTASection";
import { StructuredData } from "@/components/seo/StructuredData";
import { generateStructuredData, generateFAQData } from "@/lib/seo/metadata";

export default function HomePage() {
  const websiteData = generateStructuredData("website");
  
  const faqData = generateFAQData([
    {
      question: "Apa itu VoQuest?",
      answer: "VoQuest adalah platform interaktif berbasis quiz yang membantu siswa SMA/SMK menemukan jurusan vokasi yang sesuai dengan kepribadian, minat, dan gaya kerja mereka.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan quiz?",
      answer: "Quiz VoQuest hanya membutuhkan waktu sekitar 5 menit untuk menyelesaikan 18 pertanyaan yang dirancang khusus.",
    },
    {
      question: "Apakah quiz VoQuest gratis?",
      answer: "Ya, VoQuest sepenuhnya gratis dan tidak memerlukan registrasi. Anda bisa langsung memulai quiz dan mendapatkan hasil instan.",
    },
    {
      question: "Apa saja yang ditampilkan dalam hasil quiz?",
      answer: "Hasil quiz menampilkan rekomendasi jurusan terbaik, roadmap karir 10 tahun, proyeksi gaji, skill tree yang perlu dikuasai, dan industri terkait.",
    },
  ]);

  return (
    <>
      <StructuredData data={websiteData} />
      <StructuredData data={faqData} />
      
      <main className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <FeaturePreview />
        <TestimonialSlider />
        <CTASection />
      </main>
    </>
  );
}
