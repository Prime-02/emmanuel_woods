import React from "react";
import { HowWeWork, imageSlide } from "../index";
import Button from "../reusables/buttons/Buttons";
import Image from "next/image";

const HowweWork = () => {
  return (
    <div className="w-full bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="w-full flex flex-col items-start max-w-3xl mx-auto">
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {HowWeWork.title}
          </h2>

          {/* Divider */}
          <div className="w-24 h-1 bg-blue-800 mb-8"></div>

          {/* Content */}
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12">
            {HowWeWork.text}
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            {HowWeWork.features?.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-800 text-xl font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )) || null}
          </div>

          {/* Button */}
          <div className="flex justify-start">
            <Button
              text={HowWeWork.buttonText}
              className="px-8 py-4 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors duration-300 shadow-md hover:shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowweWork;
