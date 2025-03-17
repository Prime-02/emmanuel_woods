import React from "react";
import { HowWeWork, imageSlide } from "../index";
import Button from "../reusables/buttons/Buttons";
import Image from "next/image";

const HowweWork = () => {
  return (
    <div className="w-full md:w-[80%]  min-h-screen h-auto flex flex-col justify-start py-16 px-5 md:px-24">
      {/* Section Header with Line */}
      <span className="w-full flex flex-row items-center mb-12">
        <span className="flex-grow bg-blue-800 h-[0.5px] ml-2"></span>
        <span className="whitespace-nowrap text-lg font-semibold text-blue-800 uppercase tracking-tighter">
          {HowWeWork.heading}
        </span>
      </span>

      <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-16">
        {/* Image Column with Animation */}
        <div className="w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <div>
              <Image
                src={imageSlide[9]}
                width={1000}
                height={1000}
                alt="How We Work"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Column with Staggered Animation */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {HowWeWork.title}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {HowWeWork.text}
          </p>

          <div>
            <Button
              text={HowWeWork.buttonText}
              className="rounded-none py-3 px-6 text-white bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 hover:border transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowweWork;
