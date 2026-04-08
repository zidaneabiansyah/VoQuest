"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/quizStore";
import { QuizHeader } from "./QuizHeader";
import { QuizProgress } from "./QuizProgress";
import { QuizQuestion } from "./QuizQuestion";
import { QuizNavigation } from "./QuizNavigation";
import { motion, AnimatePresence } from "framer-motion";

export function QuizContainer() {
  const router = useRouter();
  const { getCurrentQuestion, getProgress, isCompleted, answers } = useQuizStore();

  const currentQuestion = getCurrentQuestion();
  const progress = getProgress();

  useEffect(() => {
    if (isCompleted) {
      router.push("/result");
    }
  }, [isCompleted, router]);

  if (!currentQuestion) {
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-light-bg via-white to-primary/5 dark:from-dark-bg dark:via-secondary dark:to-primary/10">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <QuizHeader />
        <QuizProgress progress={progress} />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <QuizQuestion question={currentQuestion} />
          </motion.div>
        </AnimatePresence>

        <QuizNavigation />

        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs">
            <p className="font-mono">
              Answers: {answers.length} | Progress: {Math.round(progress)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
