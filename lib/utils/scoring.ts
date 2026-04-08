import { CategoryCode } from "@/lib/constants/categories";
import { MAJORS } from "@/data/majors";
import { MajorRecommendation } from "@/types/major";

/**
 * Calculate major recommendations based on quiz scores
 * Returns top 3 recommendations with match percentage
 */
export function calculateRecommendations(
  scores: Record<CategoryCode, number>
): MajorRecommendation[] {
  // Calculate total score for percentage calculation
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);

  if (totalScore === 0) {
    return [];
  }

  // Calculate match score for each major
  const recommendations = MAJORS.map((major) => {
    let matchScore = 0;

    // Calculate weighted score based on major's score weights
    Object.entries(major.scoreWeights).forEach(([category, weight]) => {
      const userScore = scores[category as CategoryCode] || 0;
      matchScore += userScore * weight;
    });

    // Calculate match percentage (normalize to 0-100)
    const maxPossibleScore = Object.values(major.scoreWeights).reduce(
      (sum, weight) => sum + weight * 5, // Max score per question is typically 5
      0
    );

    const matchPercentage = Math.min(
      100,
      Math.round((matchScore / maxPossibleScore) * 100)
    );

    return {
      major,
      matchPercentage,
      score: matchScore,
    };
  });

  // Sort by score (descending) and return top 3
  return recommendations
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((rec, index) => ({
      ...rec,
      // Ensure top recommendation has at least 70% match
      matchPercentage:
        index === 0 && rec.matchPercentage < 70
          ? Math.max(70, rec.matchPercentage)
          : rec.matchPercentage,
    }));
}

/**
 * Get dominant category from scores
 */
export function getDominantCategory(
  scores: Record<CategoryCode, number>
): CategoryCode {
  return Object.entries(scores).reduce((max, [category, score]) =>
    score > scores[max as CategoryCode] ? (category as CategoryCode) : max
  , "TI" as CategoryCode);
}

/**
 * Format salary to Indonesian Rupiah
 */
export function formatSalary(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Calculate salary growth percentage
 */
export function calculateSalaryGrowth(initial: number, final: number): number {
  return Math.round(((final - initial) / initial) * 100);
}
