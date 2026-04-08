"use client";

import { Major } from "@/types/major";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";

interface IndustryMatchProps {
  major: Major;
}

export function IndustryMatch({ major }: IndustryMatchProps) {
  return (
    <Card className="p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          🏢 Industri & Perusahaan
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Tempat kerja potensial untuk lulusan {major.name}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {major.industries.map((industry, index) => (
          <motion.div
            key={industry}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group"
          >
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-primary transition-all shadow-sm hover:shadow-md">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BuildingOfficeIcon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-sm">{industry}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
      >
        <p className="text-sm text-center text-gray-700 dark:text-gray-300">
          💼 Lulusan {major.name} memiliki peluang kerja di{" "}
          <strong>{major.industries.length}+ industri</strong> berbeda di Indonesia
        </p>
      </motion.div>
    </Card>
  );
}
