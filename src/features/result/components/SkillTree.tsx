"use client";

import { Major } from "@/types/major";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

interface SkillTreeProps {
  major: Major;
}

type SkillLevel = "foundation" | "intermediate" | "advanced" | "mastery";

interface SkillNode {
  name: string;
  level: SkillLevel;
  row: number;
  col: number;
}

/**
 * WOW Feature #3: RPG-Style Skill Tree
 * Interactive skill progression visualization
 */
export function SkillTree({ major }: SkillTreeProps) {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Organize skills into tree structure
  const skillNodes: SkillNode[] = major.skills.map((skill, index) => {
    let level: SkillLevel;
    let row: number;
    let col: number;

    // Distribute skills across levels
    if (index < 2) {
      level = "foundation";
      row = 0;
      col = index;
    } else if (index < 5) {
      level = "intermediate";
      row = 1;
      col = index - 2;
    } else if (index < 7) {
      level = "advanced";
      row = 2;
      col = index - 5;
    } else {
      level = "mastery";
      row = 3;
      col = 0;
    }

    return { name: skill, level, row, col };
  });

  const levelConfig = {
    foundation: {
      label: "Foundation",
      icon: AcademicCapIcon,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    intermediate: {
      label: "Intermediate",
      icon: CheckBadgeIcon,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    advanced: {
      label: "Advanced",
      icon: StarIcon,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    mastery: {
      label: "Mastery",
      icon: StarIcon,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-800",
    },
  };

  return (
    <Card className="p-6 md:p-8">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          🎮 Skill Tree
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Peta skill yang perlu kamu kuasai untuk menjadi expert
        </p>
      </div>

      {/* Tree Visualization */}
      <div className="space-y-8">
        {["foundation", "intermediate", "advanced", "mastery"].map(
          (level, levelIndex) => {
            const config = levelConfig[level as SkillLevel];
            const levelSkills = skillNodes.filter((node) => node.level === level);

            if (levelSkills.length === 0) return null;

            return (
              <motion.div
                key={level}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: levelIndex * 0.2 }}
                className="relative"
              >
                {/* Level Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full bg-linear-to-br ${config.color} flex items-center justify-center shadow-lg`}
                  >
                    <config.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{config.label}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Level {levelIndex + 1}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pl-0 md:pl-12">
                  {levelSkills.map((skillNode, index) => {
                    const isSelected = selectedSkill === skillNode.name;

                    return (
                      <motion.button
                        key={skillNode.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: levelIndex * 0.2 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          setSelectedSkill(
                            isSelected ? null : skillNode.name
                          )
                        }
                        className={`
                          relative p-4 rounded-xl border-2 text-left transition-all
                          ${config.bgColor} ${config.borderColor}
                          ${
                            isSelected
                              ? "ring-2 ring-offset-2 ring-primary shadow-lg"
                              : "hover:shadow-md"
                          }
                        `}
                      >
                        {/* Skill Name */}
                        <p className="font-medium text-sm">
                          {skillNode.name}
                        </p>

                        {/* Selection Indicator */}
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg"
                          >
                            <CheckBadgeIcon className="w-4 h-4 text-white" />
                          </motion.div>
                        )}

                        {/* Connection Line (visual only) */}
                        {levelIndex > 0 && index === 0 && (
                          <div className="hidden md:block absolute -top-8 left-1/2 w-0.5 h-8 bg-linear-to-b from-gray-300 to-transparent dark:from-gray-600" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            );
          }
        )}
      </div>

      {/* Learning Path Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-8 p-6 bg-linear-to-r from-primary/10 via-accent/10 to-primary/10 rounded-xl"
      >
        <h4 className="font-bold mb-3 flex items-center gap-2">
          <span>💡</span>
          <span>Tips Belajar</span>
        </h4>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>
              Mulai dari <strong>Foundation</strong> skills sebagai dasar yang kuat
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">•</span>
            <span>
              Kuasai <strong>Intermediate</strong> skills untuk siap kerja
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500">•</span>
            <span>
              <strong>Advanced</strong> skills membedakanmu dari yang lain
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500">•</span>
            <span>
              <strong>Mastery</strong> level untuk menjadi expert di bidangmu
            </span>
          </li>
        </ul>
      </motion.div>
    </Card>
  );
}
