"use client";

import { Major } from "@/types/major";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { formatSalary, calculateSalaryGrowth } from "@/lib/utils/scoring";
import { useEffect, useState } from "react";

interface SalaryChartProps {
  major: Major;
}

/**
 * WOW Feature #2: Animated Salary Projection Chart
 * Shows salary growth over 10 years with smooth animations
 */
export function SalaryChart({ major }: SalaryChartProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const salaryData = [
    { year: 1, amount: major.avgSalaryYear1 },
    { year: 3, amount: Math.round((major.avgSalaryYear1 + major.avgSalaryYear5) / 2) },
    { year: 5, amount: major.avgSalaryYear5 },
    { year: 10, amount: major.avgSalaryYear10 },
  ];

  const maxSalary = major.avgSalaryYear10;
  const totalGrowth = calculateSalaryGrowth(major.avgSalaryYear1, major.avgSalaryYear10);

  return (
    <Card className="p-6 md:p-8">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          📈 Proyeksi Gaji
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Estimasi pertumbuhan penghasilan berdasarkan data pasar
        </p>
      </div>

      {/* Chart */}
      <div className="space-y-6">
        {salaryData.map((data, index) => {
          const percentage = (data.amount / maxSalary) * 100;
          const delay = index * 0.2;

          return (
            <div key={data.year} className="space-y-2">
              {/* Year Label */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Tahun {data.year}
                </span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: delay + 0.5 }}
                  className="text-sm font-bold text-primary"
                >
                  {formatSalary(data.amount)}
                </motion.span>
              </div>

              {/* Bar */}
              <div className="relative h-12 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${percentage}%` } : {}}
                  transition={{
                    delay,
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className={`
                    absolute inset-y-0 left-0 rounded-lg
                    ${
                      index === salaryData.length - 1
                        ? "bg-linear-to-r from-accent to-accent/80"
                        : "bg-linear-to-r from-primary to-primary/80"
                    }
                  `}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: delay + 1,
                    }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                  />
                </motion.div>

                {/* Value Label Inside Bar */}
                <div className="absolute inset-0 flex items-center px-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ delay: delay + 0.8 }}
                    className="text-xs font-bold text-white drop-shadow-lg"
                  >
                    {percentage > 30 && formatSalary(data.amount)}
                  </motion.span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Growth Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: salaryData.length * 0.2 + 0.5 }}
        className="mt-8 grid md:grid-cols-3 gap-4"
      >
        <div className="p-4 bg-primary/10 rounded-lg text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Gaji Awal
          </p>
          <p className="text-lg font-bold text-primary">
            {formatSalary(major.avgSalaryYear1)}
          </p>
        </div>

        <div className="p-4 bg-accent/10 rounded-lg text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Gaji Tahun 10
          </p>
          <p className="text-lg font-bold text-accent">
            {formatSalary(major.avgSalaryYear10)}
          </p>
        </div>

        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Pertumbuhan
          </p>
          <p className="text-lg font-bold text-green-600 dark:text-green-400">
            +{totalGrowth}%
          </p>
        </div>
      </motion.div>

      {/* Disclaimer */}
      <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 text-center">
        * Estimasi berdasarkan rata-rata pasar Indonesia. Gaji aktual dapat bervariasi
        tergantung lokasi, perusahaan, dan performa individu.
      </p>
    </Card>
  );
}
