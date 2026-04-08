"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/quizStore";
import { MajorRecommendation } from "@/types/major";
import { ResultLoading } from "./ResultLoading";
import { ResultHeader } from "./ResultHeader";
import { MajorCard } from "./MajorCard";
import { CareerRoadmap } from "./CareerRoadmap";
import { SalaryChart } from "./SalaryChart";
import { SkillTree } from "./SkillTree";
import { IndustryMatch } from "./IndustryMatch";
import { ResultActions } from "./ResultActions";
import { motion } from "framer-motion";

/**
 * Main Result Container
 * Displays quiz results with recommendations and visualizations
 */
export function ResultContainer() {
  const router = useRouter();
  const { isCompleted, calculateScores, answers } = useQuizStore();
  const [recommendations, setRecommendations] = useState<MajorRecommendation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Redirect if quiz not completed
    if (!isCompleted || answers.length === 0) {
      router.push("/quiz");
      return;
    }

    // Calculate results with dramatic delay
    const calculateResults = async () => {
      setIsLoading(true);

      // Simulate processing time for dramatic effect
      await new Promise((resolve) => setTimeout(resolve, 2500));

      try {
        const scores = calculateScores();
        const response = await fetch("/api/calculate-result", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ scores }),
        });

        if (!response.ok) throw new Error("Failed to calculate results");

        const data = await response.json();
        setRecommendations(data.recommendations);
      } catch (error) {
        console.error("Error calculating results:", error);
        // Fallback: calculate on client side
        const scores = calculateScores();
        const { calculateRecommendations } = await import("@/lib/utils/scoring");
        setRecommendations(calculateRecommendations(scores));
      } finally {
        setIsLoading(false);
      }
    };

    calculateResults();
  }, [isCompleted, answers, calculateScores, router]);

  // Show loading animation
  if (isLoading) {
    return <ResultLoading />;
  }

  // No recommendations found
  if (recommendations.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Tidak dapat menghitung hasil</h2>
          <p className="text-gray-600 mb-6">Silakan coba lagi</p>
          <button
            onClick={() => router.push("/quiz")}
            className="px-6 py-3 bg-primary text-white rounded-lg"
          >
            Kembali ke Quiz
          </button>
        </div>
      </div>
    );
  }

  const [primaryRecommendation, ...alternativeRecommendations] = recommendations;

  return (
    <div className="min-h-screen bg-linear-to-br from-light-bg via-white to-primary/5 dark:from-dark-bg dark:via-secondary dark:to-primary/10">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <ResultHeader />

        {/* Primary Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Jurusan yang Cocok Untukmu
          </h2>
          <MajorCard recommendation={primaryRecommendation} isPrimary />
        </motion.div>

        {/* Career Roadmap - WOW Feature #1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <CareerRoadmap major={primaryRecommendation.major} />
        </motion.div>

        {/* Salary Chart - WOW Feature #2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <SalaryChart major={primaryRecommendation.major} />
        </motion.div>

        {/* Skill Tree - WOW Feature #3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <SkillTree major={primaryRecommendation.major} />
        </motion.div>

        {/* Industry Match */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-12"
        >
          <IndustryMatch major={primaryRecommendation.major} />
        </motion.div>

        {/* Alternative Recommendations */}
        {alternativeRecommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Pilihan Alternatif
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {alternativeRecommendations.map((rec) => (
                <MajorCard key={rec.major.id} recommendation={rec} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Actions */}
        <ResultActions />
      </div>
    </div>
  );
}
