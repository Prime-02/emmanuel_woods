'use client'
import { aboutUs } from "@/components/index";
import React, { useState, useEffect } from "react";


// Simple animation hook to replace framer-motion
const useInView = (threshold = 0.1) => {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, threshold]);

  return [setRef, inView];
};

// Counter animation
const Counter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [setRef, inView] = useInView();

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseInt(value);
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration, inView]);

  return <span ref={setRef}>{count}+</span>;
};

// Fade In component
const FadeIn = ({ children, delay = 0, direction = null }) => {
  const [setRef, inView] = useInView();
  const [style, setStyle] = useState({
    opacity: 0,
    transform:
      direction === "up"
        ? "translateY(20px)"
        : direction === "down"
        ? "translateY(-20px)"
        : direction === "left"
        ? "translateX(-20px)"
        : direction === "right"
        ? "translateX(20px)"
        : "translateY(20px)",
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setStyle({
          opacity: 1,
          transform: "translate(0)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        });
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  return (
    <div ref={setRef} style={style}>
      {children}
    </div>
  );
};

const AboutUsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-800 min-h-screen flex items-center text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {aboutUs.companyName}
            </h1>
            <div className="h-1 w-24 bg-white mb-8"></div>
            <h2 className="text-3xl font-semibold mb-12">
              {aboutUs.AboutCardHeader.heading}
            </h2>
          </FadeIn>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {aboutUs.AboutCardHeader.achievments.map((achievement, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="text-center bg-blue-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                  <span className="block text-4xl md:text-5xl font-bold mb-2">
                    <Counter value={achievement.value} />
                  </span>
                  <span className="text-lg">{achievement.text}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="left">
            <h2 className="text-3xl font-bold mb-8 text-blue-800">
              {aboutUs.introduction.title}
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              {aboutUs.introduction.text}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-12 text-blue-800 text-center">
              {aboutUs.allTexts[0].section}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutUs.allTexts[0].content.map((item, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="bg-gray-50 p-8 rounded-lg shadow-md border-t-4 border-blue-800 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                    {item.key}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 md:px-8 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {aboutUs.allTexts[1].section}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutUs.allTexts[1].content.map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-blue-700 p-6 rounded-lg shadow-md hover:scale-103 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-3">{value.key}</h3>
                  <p className="text-blue-100">{value.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-12 text-blue-800 text-center">
              {aboutUs.allTexts[2].section}
            </h2>
          </FadeIn>

          <ul className="space-y-4">
            {aboutUs.allTexts[2].content[0].items.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <li className="flex items-start bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-800 hover:shadow-md transition-shadow duration-300">
                  <span className="text-blue-800 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold mb-12 text-blue-800 text-center">
              {aboutUs.allTexts[3].section}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutUs.allTexts[3].content[0].items.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border-b-2 border-blue-800 hover:translate-y-1 transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    {service.split(":")[0]}:
                  </h3>
                  <p className="text-gray-700">{service.split(":")[1]}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Legacy */}
      <section className="py-16 px-4 md:px-8 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Team */}
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold mb-6">
                {aboutUs.allTexts[4].section}
              </h2>
              <div className="h-1 w-16 bg-white mb-6"></div>
              <p className="text-blue-100 leading-relaxed">
                {aboutUs.allTexts[4].content[0].text}
              </p>
            </FadeIn>

            {/* Legacy */}
            <FadeIn direction="right">
              <h2 className="text-3xl font-bold mb-6">
                {aboutUs.allTexts[5].section}
              </h2>
              <div className="h-1 w-16 bg-white mb-6"></div>
              <p className="text-blue-100 leading-relaxed">
                {aboutUs.allTexts[5].content[0].text}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn direction="up">
            <h2 className="text-2xl font-bold mb-4">{aboutUs.companyName}</h2>
            <p className="text-gray-400 mb-6">
              Headquarters: {aboutUs.headquarters}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-blue-400 hover:text-white transition duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-white transition duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-white transition duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-sm text-gray-500">
              © {new Date().getFullYear()} {aboutUs.companyName}. All rights
              reserved.
            </p>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
