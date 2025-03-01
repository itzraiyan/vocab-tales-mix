
import React from 'react';
import { Link } from 'react-router-dom';

type CategoryBadgeProps = {
  category: string;
  className?: string;
  onClick?: () => void;
};

// This map defines colors for different categories
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  adventure: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-300',
    border: 'border-blue-200 dark:border-blue-800',
  },
  wisdom: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-700 dark:text-purple-300',
    border: 'border-purple-200 dark:border-purple-800',
  },
  mystery: {
    bg: 'bg-amber-100 dark:bg-amber-900/30',
    text: 'text-amber-700 dark:text-amber-300',
    border: 'border-amber-200 dark:border-amber-800',
  },
  comedy: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-700 dark:text-green-300',
    border: 'border-green-200 dark:border-green-800',
  },
  drama: {
    bg: 'bg-red-100 dark:bg-red-900/30',
    text: 'text-red-700 dark:text-red-300',
    border: 'border-red-200 dark:border-red-800',
  },
  // Add more categories as needed
};

const CategoryBadge = ({ category, className = '', onClick }: CategoryBadgeProps) => {
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  // Get colors for the category, or use default if not found
  const colors = categoryColors[category.toLowerCase()] || {
    bg: 'bg-gray-100 dark:bg-gray-800',
    text: 'text-gray-700 dark:text-gray-300',
    border: 'border-gray-200 dark:border-gray-700',
  };

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${colors.bg} ${colors.text} ${colors.border} text-xs font-medium px-2.5 py-1 rounded-full border transition-colors hover:bg-opacity-80 ${className}`}
      >
        {formattedCategory}
      </button>
    );
  }

  return (
    <Link
      to={`/stories?category=${category.toLowerCase()}`}
      className={`${colors.bg} ${colors.text} ${colors.border} text-xs font-medium px-2.5 py-1 rounded-full border transition-colors hover:bg-opacity-80 ${className}`}
    >
      {formattedCategory}
    </Link>
  );
};

export default CategoryBadge;
