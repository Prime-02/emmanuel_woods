import React from "react";
import { HowWeWork, imageSlide } from "../index";
import Button from "../reusables/buttons/Buttons";
import Image from "next/image";
import { motion } from "framer-motion";

const HowweWork = () => {
  return (
    <div className="w-full md:w-[80%]  min-h-screen h-auto flex flex-col justify-start py-16 px-5 md:px-24">
      {/* Section Header with Line */}
      <motion.span
        className="w-full flex flex-row items-center mb-12"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <span className="flex-grow bg-blue-800 h-[0.5px] ml-2"></span>
        <span className="whitespace-nowrap text-lg font-semibold text-blue-800 uppercase tracking-tighter">
          {HowWeWork.heading}
        </span>
      </motion.span>

      <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-16">
        {/* Image Column with Animation */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 50,
          }}
          viewport={{ once: false }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={imageSlide[9]}
                width={1000}
                height={1000}
                alt="How We Work"
                className="w-full h-auto object-cover"
              />
            </motion.div>
            {/* Animated overlay effect */}
            <motion.div
              className="absolute inset-0 bg-blue-800 mix-blend-overlay"
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Content Column with Staggered Animation */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center gap-y-5"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false }}
          >
            {HowWeWork.title}
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg leading-relaxed mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: false }}
          >
            {HowWeWork.text}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: false }}
          >
            <Button
              text={HowWeWork.buttonText}
              className="rounded-none py-3 px-6 text-white bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 hover:border transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowweWork;
