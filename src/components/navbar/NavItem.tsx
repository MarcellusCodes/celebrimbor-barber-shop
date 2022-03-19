import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const NavItem: React.FC = ({ item }) => {
  const NavUnderlineLeft = useRef();
  const NavUnderlineRight = useRef();
  const onHover = () => {
    gsap
      .timeline({ defaults: { ease: "Power4.easeInOut", duration: 0.3 } })
      .to(NavUnderlineLeft.current, {
        scaleX: 0.3,
      })
      .to(NavUnderlineRight.current, {
        x: 0,
        delay: -0.3,
      });
  };

  const unHover = () => {
    gsap
      .timeline({ defaults: { ease: "Power4.easeInOut", duration: 0.3 } })
      .to(NavUnderlineRight.current, {
        x: 110,
      })
      .to(NavUnderlineLeft.current, {
        scaleX: 1,
        delay: -0.3,
      });
  };
  return (
    <li
      onMouseEnter={onHover}
      onMouseLeave={unHover}
      className="font-secondary text-primary text-xl nav-item opacity-0 -translate-x-[200px] clip-path-square-left-hidden relative w-full hidden md:block"
    >
      <Link href={item.href}>{item.name}</Link>
      <span
        ref={NavUnderlineLeft}
        className="bg-tertiary h-[3px] w-4 absolute bottom-0 left-0 origin-left nav-underline-left"
      ></span>
      <span
        ref={NavUnderlineRight}
        className="bg-tertiary h-[3px] w-[90%] translate-x-[110%] right-0 absolute bottom-0 nav-underline-right"
      ></span>
    </li>
  );
};

export default NavItem;
