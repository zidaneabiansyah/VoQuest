"use client";

import { Major } from "@/types/major";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { formatSalary } from "@/lib/utils/scoring";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface CareerRoadmapProps {
  major: Major;
}

/**
 * WOW Feature #1: Interactive Career Roadmap
 * Visual timeline showing career progression
 */
export function CareerRoadmap({ major }: CareerRoadmapProps) {
  return (
    <Card className="p-6 md:p-8">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          🗺️ Roadmap Karirmu
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Perjalanan karir dari lulus SMK hingga 10 tahun ke depan
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-accent to-primary" />

        {/* Milestones */}
        <div className="space-y-8">
          {major.careerRoadmap.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-16 md:pl-24"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                className="absolute left-2 md:left-6 top-2 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-secondary shadow-lg flex items-center justify-center"
              >
                <CheckCircleIcon className="w-4 h-4 text-white" />
              </motion.div>

              {/* Content Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* Year Badge */}
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-3">
                  Tahun {milestone.year === 0 ? "1" : milestone.year}
                </div>

                {/* Title */}
                <h4 className="text-lg md:text-xl font-bold mb-2">
                  {milestone.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {milestone.description}
                </p>

                {/* Salary */}
                {milestone.salary && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Estimasi Gaji:
                    </span>
                    <span className="font-bold text-accent">
                      {formatSalary(milestone.salary)}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Growth Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: major.careerRoadmap.length * 0.15 + 0.3 }}
        className="mt-8 p-6 bg-linear-to-r from-primary/10 to-accent/10 rounded-xl"
      >
        <p className="text-center text-sm md:text-base">
          <span className="font-bold">Pertumbuhan Karir:</span> Dari{" "}
          <span className="text-primary font-bold">
            {formatSalary(major.avgSalaryYear1)}
          </span>{" "}
          menjadi{" "}
          <span className="text-accent font-bold">
            {formatSalary(major.avgSalaryYear10)}
          </span>{" "}
          dalam 10 tahun! 🚀
        </p>
      </motion.div>
    </Card>
  );
}
