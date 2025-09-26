import React from "react";

export default function Skeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 dark:bg-gray-700 aspect-square rounded"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 mt-2 rounded"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 mt-2 rounded w-1/2"></div>
    </div>
  );
}
