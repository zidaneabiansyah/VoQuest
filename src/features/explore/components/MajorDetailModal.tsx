"use client";

import { Major } from "@/types/major";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CATEGORIES } from "@/lib/constants/categories";
import { formatSalary } from "@/lib/utils/scoring";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

interface MajorDetailModalProps {
  major: Major;
  onClose: () => void;
}

export function MajorDetailModal({ major, onClose }: MajorDetailModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-secondary rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-secondary border-b border-gray-200 dark:border-gray-700 p-6 flex items-start justify-between">
            <div>
              <Badge variant="secondary" className="mb-2">
                {CATEGORIES[major.category]}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold">{major.name}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h3 className="font-bold text-lg mb-2">Deskripsi</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {major.description}
              </p>
            </div>

            {/* Salary Projection */}
            <div>
              <h3 className="font-bold text-lg mb-3">Proyeksi Gaji</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Tahun 1
                  </p>
                  <p className="font-bold text-sm">
                    {formatSalary(major.avgSalaryYear1)}
                  </p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Tahun 5
                  </p>
                  <p className="font-bold text-sm text-primary">
                    {formatSalary(major.avgSalaryYear5)}
                  </p>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                    Tahun 10
                  </p>
                  <p className="font-bold text-sm text-accent">
                    {formatSalary(major.avgSalaryYear10)}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-bold text-lg mb-3">Skill yang Dipelajari</h3>
              <div className="flex flex-wrap gap-2">
                {major.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Career Path */}
            <div>
              <h3 className="font-bold text-lg mb-3">Jalur Karir</h3>
              <div className="space-y-2">
                {major.careerRoadmap.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {milestone.year === 0 ? "1" : milestone.year}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{milestone.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h3 className="font-bold text-lg mb-3">Industri Terkait</h3>
              <div className="flex flex-wrap gap-2">
                {major.industries.map((industry) => (
                  <Badge key={industry} variant="secondary">
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-white dark:bg-secondary border-t border-gray-200 dark:border-gray-700 p-6">
            <Button
              variant="primary"
              size="lg"
              onClick={onClose}
              className="w-full"
            >
              Tutup
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
