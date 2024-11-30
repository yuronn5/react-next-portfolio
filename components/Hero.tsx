"use client";
import { motion } from "framer-motion";
import obj from "@/assets/obj1.png";
import profilepic from "@/assets/profilepic.png";
import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "DD335C"];

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      repeat: Infinity,
      duration: 10,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Open for work
        </span>

        <h1 className="mt-10 max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl">
          Yurii Bilous
        </h1>
        <h2 className="mt-6 max-w-1xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-1xl md:text-2xl">
          E-Commerce Front-End Specialist | 5+ Years of Experience
        </h2>
        <Image src={profilepic} alt="profile-pic" width={250} />
        {/* <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
          <Image
            src={obj}
            alt="object"
            width={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src={obj}
            alt="object"
            width={30}
            className="rounded-2xl mx-auto"
          />
          <Image
            src={obj}
            alt="object"
            width={30}
            className="rounded-2xl mx-auto"
          />
          <p>80+ Happy Clients</p>
        </div> */}

        <div className="w-[80%] key-metrics my-12  text-center rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-6">Key Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="metric-item">
              <div className="metric-value text-4xl font-semibold text-blue-500 mb-2">
                40%
              </div>
              <div className="metric-description text-lg text-gray-300">
                Faster Load Times
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-value text-4xl font-semibold text-blue-500 mb-2">
                35%
              </div>
              <div className="metric-description text-lg text-gray-300">
                Increase in Engagement
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-value text-4xl font-semibold text-blue-500 mb-2">
                15+
              </div>
              <div className="metric-description text-lg text-gray-300">
                E-Commerce Platforms Developed
              </div>
            </div>
          </div>
        </div>

        <p className="my-6 max-w-xl text-center">
          Building high-performance e-commerce solutions with React, Next.js,
          Shopify, and Magento
        </p>
        <motion.a
          href="/CV/Yurii_Bilous_ECommerce_Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
        >
          View Resume
          <FiArrowRight />
        </motion.a>
      </div>

      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  );
};
