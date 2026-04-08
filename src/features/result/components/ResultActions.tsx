"use client";

import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/quizStore";
import { Button } from "@/components/ui/Button";
import { ShareButton } from "@/components/ui/ShareButton";
import { motion } from "framer-motion";
import {
  ArrowPathIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export function ResultActions() {
  const router = useRouter();
  const { resetQuiz } = useQuizStore();

  const handleRetake = () => {
    resetQuiz();
    router.push("/quiz");
  };

  const handleExplore = () => {
    router.push("/explore");
  };

  const shareData = {
    title: "VoQuest - Hasil Quiz Karir",
    text: "Aku sudah menemukan jurusan vokasi yang cocok! Coba juga yuk!",
    url: typeof window !== "undefined" ? window.location.origin : "https://voquest.id",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4"
    >
      <Button
        variant="outline"
        size="lg"
        onClick={handleRetake}
        className="flex items-center gap-2 w-full sm:w-auto"
      >
        <ArrowPathIcon className="w-5 h-5" />
        Coba Lagi
      </Button>

      <Button
        variant="primary"
        size="lg"
        onClick={handleExplore}
        className="flex items-center gap-2 w-full sm:w-auto"
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
        Jelajahi Semua Jurusan
      </Button>

      <div className="w-full sm:w-auto">
        <ShareButton data={shareData} variant="button" className="w-full" />
      </div>
    </motion.div>
  );
}
