"use client";

import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/quizStore";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { QUIZ_QUESTIONS } from "@/data/questions";

export function QuizNavigation() {
  const router = useRouter();
  const {
    currentQuestionIndex,
    canGoNext,
    canGoPrevious,
    nextQuestion,
    previousQuestion,
    completeQuiz,
    answers,
  } = useQuizStore();

  const isLastQuestion = currentQuestionIndex === QUIZ_QUESTIONS.length - 1;
  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const hasAnswer = answers.some((a) => a.questionId === currentQuestion?.id);

  const handleNext = () => {
    if (isLastQuestion && hasAnswer) {
      // Complete quiz and navigate to result
      completeQuiz();
      router.push("/result");
    } else if (canGoNext()) {
      nextQuestion();
    }
  };

  const handlePrevious = () => {
    if (canGoPrevious()) {
      previousQuestion();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex items-center justify-between gap-4 mt-8"
    >
      {/* Previous Button */}
      <Button
        variant="outline"
        size="lg"
        onClick={handlePrevious}
        disabled={!canGoPrevious()}
        className="flex items-center gap-2"
      >
        <ArrowLeftIcon className="w-5 h-5" />
        <span className="hidden sm:inline">Sebelumnya</span>
      </Button>

      {/* Next/Finish Button */}
      <Button
        variant="primary"
        size="lg"
        onClick={handleNext}
        disabled={!hasAnswer}
        className="flex items-center gap-2 min-w-35"
      >
        <span>{isLastQuestion ? "Lihat Hasil" : "Selanjutnya"}</span>
        {!isLastQuestion && <ArrowRightIcon className="w-5 h-5" />}
      </Button>
    </motion.div>
  );
}
