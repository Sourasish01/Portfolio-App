"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
//import "./styles.css"; // make sure to include your CSS here
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";


gsap.registerPlugin(CustomEase);
CustomEase.create("hop", ".9, 0, 0.1, 1");

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const tl = gsap.timeline({
        delay: 0.3,
        defaults: { ease: "hop" },
      });

      const counts = document.querySelectorAll(".count");

      counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");

        gsap.set(digits, { y: "100%", });

        // Animate in
        tl.to(digits, {
          y: "0%",
          duration: 1,
          stagger: 0.05,
          opacity: 1,
        }, index * 1);

        // Animate out
        tl.to(digits, {
          y: "-100%",
         
          duration: 1,
          stagger: 0.05,
        });

        // Hide after animation to prevent stacking
        tl.set(count, { autoAlpha: 0 });
      });

      tl.to(".spinner", {
        opacity: 0,
        duration: 0.3,
      });

      tl.to(
        ".word h1",
        {
          y: "0%",
          duration: 1,
        },
        "<"
      );

      tl.to(".divider", {
        scaleY: "100%",
        duration: 1,
        onComplete: () => {
          gsap.to(".divider", { opacity: 0, duration: 0.4, delay: 0.3});
        },
      });

      tl.to(".word-1", {
        y: "100%",
        duration: 1,
        delay: 0.3,
      });

      tl.to(
        ".word-2", {
          y: "-100%",
          duration: 1,
        },
        "<"
      );

      tl.to(
        ".block",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.75,
          opacity: 0,
          onComplete: () => {
            setLoading(false); // ✅ Switch to main content here
          },
        },
        "<"
      );
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 min-w-screen min-h-screen overflow-hidden z-2">
          <div className="absolute min-h-full min-w-full flex">
            <div className="block clip-custom min-w-full min-h-full bg-[#303030]"></div>
            <div className="block clip-custom min-w-full min-h-full bg-[#303030]"></div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-1 overflow-hidden">
            <div className="word word-1 relative -left-1 ">
              <h1 className="text-center text-white text-4xl leading-none transform -translate-y-6/5">
                <span className="font-medium italic antialiased font-pp">Personal</span>
              </h1>
            </div>

            <div className="word word-2 relative -right-1">
              <h1 className="text-center text-white text-4xl leading-none transform translate-y-6/5">
                <span className="font-medium italic antialiased font-pp">Portfolio</span>
              </h1>
            </div>
          </div>

           <div className="divider absolute top-0 left-1/2 transform -translate-x-1/2 scale-y-0 origin-top w-0.75 min-h-full bg-white"></div> {/* Vertical line */}

          <div className="spinner absolute bottom-1/10 left-1/2 transform -translate-x-1/2">
            <div className="min-w-[50px] min-h-[50px] border-[1.4px] border-white border-t-[1.4px] border-t-[rgba(255,255,255,0.125)] rounded-full animate-spin"></div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 ">
            <div className="count absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold flex">
              <div className="digit overflow-hidden"><h1 className="text-[15rem] font-normal font-pp opacity-0">0</h1></div>
              <div className="digit overflow-hidden"><h1 className="text-[15rem] font-normal font-pp opacity-0">0</h1></div>
            </div>

            <div className="count absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold flex">
              <div className="digit overflow-hidden"><h1 className="text-[15rem] font-normal font-pp opacity-0">2</h1></div>
              <div className="digit overflow-hidden"><h1 className="text-[15rem] font-normal font-pp opacity-0">7</h1></div>
            </div>

            <div className="count absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold flex">
              <div className="digit overflow-hidden"><h1 className="text-[15rem] font-normal font-pp opacity-0">6</h1></div>
              <div className="digit overflow-hidden"><h1 className="text-[15rem] font-normal font-pp opacity-0">5</h1></div>
            </div>

            <div className="count absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold flex">
              <div className="digit overflow-hidden"><h1 className="text-[15rem] font-normal font-pp opacity-0">9</h1></div>
              <div className="digit overflow-hidden"><h1 className="text-[15rem] font-normal font-pp opacity-0">8</h1></div>
            </div>

            <div className="count absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold flex">
              <div className="digit overflow-hidden"><h1 className="text-[15rem] font-normal font-pp opacity-0">9</h1></div>
              <div className="digit overflow-hidden"><h1 className="text-[15rem] font-normal font-pp opacity-0">9</h1></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="content">
          <h2>Welcome to My Portfolio</h2>
          <p>This is a showcase of my work and projects.</p>
        </div>
      )}
    </>
  );
}
