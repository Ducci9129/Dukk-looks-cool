import Link from 'next/link'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import React, { useLayoutEffect, useRef } from "react";

export default function Navbar() {
  const nav = useRef();
  useLayoutEffect(() => {
    gsap.to(nav.current, {
      y: "8vh",
      scrollTrigger: {
        trigger: nav.current,
        scrub: true,
        start: "top top",
        end: "bottom+=100 top",
      }
    })
  }, []);
  return (
    <nav ref={nav}>
      <a href="https://main.ducci9129.repl.co" className="logo">
        <h2>[C<span className="oring">ooool</span><span className="close">]</span></h2>
      </a>
      <div className="navLinks">
        <Link href="tools-resources">
          <span>My Creations</span>
        </Link>
        <Link href="inspiration">
          <span>My Socials</span>
        </Link>
        <Link href="learn">
          <span>Who I Am</span>
        </Link>
        <Link href="people-agencies">
          <span>People</span>
        </Link>
      </div>
    </nav>
  )
}