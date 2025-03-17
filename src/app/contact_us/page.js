"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactUs } from "@/components/index";
import Image from "next/image";
import { TextArea, Textinput } from "@/components/inputs/Textinput";

const Page = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactField = (field, value) => {
    setContactForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", contactForm);
    // Add your form submission logic here
  };

  return (
    <div className="w-full min-h-screen flex flex-col pt-24 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Title */}
      <span className="w-full max-w-4xl flex flex-row items-center mb-8 sm:mb-12">
        <span className="whitespace-nowrap text-lg font-semibold text-blue-800 uppercase tracking-tighter">
          {contactUs.title}
        </span>
        <span className="flex-grow bg-blue-800 h-[0.5px] ml-2"></span>
      </span>

      {/* Contact Content */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Contact Information */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={contactUs.logo}
                width={100}
                height={100}
                alt="Company Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold text-lg text-blue-800 tracking-wide">
              {contactUs.CompanyName}
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {contactUs.contactInfo.map((info, i) => (
              <li key={i} className="flex flex-col gap-1">
                <h4 className="font-semibold text-lg">{info.title}</h4>
                <p className="text-gray-600">{info.info}</p>
              </li>
            ))}
          </ul>

          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-center sm:text-left w-[70%]">
              {contactUs.text}
            </p>
            <button
              className="font-semibold  text-blue-800 hover:text-blue-600 transition-colors duration-300"
              aria-label="Make a Call"
            >
              Make A Call
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Textinput
              value={contactForm.name}
              label="Your Name"
              labelStyle="bg-white"
              id="name"
              changed={(value) => handleContactField("name", value)}
            />
            <Textinput
              value={contactForm.email}
              label="Your Email"
              labelStyle="bg-white"
              id="email"
              changed={(value) => handleContactField("email", value)}
            />
            <TextArea
              label="Your Message"
              labelStyle="bg-white"
              value={contactForm.message}
              changed={(e) =>
                setContactForm({ ...contactForm, message: e.target.value })
              }
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              aria-label="Submit Form"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
