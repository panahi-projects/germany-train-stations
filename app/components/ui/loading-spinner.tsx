import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-text-secondary"></div>
        <p className="mt-4 text-gray-600">Loading stations...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
