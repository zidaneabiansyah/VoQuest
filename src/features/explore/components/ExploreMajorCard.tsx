"use client";

import { Major } from "@/types/major";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CATEGORIES } from "@/lib/constants/categories";
import { formatSalary } from "@/lib/utils/scoring";
import { BriefcaseIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

interface ExploreMajorCardProps {
  major: Major;
  onClick: () => void;
}

export function ExploreMajorCard({ major, onClick }: ExploreMajorCardProps) {
  return (
    <Card
      hover
      onClick={onClick}
      className="p-6 h-full flex flex-col"
    >
      {/* Category Badge */}
      <Badge variant="secondary" className="mb-3 w-fit">
        {CATEGORIES[major.category]}
      </Badge>

      {/* Major Name */}
      <h3 className="text-xl font-bold mb-3">{major.name}</h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
        {major.description}
      </p>

      {/* Stats */}
      <div className="space-y-2 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-2 text-sm">
          <CurrencyDollarIcon className="w-4 h-4 text-primary" />
          <span className="text-gray-600 dark:text-gray-400">Gaji Awal:</span>
          <span className="font-bold text-primary">
            {formatSalary(major.avgSalaryYear1)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <BriefcaseIcon className="w-4 h-4 text-accent" />
          <span className="text-gray-600 dark:text-gray-400">Industri:</span>
          <span className="font-bold">{major.industries.length}+</span>
        </div>
      </div>

      {/* Skills Preview */}
      <div className="mt-4 flex flex-wrap gap-1">
        {major.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded"
          >
            {skill}
          </span>
        ))}
        {major.skills.length > 3 && (
          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
            +{major.skills.length - 3}
          </span>
        )}
      </div>
    </Card>
  );
}
