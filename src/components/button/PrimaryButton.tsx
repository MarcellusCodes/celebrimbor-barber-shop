import React, { useRef } from "react";
import { gsap } from "gsap";

interface PrimayButtonProps {
  OnClick: () => void;
  ClassNames: string;
  icon: any;
  direction: string;
}

const PrimaryButton: React.FC<PrimayButtonProps> = ({
  children,
  OnClick,
  ClassNames,
  icon,
  direction,
}) => {
  const ButtonTitle = useRef<HTMLSpanElement>(null);
  const ButtonIcon = useRef<HTMLSpanElement>(null);
  const ButtonContainer = useRef<HTMLButtonElement>(null);
  const OnHover = () => {
    gsap
      .timeline({ defaults: { ease: "Power4.easeInOut", duration: 0.3 } })
      .to(ButtonTitle.current, {
        x: -10,
      })
      .to(ButtonIcon.current, {
        x: 0,
        opacity: 1,
        delay: -0.3,
      });
  };

  const UnHover = () => {
    gsap
      .timeline({ defaults: { ease: "Power4.easeInOut", duration: 0.3 } })
      .to(ButtonIcon.current, {
        x: -50,
        opacity: 0,
      })
      .to(ButtonTitle.current, {
        x: 0,
        delay: -0.3,
      });
  };

  const OnActive = () => {
    gsap
      .timeline({ defaults: { ease: "Power4.easeInOut", duration: 0.3 } })
      .to(ButtonContainer.current, {
        scale: 0.95,
      });
  };

  const UnActive = () => {
    gsap
      .timeline({ defaults: { ease: "Power4.easeInOut", duration: 0.3 } })
      .to(ButtonContainer.current, {
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
      ref={ButtonContainer}
      className={`px-8 py-2 font-secondary text-xl bg-tertiary text-slate-50 rounded-md ${ClassNames} flex justify-center items-center relative ${
        direction === "left" ? "clip-path-btn-left" : "clip-path-btn-right"
      }`}
    >
      <span ref={ButtonTitle}>{children}</span>
      <span
        ref={ButtonIcon}
        className="opacity-0 absolute right-4 -translate-x-[50px]"
      >
        {icon}
      </span>
    </button>
  );
};

export default PrimaryButton;
