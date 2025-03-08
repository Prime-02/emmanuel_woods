import React from "react";
import { ourServices } from "../index";
import Button from "../reusables/buttons/Buttons";
import { motion } from "framer-motion";

const OurServices = () => {
  return (
    <div className="w-full flex items-center flex-col justify-center min-h-screen h-auto py-16 px-5 md:px-24 bg-gray-50">
      {/* Section Header with Line */}
      <motion.span
        className="w-full flex flex-row items-center mb-12"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <span className="whitespace-nowrap text-lg font-semibold text-blue-800 uppercase tracking-tighter">
          {ourServices.heading}
        </span>
        <span className="flex-grow bg-blue-800 h-[0.5px] ml-2"></span>
      </motion.span>

      <div className="flex flex-col w-full">
        {/* Header Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between w-full items-start md:items-center mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="md:max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {ourServices.title}
            </h1>
            <p className="text-gray-600 text-lg">{ourServices.subHeading}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button
              text={ourServices.buttonText}
              className="rounded-none py-3 px-6 text-white bg-blue-800 hover:text-blue-800 hover:bg-white hover:border-blue-800 hover:border transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourServices.services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-4">
                  <motion.div
                    className="text-blue-800 text-2xl mr-4 mt-1 p-3 bg-blue-50 rounded-full"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h2 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
                      {service.heading}
                    </h2>
                    <p className="text-gray-600">{service.subHeading}</p>
                  </div>
                </div>

                <motion.div
                  className="mt-auto pt-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex justify-end">
                    <motion.span
                      className="text-blue-800 font-medium cursor-pointer flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
