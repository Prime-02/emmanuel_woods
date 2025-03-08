import React, { useState, useRef, useEffect } from "react";
import { imageSlide, subHeroContent } from "../index";
import Button from "../reusables/buttons/Buttons";
import { motion, useScroll, useTransform } from "framer-motion";
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

  // Calculate progress bar width
  const progressWidth =
    sliderWidth > 0 && scrollWidth > sliderWidth
      ? `${(activeIndex / (imageSlide.length - 1)) * 100}%`
      : "0%";

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen h-auto py-16 px-5 md:px-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      {/* Section Header with Line */}
      <motion.span
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
      </motion.span>

      {/* Main Content */}
      <div className="w-full flex flex-col justify-center mb-16">
        <div className="w-full flex flex-col md:flex-row justify-between h-auto gap-8 md:gap-16">
          {/* Left Column */}
          <motion.span
            className="flex flex-col md:w-2/5"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {subHeroContent.subHeading}
            </h1>
            <span>
              <Button
                text={subHeroContent.buttonText}
                className="rounded-none py-3 px-6 text-white bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 hover:border transition-all duration-300 mt-4"
              />
            </span>
          </motion.span>

          {/* Right Column */}
          <motion.span
            className="md:w-3/5"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {subHeroContent.text}
            </p>

            {/* Attributes List */}
            <ul className="flex flex-wrap items-center gap-8 md:gap-12">
              {subHeroContent.attr.map((attr, i) => (
                <motion.li
                  key={i}
                  className="flex flex-col"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: false }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-1">
                    {attr.value}
                  </h2>
                  <p className="text-gray-500 font-medium">{attr.title}</p>
                </motion.li>
              ))}
            </ul>
          </motion.span>
        </div>
      </div>

      {/* Image Slider Section */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false }}
      >
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-1 mb-4 rounded-full overflow-hidden">
          <motion.div
            className="bg-blue-800 h-full rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: progressWidth }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Image Indicators */}
        <div className="flex justify-between mb-4">
          <p className="text-sm text-gray-500">
          </p>
          <div className="flex gap-2">
            {imageSlide.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === activeIndex ? "bg-blue-800" : "bg-gray-300"
                }`}
                onClick={() => {
                  const slider = sliderRef.current;
                  if (slider) {
                    const scrollAmount =
                      (slider.scrollWidth - slider.clientWidth) *
                      (i / (imageSlide.length - 1));
                    slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
                  }
                }}
              />
            ))}
          </div>
        </div>

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
            <motion.div
              key={i}
              className="flex-shrink-0 snap-center relative"
              initial={{ scale: 0.9, opacity: 0.7 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, margin: "-20%" }}
            >
              <Image
                src={img}
                width={500}
                height={500}
                alt={`Image ${i + 1}`}
                className="rounded-lg shadow-md object-cover h-60 md:h-80 w-80 md:w-96"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
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
