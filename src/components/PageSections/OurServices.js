import React from "react";
import { ourServices } from "../index";
import Button from "../reusables/buttons/Buttons";

const OurServices = () => {
  return (
    <div className="w-full flex items-center flex-col justify-center min-h-screen h-auto py-16 px-5 md:px-24 bg-gray-50">
      {/* Section Header with Line */}
      <span className="w-full flex flex-row items-center mb-12">
        <span className="whitespace-nowrap text-lg font-semibold text-blue-800 uppercase tracking-tighter">
          {ourServices.heading}
        </span>
        <span className="flex-grow bg-blue-800 h-[0.5px] ml-2"></span>
      </span>

      <div className="flex flex-col w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center mb-16 gap-6">
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
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourServices.services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-4">
                  <div className="text-blue-800 text-2xl mr-4 mt-1 p-3 bg-blue-50 rounded-full">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
                      {service.heading}
                    </h2>
                    <p className="text-gray-600">{service.subHeading}</p>
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <div className="flex justify-end">
                    <span
                      className="text-blue-800 font-medium cursor-pointer flex items-center"
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
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
