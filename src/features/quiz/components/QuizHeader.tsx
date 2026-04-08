"use client";

import { useQuizStore } from "@/store/quizStore";
import { QuizPhase } from "@/types/quiz";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const PHASE_INFO = {
  [QuizPhase.PERSONALITY]: {
    title: "Fase 1: Kepribadian",
    description: "Mari kenali karakteristik dirimu",
    color: "primary" as const,
  },
  [QuizPhase.INTEREST]: {
    title: "Fase 2: Minat & Bidang",
    description: "Apa yang membuatmu bersemangat?",
    color: "accent" as const,
  },
  [QuizPhase.WORK_STYLE]: {
    title: "Fase 3: Gaya Kerja",
    description: "Lingkungan kerja idealmu",
    color: "secondary" as const,
  },
};

export function QuizHeader() {
  const { phase, currentQuestionIndex } = useQuizStore();
  const phaseInfo = PHASE_INFO[phase];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mb-6"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Kembali ke Beranda
      </Link>

      {/* Phase Badge */}
      <div className="flex items-center gap-3 mb-4">
        <Badge variant={phaseInfo.color} className="text-sm px-4 py-2">
          {phaseInfo.title}
        </Badge>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Pertanyaan {currentQuestionIndex + 1} dari 18
        </span>
      </div>

      {/* Phase Description */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {phaseInfo.description}
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        Pilih jawaban yang paling menggambarkan dirimu
      </p>
    </motion.div>
  );
}
