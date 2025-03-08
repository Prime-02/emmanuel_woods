"use client";

import React from "react";

const Error = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen card text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-4 text-red-600 text-center truncate max-w-lg">
        {error?.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 reverse_coloured_card rounded  transition duration-300"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
