import { QuizContainer } from "@/features/quiz/components/QuizContainer";
import { StructuredData } from "@/components/seo/StructuredData";
import { generateMetadata as genMeta, generateStructuredData } from "@/lib/seo/metadata";

export const metadata = genMeta({
  title: "Quiz Karir Vokasi",
  description: "Jawab 18 pertanyaan untuk menemukan jurusan SMK yang paling cocok dengan kepribadian dan minatmu. Gratis, cepat, dan akurat.",
  url: "/quiz",
  keywords: ["quiz karir", "tes minat bakat", "pilih jurusan SMK", "quiz vokasi"],
});

export default function QuizPage() {
  const quizData = generateStructuredData("quiz");

  return (
    <>
      <StructuredData data={quizData} />
      <QuizContainer />
    </>
  );
}
