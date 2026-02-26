"use client";

import { landingPageHeader } from "@/components/index";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutSection from "@/components/PageSections/AboutSection";
import HowweWork from "@/components/PageSections/HowweWork";
import OurServices from "@/components/PageSections/OurServices";
import WorkProcess from "@/components/PageSections/WorkProcess";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <main className="overflow-hidden">
      <div className="h-screen w-full relative overflow-hidden bg-blue-800">
        {/* Layered background with improved diagonal effect */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Base blue layer with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 z-10"></div>

          {/* Enhanced diagonal stripe with gradient edge */}
          <div className="absolute top-0 left-0 w-full h-full z-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black transform -skew-y-12 origin-top-left"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-30"></div>
          </div>

          {/* Improved image container with responsive sizing */}
          <div className="absolute top-0 right-0 w-full md:w-3/4 h-full overflow-hidden z-30 clip-polygon transition-all duration-500 hover:clip-polygon-hover">
            <Image
              src={"/assets/images/img (9).jpg"}
              fill
              alt="Hero Image"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
              onLoad={() => setImageLoaded(true)}
            />
            {/* Subtle overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-800/30 to-black/30 z-35"></div>
          </div>
        </div>

        {/* Enhanced text container with animation */}
        <div className="absolute inset-0 flex items-center z-40 px-4 sm:px-8 md:px-16">
          <div className="max-w-2xl p-6 md:p-8 bg-white bg-opacity-95 backdrop-blur-md border-l-8 border-blue-800 transform transition-all duration-500 hover:shadow-2xl hover:bg-opacity-100">
            <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {landingPageHeader}
            </h1>
            {/* Animated divider */}
            <div className="h-1 w-20 bg-blue-800 mb-6 transition-all duration-700 hover:w-32"></div>
            {/* Optional button */}
            <button className="px-6 py-3 bg-blue-800 text-white font-medium rounded-sm hover:bg-black transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-blue-800 z-50"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white z-50"></div>
      </div>

      <style jsx>{`
        .clip-polygon {
          clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          transition: clip-path 0.5s ease;
        }
        .clip-polygon-hover {
          clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        @media (max-width: 768px) {
          .clip-polygon {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 90%);
          }
        }
      `}</style>
      <AboutSection />
      <HowweWork />
      <OurServices />
      <WorkProcess />
    </main>
  );
};

export default Home;
