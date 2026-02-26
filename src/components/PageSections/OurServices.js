import React from "react";
import { ourServices } from "../index";
import Button from "../reusables/buttons/Buttons";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const hoverVariants = {
  hover: {
    y: -5,
    transition: { duration: 0.3 },
  },
};

const OurServices = () => {
  return (
    <div className="w-full flex items-center flex-col justify-center min-h-screen h-auto py-16 px-5 md:px-24 bg-gradient-to-r from-blue-800">
      {/* Section Header with creative design */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col items-center mb-16"
      >
        <span className="text-lg font-semibold text-white uppercase tracking-wider mb-2">
          {ourServices.heading}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 text-center mb-6 max-w-3xl leading-tight">
          {ourServices.title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
      </motion.div>

      {/* Main content */}
      <div className="flex flex-col w-full max-w-7xl">
        {/* Header with animated description */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between w-full items-start md:items-end mb-16 gap-6"
        >
          <motion.div variants={itemVariants} className="md:max-w-2xl">
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              {ourServices.subHeading}
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-4 md:mt-0">
            <Button
              text={ourServices.buttonText}
              className="rounded-full py-4 px-8 text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* Services Grid with creative cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ourServices.services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-white rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-rotate-1"></div>

              <motion.div
                variants={hoverVariants}
                className="relative bg-white p-8 rounded-xl h-full flex flex-col border border-gray-100 overflow-hidden"
              >
                <div className="flex items-start mb-6">
                  <div className="text-blue-600 text-3xl mr-6 p-3 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-inner">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold text-2xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {service.heading}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {service.subHeading}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex items-center">
                    <span className="text-blue-600 font-medium cursor-pointer flex items-center group-hover:text-blue-800 transition-colors duration-300">
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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

                {/* Decorative elements */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-100 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -right-2 -top-2 w-16 h-16 bg-blue-200 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
