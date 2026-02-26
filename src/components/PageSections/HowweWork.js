import React from "react";
import { HowWeWork } from "../index";
import Button from "../reusables/buttons/Buttons";

const HowweWork = () => {
  return (
    <section className="relative w-full bg-gray-50 py-24 overflow-hidden isolate">
      {/* Background patterns with reduced opacity and better performance */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-1/3 bg-[url('/pattern-grid-light.svg')] bg-repeat opacity-20"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-full h-1/3 bg-[url('/pattern-dots-light.svg')] bg-repeat opacity-30"
          aria-hidden="true"
        />
      </div>

      {/* Decorative corner elements with transitions */}
      <div
        className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-blue-800/20 hidden md:block transition-all duration-500 hover:border-blue-800/40"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-blue-800/20 hidden md:block transition-all duration-500 hover:border-blue-800/40"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="w-full flex flex-col items-start max-w-3xl mx-auto">
          {/* Main Title with animated underline */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight relative group">
            <span className="mb-4">{HowWeWork.title}</span>
            <span className="absolute -bottom-7 left-0 w-24 h-1 bg-blue-800 transform  -translate-y-2 transition-all duration-300 group-hover:w-32" />
          </h2>

          {/* Content with animated border */}
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12 pl-6 border-l-2 border-blue-800/30 hover:border-blue-800/60 transition-colors duration-300">
            {HowWeWork.text}
          </p>

          {/* Features Section with staggered animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            {HowWeWork.features?.map((feature, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden hover:-translate-y-1"
              >
                {/* Animated background pattern */}
                <div
                  className="absolute inset-0 bg-[url('/pattern-dots-very-light.svg')] bg-repeat opacity-10 group-hover:opacity-20 transition-opacity duration-500 -z-10"
                  aria-hidden="true"
                />

                {/* Number indicator with animation */}
                <div className="relative w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 overflow-hidden group-hover:bg-blue-200 transition-colors duration-300">
                  <div
                    className="absolute inset-0 bg-[url('/pattern-dots-light.svg')] bg-repeat opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                  <span className="text-blue-800 text-xl font-bold relative group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 relative">
                  {feature.title}
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-800/30 group-hover:w-12 transition-all duration-300" />
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-800/20 rounded-lg pointer-events-none transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Button with gradient hover effect */}
          <div className="relative group">
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 pointer-events-none"
              aria-hidden="true"
            />
            <Button
              text={HowWeWork.buttonText}
              className="relative px-8 py-4 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HowweWork);
