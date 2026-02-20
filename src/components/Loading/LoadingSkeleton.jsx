import React from "react";
import {easeInOut, motion} from "motion/react";

const LoadingSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 , ease: easeInOut}}
      className="bg-white rounded-2xl shadow-md overflow-hidden"
    >
      <div className="h-48 w-full bg-gray-300 animate-pulse"></div>

      <div className="p-4 space-y-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>

        <div className="flex justify-between">
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-300 rounded w-20"></div>
          </div>

          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-300 rounded w-20"></div>
          </div>
        </div>

        <div className="h-10 bg-gray-300 rounded-lg w-full"></div>
      </div>
    </motion.div>
  );
};

export default LoadingSkeleton;
