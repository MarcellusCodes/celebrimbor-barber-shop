import React, { useEffect } from "react";
import { PrimaryButton } from "../components/index";
import Image from "next/image";
import { gsap } from "gsap";

const Header = () => {
  useEffect(() => {
    console.log(window.innerWidth);
    gsap
      .timeline({ defaults: { ease: "Power4.easeInOut", duration: 1.5 } })
      .to(".header-caption", {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
        y: 0,
        delay: window.innerWidth < 900 ? 4.5 : 5.5,
      })
      .to(".header-title", {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
        y: 0,
        delay: -1,
      })
      .to(".header-description", {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
        y: 0,
        delay: -1,
      })
      .to(".header-cta", {
        opacity: 1,
        y: 0,
        delay: -1,
      })
      .to(".header-image-left", {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
        y: 0,
        delay: -1,
      })
      .to(".header-image-middle", {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
        y: 96,
        delay: -1,
      })
      .to(".header-image-right", {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
        y: 0,
        delay: -1,
      });
  }, []);
  return (
    <header className="flex flex-col md:flex-row item-start md:items-center justify-between pb-36 pt-16 md:pt-36">
      <div className="flex flex-col items-start space-y-6">
        <p className="text-lg text-tertiary font-secondary header-caption opacity-0 clip-path-square-top-hidden -translate-y-[200px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={16}
            height={16}
            className="fill-current inline-block mr-2"
          >
            <path d="M11.828 16.462a53.471 53.471 0 0 1-3.685-5.776C9.665 7.709 11 4.189 11 1a1 1 0 0 0-2 0 18.683 18.683 0 0 1-1.995 7.431A18.694 18.694 0 0 1 5 1a1 1 0 0 0-2 0c0 3.174 1.342 6.7 2.868 9.685a50.636 50.636 0 0 1-3.695 5.777A3.986 3.986 0 1 0 7 22.618a3.985 3.985 0 1 0 4.828-6.156ZM4 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm.883-5.895a50.253 50.253 0 0 0 2.122-3.342c.784 1.35 1.534 2.5 2.117 3.341A3.984 3.984 0 0 0 7 17.382a3.989 3.989 0 0 0-2.117-1.277ZM10 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm8-16v2h5a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v5a1 1 0 0 1-2 0V5a5.006 5.006 0 0 1 5-5h2a1 1 0 0 1 0 2h-2a3 3 0 0 0-2.816 2H23a1 1 0 0 1 0 2Z" />
          </svg>
          <span>Next Level Haarschnitte</span>
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-primary font-primary header-title opacity-0 clip-path-square-top-hidden -translate-y-[100px]">
          Barber Shop
        </h1>
        <p className="text-secondary text-lg font-secondary overflow-hidden max-w-[60ch] header-description opacity-0 clip-path-square-top-hidden -translate-y-[100px]">
          Waschen, Schneiden Föhnen, Augenbrauen, Kopfmassage, Bart, Stylen und
          mehr das komplette Programm das ein Mann braucht. Schon ab 30 € im
          komplett Packet!
        </p>
        <PrimaryButton
          OnClick={() => {
            console.log("Hello world");
          }}
          ClassNames={"clip-path-btn opacity-0 -translate-y-[100px] header-cta"}
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
          direction="right"
        >
          Termin vereinbaren
        </PrimaryButton>
      </div>
      <div className="flex flex-row items-center gap-3 mt-12 md:mt-0 self-center">
        <div className="w-[100px] h-[300px] sm:w-[150px] sm:h-[400px] md:w-[100px] md:h-[300px] lg:w-[150px] lg:h-[400px] xl:w-[200px] xl:h-[500px] shadow-md shadow-primary rounded-md relative overflow-hidden header-image-left opacity-0 clip-path-square-top-hidden -translate-y-[100px]">
          <Image
            src="/images/header_1.jpg"
            alt="Picture of the Shop Brand"
            width="100%"
            height="100%"
            layout="fill"
          />
        </div>
        <div className="w-[100px] h-[300px] sm:w-[150px] sm:h-[400px] md:w-[100px] md:h-[300px] lg:w-[150px] lg:h-[400px] xl:w-[200px] xl:h-[500px] shadow-md shadow-primary rounded-md relative hover:translate-y-0 overflow-hidden header-image-middle opacity-0 clip-path-square-top-hidden -translate-y-[100px]">
          <Image
            src="/images/header_2.jpg"
            alt="Picture of the Shop Brand"
            width="100%"
            height="100%"
            layout="fill"
          />
        </div>
        <div className="w-[100px] h-[300px] sm:w-[150px] sm:h-[400px] md:w-[100px] md:h-[300px] lg:w-[150px] lg:h-[400px] xl:w-[200px] xl:h-[500px]  shadow-md shadow-primary rounded-md relative overflow-hidden header-image-right opacity-0 clip-path-square-top-hidden -translate-y-[100px]">
          <Image
            src="/images/header_3.jpg"
            alt="Picture of the Shop Brand"
            width="100%"
            height="100%"
            layout="fill"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
