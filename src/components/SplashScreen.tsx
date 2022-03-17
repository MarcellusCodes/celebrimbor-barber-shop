import React, { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import ScissorJson from "../assets/scissor.json";

const SplashScreen: React.FC = () => {
  useLayoutEffect(() => {
    gsap
      .timeline({ defaults: { ease: "Power4.easeInOut", duration: 1.5 } })
      .to(".splash-title", {
        opacity: 1,
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        y: 100,
      })
      .to(".splash-scissor", {
        y: 0,
        opacity: 1,
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        duration: 4,
        delay: -2,
      })
      .to(".splash-scissor", {
        rotate: 180,
        delay: -2,
      })
      .to(".splash-scissor", {
        y: 200,
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        delay: -1,
      })
      .to(".splash-title", {
        y: 200,
        "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        delay: -1,
      })
      .to(".splash-screen", {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        delay: -0.3,
      });
  }, []);
  return (
    <div className="splash-screen absolute left-0 top-0 w-full h-screen bg-primary clip-path-square-visible">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="splash-title font-primary text-2xl sm:text-4xl md:text-6xl text-tertiary mb-20 opacity-0 clip-path-square-hidden">
          Celebrimbor Barber Shop
        </h1>
        <div className="splash-scissor w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] opacity-0 translate-y-[200px] clip-path-square-hidden">
          <Lottie loop={true} animationData={ScissorJson} />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
