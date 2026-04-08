import { ResultContainer } from "@/features/result/components/ResultContainer";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";

export const metadata = genMeta({
  title: "Hasil Quiz Karir",
  description: "Lihat rekomendasi jurusan vokasi yang cocok untukmu lengkap dengan roadmap karir, proyeksi gaji, dan skill tree.",
  url: "/result",
  keywords: ["hasil quiz", "rekomendasi jurusan", "roadmap karir", "proyeksi gaji SMK"],
});

export default function ResultPage() {
  return <ResultContainer />;
}
