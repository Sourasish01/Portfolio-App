"use client";
import React, { useState, useRef, useEffect } from "react";
import "./Menu.css";
import Link from "next/link";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Menu = () => {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const timeline = useRef();

  useGSAP(() => {
    // Set initial hidden state
    gsap.set(".menu-link-item-holder", {
      y: 75,
      opacity: 0,
      scale: 0.8,
    });
  
    timeline.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: -0.75,
      });
  }, { scope: container });
  

  useEffect(() => {
    if (isMenuOpen) {
      // Reset first
      gsap.set(".menu-link-item-holder", { y: 75, opacity: 1, scale: 0.8 });
  
      // Small delay to allow DOM to fully render before animating
      setTimeout(() => {
        timeline.current.restart();
      }, 50); // 50ms is enough
    } else {
      timeline.current.reverse();
    }
  }, [isMenuOpen]);
  
  

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">Portfolio</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>

      <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">Portfolio</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>

        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>

        <div>
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-info">
            <a href="#">X &#8599;</a>
            <a href="#">X &#8599;</a>
            <a href="#">X &#8599;</a>
            <a href="#">X &#8599;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
