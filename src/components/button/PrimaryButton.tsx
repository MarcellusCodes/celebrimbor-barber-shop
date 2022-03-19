import React from "react";
import { gsap } from "gsap";

interface PrimayButtonProps {
  OnClick: () => void;
  ClassNames: string;
  icon: any;
}

const PrimaryButton: React.FC<PrimayButtonProps> = ({
  children,
  OnClick,
  ClassNames,
  icon,
}) => {
  const OnHover = () => {
    gsap
      .timeline({ defaults: { ease: "Power4.easeInOut", duration: 0.3 } })
      .to(".button-title", {
        x: -10,
      })
      .to(".button-icon", {
        x: 0,
        opacity: 1,
        delay: -0.3,
      });
  };

  const UnHover = () => {
    gsap
      .timeline({ defaults: { ease: "Power4.easeInOut", duration: 0.3 } })
      .to(".button-icon", {
        x: -50,
        opacity: 0,
      })
      .to(".button-title", {
        x: 0,
        delay: -0.3,
      });
  };

  const OnActive = () => {
    gsap
      .timeline({ defaults: { ease: "Power4.easeInOut", duration: 0.3 } })
      .to(".button-container", {
        scale: 0.95,
      });
  };

  const UnActive = () => {
    gsap
      .timeline({ defaults: { ease: "Power4.easeInOut", duration: 0.3 } })
      .to(".button-container", {
        scale: 1,
      });
  };

  return (
    <button
      onClick={OnClick}
      onMouseEnter={OnHover}
      onMouseLeave={UnHover}
      onMouseDown={OnActive}
      onMouseUp={UnActive}
      className={`px-8 py-2 font-secondary text-xl bg-tertiary text-slate-50 rounded-md ${ClassNames} flex justify-center items-center relative button-container`}
    >
      <span className="button-title">{children}</span>
      <span className="opacity-0 absolute right-4 -translate-x-[50px] button-icon">
        {icon}
      </span>
    </button>
  );
};

export default PrimaryButton;
