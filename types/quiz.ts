import { CategoryCode } from "@/lib/constants/categories";

/**
 * Quiz Phase Types
 */
export enum QuizPhase {
  PERSONALITY = 1,
  INTEREST = 2,
  WORK_STYLE = 3,
}

/**
 * Quiz Question Type
 */
export interface QuizQuestion {
  id: string;
  phase: QuizPhase;
  question: string;
  options: QuizOption[];
}

/**
 * Quiz Option with scoring weights
 */
export interface QuizOption {
  id: string;
  text: string;
  illustration?: string;
  scores: Partial<Record<CategoryCode, number>>;
}

/**
 * User's quiz answer
 */
export interface QuizAnswer {
  questionId: string;
  optionId: string;
}

/**
 * Quiz state
 */
export interface QuizState {
  currentQuestionIndex: number;
  answers: QuizAnswer[];
  phase: QuizPhase;
  isCompleted: boolean;
}
