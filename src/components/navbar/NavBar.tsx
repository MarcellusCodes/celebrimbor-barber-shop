import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";
import { NavItem, PrimaryButton } from "../index";
import { NavItems } from "../../utils/index";

const NavBar: React.FC = () => {
  const MobileNavBtn = useRef<HTMLButtonElement>(null);
  const [ToggleNav, SetToggleNav] = useState(false);

  const activateMobileNav = () => {
    gsap.to(MobileNavBtn.current, {
      rotation: `${ToggleNav ? "-" : "+"}=180`,
      ease: "Power4.easeInOut",
      duration: 0.3,
    });

    SetToggleNav(!ToggleNav);
  };

  useLayoutEffect(() => {
    gsap
      .timeline({ defaults: { ease: "Power4.easeInOut", duration: 1.5 } })
      .to(".branding", {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        x: 0,
        delay: 4,
      })
      .to(".nav-item", {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        x: 0,
        stagger: 0.2,
        delay: -1,
      })
      .to(".nav-cta", {
        opacity: 1,
        x: 0,
        delay: -1,
      });
  }, []);

  useLayoutEffect(() => {
    gsap.to(MobileNavBtn.current, {
      opacity: 1,
      x: 0,
      ease: "Power4.easeInOut",
      duration: 1.5,
      delay: 4.3,
    });
  }, []);
  return (
    <nav className="flex flex-row items-center justify-between py-2">
      <Link href="/" passHref>
        <div className="flex flex-row items-center branding -translate-x-[100px] clip-path-square-left-hidden cursor-pointer">
          <div className="sm:w-[64px] sm:h-[64px] w-[32px] h-[32px]">
            <Image
              src="/images/branding.png"
              alt="Picture of the Shop Brand"
              width="100%"
              height="100%"
            />
          </div>
          <h2 className="font-primary text-primary text-2xl sm:text-3xl">
            Celebrimbor
          </h2>
        </div>
      </Link>
      <ul className="flex flex-row items-center space-x-6">
        {NavItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
        <PrimaryButton
          OnClick={() => {
            console.log("Hello world");
          }}
          ClassNames={
            "nav-cta clip-path-btn opacity-0 -translate-x-[200px] clip-path-square-left-hidden hidden sm:flex"
          }
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              fill="#FFFFFF"
            >
              <path d="M19 2h-1V1a1 1 0 0 0-2 0v1H8V1a1 1 0 0 0-2 0v1H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5ZM2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1H2Zm17 15H5a3 3 0 0 1-3-3v-9h20v9a3 3 0 0 1-3 3Z" />
              <circle cx={12} cy={15} r={1.5} />
              <circle cx={7} cy={15} r={1.5} />
              <circle cx={17} cy={15} r={1.5} />
            </svg>
          }
        >
          Termin
        </PrimaryButton>
        <button
          onClick={activateMobileNav}
          ref={MobileNavBtn}
          className="md:hidden block nav-cta opacity-0 -translate-x-[200px]"
        >
          <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            className="fill-current text-primary rotate-90"
          >
            <path d="M15 20H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h10a5.006 5.006 0 0 1 5 5v10a5.006 5.006 0 0 1-5 5zM5 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm19 17V6a1 1 0 0 0-2 0v13a3 3 0 0 1-3 3H6a1 1 0 0 0 0 2h13a5.006 5.006 0 0 0 5-5z" />
          </svg>
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
