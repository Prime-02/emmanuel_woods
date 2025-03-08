import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

// Ensure CSSPlugin is registered (required for GSAP to work with CSS)
gsap.registerPlugin(CSSPlugin);

const AnimatedText = () => {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      const title1 = gsap.timeline({ repeat: -1, repeatDelay: 1 }); // Infinite loop with 1-second delay between loops

      title1
        .to(buttonRef.current, {
          duration: 0,
          visibility: "hidden",
          opacity: 0,
        })
        .staggerFromTo(
          titleRef.current.querySelectorAll(".title span"),
          0.5,
          { ease: "back.out(1.7)", opacity: 0, y: -80 },
          { ease: "back.out(1.7)", opacity: 1, y: 0 },
          0.05
        )
        .to(buttonRef.current, {
          duration: 0.2,
          visibility: "visible",
          opacity: 1,
        });
    };

    animateText();
  }, []);

  return (
    <section className="container">
      <h1 ref={titleRef}>
        <span className="title text-4xl">
          {"Emmanuel".split("").map((letter, index) => (
            <span key={index} style={{ color: "#000000" }}>
              {letter}
            </span>
          ))}
        </span>
        <span className="title">
          {"Woods".split("").map((letter, index) => (
            <span key={index} style={{ color: "#000000" }}>
              {letter}
            </span>
          ))}
        </span>
      </h1>
      <div className="button" ref={buttonRef}>
        {"".split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Fjalla+One");

        html,
        body {
          height: 100%;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: "Fjalla One", sans-serif;
          background: linear-gradient(to bottom, #FFFFF 0%, #656f6f 100%);
        }

        .container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 225px;
          text-align: center;
        }

        .button {
          position: relative;
          bottom: -65px;
          left: 50%;
          transform: translateX(-50%) rotate(-10deg);
          color: #000000;
          text-transform: uppercase;
          opacity: 0;
          visibility: hidden;
          cursor: pointer;
        }

        .button span {
          transform: skew(-10deg);
          display: block;
          float: left;
          text-shadow: #533d4a 1px 1px, #533d4a 2px 2px, #533d4a 3px 3px,
            #533d4a 4px 4px;
        }

        h1 {
          color: #fff;
          text-transform: uppercase;
          font-size: 42px;
          margin: 0;
          line-height: 47px;
          letter-spacing: 2px;
        }

        .title {
          transform: translateX(-50%) rotate(-10deg);
          display: block;
          float: left;
          left: 50%;
          position: relative;
        }

        .title span {
          transform: skew(-10deg);
          display: block;
          float: left;
          text-shadow: #533d4a 1px 1px, #533d4a 2px 2px, #533d4a 3px 3px,
            #533d4a 4px 4px, #533d4a 5px 5px, #533d4a 6px 6px;
          min-width: 10px;
          min-height: 10px;
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default AnimatedText;
