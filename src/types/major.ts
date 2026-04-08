import { CategoryCode } from "@/lib/constants/categories";

/**
 * Vocational Major (Jurusan) Type Definition
 */
export interface Major {
  id: string;
  name: string;
  category: CategoryCode;
  description: string;
  avgSalaryYear1: number;
  avgSalaryYear5: number;
  avgSalaryYear10: number;
  skills: string[];
  careerRoadmap: CareerMilestone[];
  industries: string[];
  scoreWeights: Record<CategoryCode, number>;
  illustration?: string;
}

export interface CareerMilestone {
  year: number;
  title: string;
  description: string;
  salary?: number;
}

/**
 * Major recommendation result
 */
export interface MajorRecommendation {
  major: Major;
  matchPercentage: number;
  score: number;
}
