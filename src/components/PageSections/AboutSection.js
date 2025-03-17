import React, { useState, useRef, useEffect } from "react";
import { imageSlide, subHeroContent } from "../index";
import Button from "../reusables/buttons/Buttons";
import Image from "next/image";

const About_Section = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  // Track scroll position in the slider
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateScrollProgress = () => {
      const scrollLeft = slider.scrollLeft;
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      setSliderWidth(slider.clientWidth);
      setScrollWidth(slider.scrollWidth);

      // Calculate the active index based on scroll position
      if (maxScroll > 0) {
        const newIndex = Math.round(
          (scrollLeft / maxScroll) * (imageSlide.length - 1)
        );
        setActiveIndex(newIndex);
      }
    };

    updateScrollProgress(); // Initial calculation
    slider.addEventListener("scroll", updateScrollProgress);

    // Add resize listener to handle window size changes
    const handleResize = () => {
      updateScrollProgress();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      slider.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", handleResize);
    };
  }, [imageSlide.length]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-auto py-16 px-5 md:px-24">
      {/* Section Header with Line */}
      <span
        className="w-full flex flex-row items-center mb-12"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <span className="whitespace-nowrap text-lg font-semibold text-blue-800 uppercase tracking-tighter">
          {subHeroContent.heading}
        </span>
        <span className="flex-grow bg-blue-800 h-[0.5px] ml-2"></span>
      </span>

      {/* Main Content */}
      <div className="w-full flex flex-col justify-center mb-16">
        <div className="w-full flex flex-col md:flex-row justify-between h-auto gap-8 md:gap-16">
          {/* Left Column */}
          <span className="flex flex-col md:w-2/5">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {subHeroContent.subHeading}
            </h1>
            <span>
              <Button
                text={subHeroContent.buttonText}
                className="rounded-none py-3 px-6 text-white bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 hover:border transition-all duration-300 mt-4"
              />
            </span>
          </span>

          {/* Right Column */}
          <span className="md:w-3/5">
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {subHeroContent.text}
            </p>

            {/* Attributes List */}
            <ul className="flex flex-wrap items-center gap-8 md:gap-12">
              {subHeroContent.attr.map((attr, i) => (
                <li key={i} className="flex flex-col">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-1">
                    {attr.value}
                  </h2>
                  <p className="text-gray-500 font-medium">{attr.title}</p>
                </li>
              ))}
            </ul>
          </span>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className="w-full">
        {/* Image Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {imageSlide.map((img, i) => (
            <div key={i} className="flex-shrink-0 snap-center relative">
              <Image
                src={img}
                width={500}
                height={500}
                alt={`Image ${i + 1}`}
                className="rounded-lg shadow-md object-cover h-60 md:h-80 w-80 md:w-96"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add CSS to hide scrollbar but keep functionality
const ScrollbarStyle = () => (
  <style jsx global>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
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
