"use client";

import { QuizQuestion as QuizQuestionType } from "@/types/quiz";
import { useQuizStore } from "@/store/quizStore";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface QuizQuestionProps {
  question: QuizQuestionType;
}

export function QuizQuestion({ question }: QuizQuestionProps) {
  const { answers, setAnswer } = useQuizStore();

  // Find current answer for this question
  const currentAnswer = answers.find((a) => a.questionId === question.id);

  const handleSelectOption = (optionId: string) => {
    setAnswer(question.id, optionId);
  };

  return (
    <div className="space-y-6">
      {/* Question Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-secondary rounded-2xl p-6 md:p-8 shadow-lg"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
          {question.question}
        </h2>
      </motion.div>

      {/* Options */}
      <div className="grid gap-4">
        {question.options.map((option, index) => {
          const isSelected = currentAnswer?.optionId === option.id;

          return (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.05 }}
            >
              <Card
                hover
                onClick={() => handleSelectOption(option.id)}
                className={`
                  p-6 cursor-pointer transition-all duration-300
                  ${
                    isSelected
                      ? "ring-2 ring-primary bg-primary/5 dark:bg-primary/10"
                      : "hover:shadow-xl"
                  }
                `}
              >
                <div className="flex items-start gap-4">
                  {/* Selection Indicator */}
                  <div className="shrink-0 mt-1">
                    {isSelected ? (
                      <CheckCircleIcon className="w-6 h-6 text-primary" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                    )}
                  </div>

                  {/* Option Text */}
                  <div className="flex-1">
                    <p
                      className={`text-base md:text-lg ${
                        isSelected
                          ? "text-gray-900 dark:text-white font-medium"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {option.text}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
