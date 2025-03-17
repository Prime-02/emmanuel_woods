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
      <div className="h-screen w-full relative overflow-hidden">
        {/* Image Container with motion animation */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={"/assets/images/img (9).jpg"}
            fill
            alt="Hero Image"
            className="object-cover"
            priority
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Gradient Overlay with motion animation */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black z-20"></div>

        {/* Header Text with motion animation */}
        <div className="absolute inset-0 flex items-center justify-center z-30 px-8 md:px-10 max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-start">
            {landingPageHeader}
          </h1>
        </div>
      </div>
      <AboutSection />
      <HowweWork />
      <OurServices />
      <div className="flex items-center justify-center  h-screen w-full md:w-[80%] mx-auto rounded-3xl">
        <video
          autoPlay
          loop
          muted
          // playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <WorkProcess />
    </main>
  );
};

export default Home;
