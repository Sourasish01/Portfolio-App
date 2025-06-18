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
        delay: 0.25,
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
          stagger: 0.5,
          delay: 0.75,
          y: "-100%",
          opacity: 0,
          onStart: () => {gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" });},
        },
        "<"
      );

      tl.to(
        [".nav", ".line h1", ".line p"],
        {
          y: "0%",
          duration: 1.5,
          stagger: 0.2,
        },
        "<"
      );

      tl.to([".cta", ".cta-icon"], {
        scale: 1,
        duration: 1.5,
        stagger: 0.75,
        delay: 0.75,
      }, "<");

      tl.to(".cta-label p", {
        y: "0%",
        duration: 1.5,
        delay: 0.5,
      }, "<");


      



    }
  }, [loading]);

  return (
    <>
      {loading ? (
      <div>  
        <div className="fixed top-0 left-0 min-w-screen min-h-screen overflow-hidden z-20">
          <div className="absolute min-h-full min-w-full flex">
            <div className="block clip-custom min-w-1/2 min-h-full bg-[#230707]"></div>
            <div className="block clip-custom min-w-1/2 min-h-full bg-[#120b0b]"></div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-1 overflow-hidden p-1">
            <div className="word word-1 relative -left-1 ">
              <h1 className="text-center text-white text-4xl leading-normal transform -translate-y-6/5">
                <span className="font-medium italic antialiased font-pp">Personal</span>
              </h1>
            </div>

            <div className="word word-2 relative -right-1">
              <h1 className="text-center text-white text-4xl leading-normal transform translate-y-6/5">
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

        <div className=" relative min-h-screen min-w-screen overflow-hidden ">
          <div className="hero-img absolute inset-0 scale-150 will-change-transform bg-[#303030] -z-10">


          </div>

          <div className="nav absolute top-0 w-full px-6 py-4 flex justify-between items-center z-10 ">
            <div className="logo text-lg font-bold text-white">
              Logo
            </div>
            <div className="nav-links flex gap-4">
              {["Home", "About", "Contact"].map((link, i) => (
              <div key={i} className="text-white transition font-medium">
                {link}
              </div>
            ))}
            </div>
            <div className="btn flex w-24 h-10  rounded-md text-white justify-center items-center">
              Button
            </div>
          </div>

          <div className="header w-full h-full [padding-top:25svh] flex flex-col items-center gap-4">
            <div className="hero-copy text-center">
              <div className="line">
                <h1><span className="text-5xl md:text-6xl font-semibold text-amber-900 font-pp italic">Rooted</span> in care.</h1>
              </div>
              <div className="line">
                <h1>Grown with <span className="font-medium italic antialiased font-pp">kindness</span></h1>
              </div>
              <div className="line">
                <p>Skincare that stays true to nature and to you.</p>
              </div>
            </div>
          </div>

          <div className="cta absolute left-1/2 bottom-12 transform -translate-x-1/2 scale-0 w-1/2 h-15 p-2 flex justify-end bg-white rounded-4xl will-change-transform">
            <div className="cta-label absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-black font-medium">View all products</p>
            </div>
            <div className="cta-icon relative min-h-full flex items-center justify-center bg-black rounded-4xl will-change-transform transform scale-0">
              
            </div>
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
