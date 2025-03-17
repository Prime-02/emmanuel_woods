import React from "react";
import { workProcess } from "../index";

const WorkProcess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-12">
      {/* Animated Heading */}
      <div className="w-full flex flex-row items-center mb-12 overflow-hidden">
        <span className="flex-grow bg-blue-800 h-[0.5px] ml-2"></span>
        <span className="whitespace-nowrap text-lg font-semibold text-blue-800 uppercase tracking-tighter mx-2">
          Process
        </span>
        <span className="flex-grow bg-blue-800 h-[0.5px] ml-2"></span>
      </div>

      {/* Process Content */}
      <div className="flex flex-col items-center justify-center w-full max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          {workProcess.heading}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {workProcess.processes.map((process, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-lg  hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="text-4xl text-blue-800 mb-4 p-3 bg-blue-50 rounded-full">
                {process.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                {process.heading}
              </h3>
              <p className="text-gray-600">{process.text}</p>

              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-blue-800 font-medium cursor-pointer flex items-center">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
