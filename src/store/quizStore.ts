import { create } from "zustand";
import { persist } from "zustand/middleware";
import { QuizAnswer, QuizPhase, QuizState } from "@/types/quiz";
import { QUIZ_QUESTIONS } from "@/data/questions";
import { CategoryCode } from "@/lib/constants/categories";

interface QuizStore extends QuizState {
  // Actions
  setAnswer: (questionId: string, optionId: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (index: number) => void;
  resetQuiz: () => void;
  completeQuiz: () => void;
  
  // Computed
  getCurrentQuestion: () => typeof QUIZ_QUESTIONS[0] | undefined;
  getProgress: () => number;
  canGoNext: () => boolean;
  canGoPrevious: () => boolean;
  calculateScores: () => Record<CategoryCode, number>;
}

const initialState: QuizState = {
  currentQuestionIndex: 0,
  answers: [],
  phase: QuizPhase.PERSONALITY,
  isCompleted: false,
};

export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      setAnswer: (questionId, optionId) => {
        set((state) => {
          const existingIndex = state.answers.findIndex(
            (a) => a.questionId === questionId
          );

          let newAnswers: QuizAnswer[];
          if (existingIndex >= 0) {
            // Update existing answer
            newAnswers = [...state.answers];
            newAnswers[existingIndex] = { questionId, optionId };
          } else {
            // Add new answer
            newAnswers = [...state.answers, { questionId, optionId }];
          }

          return { answers: newAnswers };
        });
      },

      nextQuestion: () => {
        set((state) => {
          const nextIndex = state.currentQuestionIndex + 1;
          if (nextIndex >= QUIZ_QUESTIONS.length) {
            return state;
          }

          const nextQuestion = QUIZ_QUESTIONS[nextIndex];
          return {
            currentQuestionIndex: nextIndex,
            phase: nextQuestion.phase,
          };
        });
      },

      previousQuestion: () => {
        set((state) => {
          const prevIndex = state.currentQuestionIndex - 1;
          if (prevIndex < 0) {
            return state;
          }

          const prevQuestion = QUIZ_QUESTIONS[prevIndex];
          return {
            currentQuestionIndex: prevIndex,
            phase: prevQuestion.phase,
          };
        });
      },

      goToQuestion: (index) => {
        if (index >= 0 && index < QUIZ_QUESTIONS.length) {
          const question = QUIZ_QUESTIONS[index];
          set({
            currentQuestionIndex: index,
            phase: question.phase,
          });
        }
      },

      resetQuiz: () => {
        set(initialState);
      },

      completeQuiz: () => {
        set({ isCompleted: true });
      },

      getCurrentQuestion: () => {
        const state = get();
        return QUIZ_QUESTIONS[state.currentQuestionIndex];
      },

      getProgress: () => {
        const state = get();
        return ((state.currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;
      },

      canGoNext: () => {
        const state = get();
        const currentQuestion = QUIZ_QUESTIONS[state.currentQuestionIndex];
        const hasAnswer = state.answers.some(
          (a) => a.questionId === currentQuestion?.id
        );
        return hasAnswer && state.currentQuestionIndex < QUIZ_QUESTIONS.length - 1;
      },

      canGoPrevious: () => {
        const state = get();
        return state.currentQuestionIndex > 0;
      },

      calculateScores: () => {
        const state = get();
        const scores: Record<CategoryCode, number> = {
          TI: 0,
          TE: 0,
          BI: 0,
          KE: 0,
          SE: 0,
          PA: 0,
        };

        state.answers.forEach((answer) => {
          const question = QUIZ_QUESTIONS.find((q) => q.id === answer.questionId);
          if (!question) return;

          const option = question.options.find((o) => o.id === answer.optionId);
          if (!option) return;

          // Add scores from this option
          Object.entries(option.scores).forEach(([category, score]) => {
            scores[category as CategoryCode] += score;
          });
        });

        return scores;
      },
    }),
    {
      name: "voquest-quiz-storage",
      partialize: (state) => ({
        currentQuestionIndex: state.currentQuestionIndex,
        answers: state.answers,
        phase: state.phase,
        isCompleted: state.isCompleted,
      }),
    }
  )
);
