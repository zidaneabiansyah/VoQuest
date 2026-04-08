"use client";

import { MajorRecommendation } from "@/types/major";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/constants/categories";
import { formatSalary } from "@/lib/utils/scoring";

interface MajorCardProps {
  recommendation: MajorRecommendation;
  isPrimary?: boolean;
}

export function MajorCard({ recommendation, isPrimary = false }: MajorCardProps) {
  const { major, matchPercentage } = recommendation;

  return (
    <Card
      className={`
        p-6 md:p-8 relative overflow-hidden
        ${isPrimary ? "ring-2 ring-primary shadow-2xl" : ""}
      `}
    >
      {/* Match Percentage Badge */}
      <div className="absolute top-4 right-4">
        <Badge variant="primary" className="text-lg px-4 py-2 font-bold">
          {matchPercentage}% Match
        </Badge>
      </div>

      {/* Category Badge */}
      <Badge variant="secondary" className="mb-4">
        {CATEGORIES[major.category]}
      </Badge>

      {/* Major Name */}
      <h3
        className={`font-bold mb-3 ${
          isPrimary ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
        }`}
      >
        {major.name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {major.description}
      </p>

      {/* Salary Info */}
      <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Tahun 1</p>
          <p className="font-bold text-sm">{formatSalary(major.avgSalaryYear1)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Tahun 5</p>
          <p className="font-bold text-sm text-primary">
            {formatSalary(major.avgSalaryYear5)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Tahun 10</p>
          <p className="font-bold text-sm text-accent">
            {formatSalary(major.avgSalaryYear10)}
          </p>
        </div>
      </div>

      {/* Top Skills Preview */}
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Skill Utama:
        </p>
        <div className="flex flex-wrap gap-2">
          {major.skills.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="default" className="text-xs">
              {skill}
            </Badge>
          ))}
          {major.skills.length > 4 && (
            <Badge variant="default" className="text-xs">
              +{major.skills.length - 4} lainnya
            </Badge>
          )}
        </div>
      </div>

      {/* Primary Indicator */}
      {isPrimary && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20"
        >
          <p className="text-sm font-medium text-primary text-center">
            🎯 Rekomendasi Terbaik Untukmu
          </p>
        </motion.div>
      )}
    </Card>
  );
}
