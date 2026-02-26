import React from "react";
import { imageSlide, subHeroContent } from "../index";
import Button from "../reusables/buttons/Buttons";
import Image from "next/image";

const About_Section = () => {
  return (
    <div className="relative bg-gradient-to-l from-blue-800 flex flex-col items-center justify-center min-h-screen h-auto py-16 px-5 md:px-24 overflow-hidden isolate">
      {/* Organic shape backgrounds */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Large organic blob */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-800/5 rounded-full filter blur-3xl opacity-70"></div>
        {/* Organic squiggle */}
        <div
          className="absolute top-1/4 -right-20 w-[400px] h-[800px] bg-blue-800/10 opacity-30"
          style={{
            clipPath:
              'path("M0,0 C150,100 100,300 200,400 C300,500 350,600 400,800 L0,800 Z")',
          }}
        ></div>
      </div>

      {/* Subtle background patterns */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[url('/pattern-dots.svg')] bg-repeat"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[url('/pattern-grid.svg')] bg-repeat opacity-70"></div>
      </div>

      {/* Floating organic shapes */}
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-blue-800/10 rounded-full filter blur-lg animate-float"></div>
      <div className="absolute bottom-1/4 right-20 w-24 h-24 bg-blue-800/15 rounded-full filter blur-lg animate-float-delay"></div>

      {/* Section Header with decorative elements */}
      <span className="w-full flex flex-row items-center mb-12 relative group">
        <span className="whitespace-nowrap text-lg font-semibold text-blue-800 uppercase tracking-tighter bg-white px-4 py-2 rounded-md shadow-sm z-10">
          {subHeroContent.heading}
        </span>
        <span className="flex-grow bg-gradient-to-r from-blue-800/20 to-blue-800 h-[1px] ml-2 relative">
          <span className="absolute -top-1.5 -left-2 w-3 h-3 rounded-full bg-blue-800 animate-pulse"></span>
          <span className="absolute -top-1.5 -left-2 w-3 h-3 rounded-full bg-blue-800 animate-ping opacity-75"></span>
        </span>
      </span>

      {/* Main Content */}
      <div className="w-full flex flex-col justify-center mb-16 relative">
        {/* Organic corner accents */}
        <div className="hidden md:block absolute -top-8 -left-8 w-32 h-32">
          <div className="absolute top-0 left-0 w-full h-full border-2 border-blue-800/20 rounded-full filter blur-sm"></div>
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-800/10 rounded-full animate-pulse"></div>
        </div>
        <div className="hidden md:block absolute -bottom-8 -right-8 w-32 h-32">
          <div className="absolute bottom-0 right-0 w-full h-full border-2 border-blue-800/20 rounded-full filter blur-sm"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between h-auto gap-8 md:gap-16 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm relative overflow-hidden">
          {/* Organic shape overlay */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-800/5 rounded-full filter blur-xl -z-10"></div>

          {/* Left Column */}
          <span className="flex flex-col md:w-2/5 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-800/10 rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 relative">
              {subHeroContent.subHeading}
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-800 rounded-full"></span>
              <span className="absolute -bottom-3 left-12 w-4 h-4 bg-blue-800/20 rounded-full animate-pulse"></span>
            </h1>
            <span className="mt-6 relative group">
              <div className="absolute -inset-1 bg-blue-800/10 rounded-md blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Button
                text={subHeroContent.buttonText}
                className="relative rounded-md py-3 px-6 text-white bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 border-2 border-transparent transition-all duration-300 shadow-md hover:shadow-lg z-10"
              />
            </span>
          </span>

          {/* Right Column */}
          <span className="md:w-3/5 relative">
            {/* Floating organic dot */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-800/10 rounded-full animate-float-delay"></div>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed bg-white p-6 rounded-lg border-l-4 border-blue-800 relative overflow-hidden">
              <span className="absolute top-0 right-0 w-16 h-16 bg-blue-800/5 rounded-full filter blur-md -z-10"></span>
              {subHeroContent.text}
            </p>

            {/* Attributes List */}
            <ul className="flex flex-wrap items-center gap-8 md:gap-12">
              {subHeroContent.attr.map((attr, i) => (
                <li
                  key={i}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative group"
                >
                  {/* Organic shape behind each attribute */}
                  <div className="absolute inset-0 -z-10 bg-blue-800/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-1">
                      {attr.value}
                    </h2>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-800/30 group-hover:w-12 transition-all duration-300"></div>
                  </div>
                  <p className="text-gray-500 font-medium mt-2">{attr.title}</p>
                </li>
              ))}
            </ul>
          </span>
        </div>
      </div>

      {/* Image Slider Section with pattern background */}
      <div className="w-full relative">
        <div className="absolute inset-0 -z-10 bg-[url('/pattern-dots-light.svg')] bg-repeat rounded-xl opacity-20"></div>
        {/* Organic shape overlay for slider */}
        <div className="absolute -bottom-20 left-1/4 w-48 h-48 bg-blue-800/10 rounded-full filter blur-xl -z-10"></div>

        <div
          className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x px-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {imageSlide.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-center relative group transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Organic shape accent */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-800/30 rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
              <Image
                src={img}
                width={500}
                height={500}
                alt={`Image ${i + 1}`}
                className="rounded-lg shadow-md object-cover h-60 md:h-80 w-80 md:w-96 border-2 border-white/50"
              />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium bg-blue-800 px-3 py-1 rounded-full">
                  View {i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating organic shapes at bottom */}
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-blue-800/10 rounded-full animate-float"></div>
    </div>
  );
};

const ScrollbarStyle = () => (
  <style jsx global>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    @keyframes float {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    @keyframes float-delay {
      0%,
      100% {
        transform: translateY(-5px);
      }
      50% {
        transform: translateY(5px);
      }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-delay {
      animation: float-delay 7s ease-in-out infinite;
      animation-delay: 1s;
    }
  `}</style>
);

const AboutSection = () => (
  <>
    <ScrollbarStyle />
    <About_Section />
  </>
);

export default AboutSection;
